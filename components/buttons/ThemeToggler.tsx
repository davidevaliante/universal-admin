import React, { FunctionComponent, Fragment, useContext } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { StyledThemeContext } from '../../lib/context/StyledThemeContext'

interface IThemeToggler {
    
}

const imageSize = 26

const ThemeToggler : FunctionComponent<IThemeToggler> = ({}) => {

    const { mode, switchMode } = useContext(StyledThemeContext)

    const LightButton = () => <Image className='theme-toggler' onClick={switchMode} width={imageSize} height={imageSize} src='/icons/moon.svg' /> 
    const DarkButton = () => <Image className='theme-toggler' onClick={switchMode} width={imageSize} height={imageSize} src='/icons/sun.svg' />
    return (
        <div style={{padding : '.5rem'}}>
            {mode === 'light' ? <LightButton /> : <DarkButton />}
        </div>
    )
}


export default ThemeToggler