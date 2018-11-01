import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styled'

export default class Header extends Component {
    render() {
        return (
            <HeaderContainer>
                <span> <NavLink to='/'> Main </NavLink> </span>
                <span> <NavLink to='/categories'> Categories </NavLink> </span>
            </HeaderContainer> 
        )
    }
}