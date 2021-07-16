import React, { FunctionComponent, Fragment } from 'react'
import styled from 'styled-components'

interface IGutterLayout {
    
}

const GutterLayout : FunctionComponent<IGutterLayout> = ({children}) => {

    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : flex-start;
    padding : 1rem;
`

export default GutterLayout