import React, { FunctionComponent, Fragment } from 'react'
import styled from 'styled-components'

interface IHomePageLayout {
    
}

const HomePageLayout : FunctionComponent<IHomePageLayout> = ({children}) => {

    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    display : flex;
    width : 100vw;
    min-height : 100vh;

    background : ${props => props.theme.colors.background};    
`

export default HomePageLayout