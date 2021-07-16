import { createContext, FunctionComponent, useEffect, useState } from 'react'

export type ThemeType = 'light' | 'dark'

export interface StyledThemeContextInterface {
    mode : ThemeType
    switchMode : any,
}

export const StyledThemeContext = createContext<StyledThemeContextInterface>({
    mode : 'light',
    switchMode: undefined
})

export const StyledThemeContextProvider : FunctionComponent<{switchMode : any, mode : ThemeType}> = ({ children, mode, switchMode }) => {


    return(
        <StyledThemeContext.Provider value={{
            mode,
            switchMode,
        }}>
            {children}
        </StyledThemeContext.Provider>
    )
}