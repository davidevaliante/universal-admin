import { createContext, FunctionComponent, useEffect, useState } from 'react'

export type Page = 'slots' | 'software-houses' | 'bonuses' | 'articles'

export interface CurrentPageContextInterface {
    currentPage : Page
    changePage : any,
}

export const CurrentPagecontext = createContext<CurrentPageContextInterface>({
    currentPage : 'slots',
    changePage : () => {}
})

export const CurrentPagecontextProvider : FunctionComponent = ({ children}) => {

    const [currentPage, setCurrentPage] = useState<Page>('slots')

    const changePage = (change : Page) => setCurrentPage(change) 

    return(
        <CurrentPagecontext.Provider value={{
            currentPage,
            changePage,
        }}>
            {children}
        </CurrentPagecontext.Provider>
    )
}