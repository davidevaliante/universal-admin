import { NextPage } from 'next'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import config from '../config.json'

export default class MyDocument extends Document {
	static async getInitialProps(ctx : any) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
		ctx.renderPage = () =>
			originalRenderPage({
			enhanceApp: (App: NextPage) => (props : any) =>
				sheet.collectStyles(<App {...props} />),
			})

		const initialProps = await Document.getInitialProps(ctx)
		return {
			...initialProps,
			styles: (
			<>
				{initialProps.styles}
				{sheet.getStyleElement()}
			</>
			),
		}
		} finally {
		sheet.seal()
		}
	}

	render(){
		return(
			<Html>
				<Head>
					<link
						href={config.fontUrl}
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}