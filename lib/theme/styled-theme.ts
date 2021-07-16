import { createGlobalStyle, DefaultTheme } from 'styled-components'
import reset from 'styled-reset'
import { ThemeType } from '../context/StyledThemeContext'
import config from '../../config.json'

export const StyledGlobalStyle = createGlobalStyle`
	${reset}

	body {
		box-sizing: border-box;
		min-height : 100vh;
		font-family : ${config.fontName}, sans-serif;
		font-weight : 500;
		font-size : 18px;

		transition : background .3s ease;

		.theme-toggler{
			cursor : pointer;
			margin-top : auto;
		}
	}
`

export const buildtheme = (mode : ThemeType) : DefaultTheme => {

	const lightTheme : DefaultTheme = {	
		mode,
		colors: {
			primary: '#3c7efa',
			accent: '#00e371',
			background : '#fff',
			text : '#1c1c1c',
		}
	}

	const darkTheme : DefaultTheme = {	
		mode,
		colors: {
			primary: '#3c7efa',
			accent: '#54e88a',
			background : '#3b3b3b',
			text : '#fafafa',
		}
	}

	return mode === 'light' ? lightTheme : darkTheme
}