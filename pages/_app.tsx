import type { AppProps } from 'next/app'
import React, { Fragment, FunctionComponent, useContext, useEffect, useState } from 'react'
import { ThemeProvider, } from 'styled-components'
import config from '../config.json'
import {ApolloClient,InMemoryCache,ApolloProvider} from "@apollo/client"
import { StyledThemeContextProvider, ThemeType } from '../lib/context/StyledThemeContext'
import { buildtheme, StyledGlobalStyle } from '../lib/theme/styled-theme'
import { CurrentPagecontextProvider } from '../lib/context/CurrentPageContext'

const ContextProvider: FunctionComponent = ({ children }) => {

	const [mode, setMode] = useState<ThemeType>('light')
	useEffect(() => {
		setTheme(buildtheme(mode))
	}, [mode])

	const [theme, setTheme] = useState(buildtheme(mode))

	const switchMode = () => {
		if(mode === 'light') setMode('dark')
		else setMode('light')
	}

    return (
		<Fragment>
			<ThemeProvider theme={theme}>
				<StyledThemeContextProvider mode={mode} switchMode={switchMode}>
					<CurrentPagecontextProvider>
						{children}
					</CurrentPagecontextProvider>
				</StyledThemeContextProvider>
			</ThemeProvider>
		</Fragment>
	)
}

const App : FunctionComponent<AppProps> = ({Component, pageProps}) => {

  	return (
		<ContextProvider>
			<ApolloProvider client={buildApolloClient}>
				<StyledGlobalStyle />
				<Component {...pageProps} />
			</ApolloProvider>
		</ContextProvider>
	)
}

const buildApolloClient = new ApolloClient({
	uri: config.graphqlUrl,
	cache: new InMemoryCache(),
	headers: {
		'x-hasura-admin-secret': 'Pornologo11'
	}
})




export default App
