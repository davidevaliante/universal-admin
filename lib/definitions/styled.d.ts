import 'styled-components'
import { ThemeType } from '../context/StyledThemeContext'

declare module 'styled-components' {
	export interface DefaultTheme {
		mode : ThemeType,
		colors: {
			primary: string,
			accent: string,
			background : string,
			text : string,
		}
	}
}