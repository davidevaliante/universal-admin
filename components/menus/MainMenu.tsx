import React, { FunctionComponent, Fragment, useContext } from 'react'
import styled from 'styled-components'
import { CurrentPagecontext } from '../../lib/context/CurrentPageContext'
import ThemeToggler from '../buttons/ThemeToggler'

interface IMainMenu {
    
}

const MainMenu : FunctionComponent<IMainMenu> = ({}) => {

    const {currentPage, changePage} = useContext(CurrentPagecontext)

    return (
        <MenuContainer>
            <MenuButtonsContainer>
                <MenuButton onClick={() => changePage('slots')} selected={currentPage === 'slots'}>
                    Slots
                </MenuButton>

                <MenuButton onClick={() => changePage('bonuses')} selected={currentPage === 'bonuses'}>
                    Bonuses
                </MenuButton>

                <MenuButton onClick={() => changePage('articles')} selected={currentPage === 'articles'}>
                    Articles
                </MenuButton>

                <MenuButton onClick={() => changePage('software-houses')} selected={currentPage === 'software-houses'}>
                    Software houses
                </MenuButton>

                <ThemeToggler />

            </MenuButtonsContainer>
            <Bar />
        </MenuContainer>
    )
}

const MenuButtonsContainer = styled.div`
    display : flex;
    flex-direction : column;
    height : 100%;

    div:last-child{
        margin-top : auto;
    }
`

const MenuButton = styled.div<{selected? : boolean}>`
    padding : 1rem;
    cursor: pointer;
    width : 170px;
    text-align : center;
    color : ${props => props.selected ? props.theme.colors.accent : props.theme.colors.text};
    font-weight : ${props => props.selected ? 700 : 500};
`

const Bar = styled.div`
    width : 2px;
    height : 100%;
    background : grey;
`

const MenuContainer = styled.div`
    display : flex;

    max-width : 400px;
`

export default MainMenu