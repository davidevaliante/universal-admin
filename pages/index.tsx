import { gql, useQuery } from '@apollo/client'
import React, { FunctionComponent, Fragment, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { StyledThemeContext } from '../lib/context/StyledThemeContext'
import HomePageLayout from '../components/layouts/HomePageLayout'
import MainMenu from '../components/menus/MainMenu'
import GutterLayout from '../components/layouts/GutterLayout'

interface Iindex {
    
}

const TEST = gql`
	query GetTest {
		TestTable {
			name
		}
	}
`

const index : FunctionComponent<Iindex> = ({}) => {

	const {mode, switchMode} = useContext(StyledThemeContext)

    return (
        <HomePageLayout>
			<MainMenu/>
			<GutterLayout>
				
			</GutterLayout>
        </HomePageLayout>
    )
}


export default index