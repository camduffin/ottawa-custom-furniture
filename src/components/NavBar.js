import React, { useState, useEffect } from 'react'
import * as navStyles from './home.module.scss'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Link } from 'gatsby'

const NavBar = () => {

    return (
        <nav className={navStyles.navContainer}>
            <ul className={navStyles.nav}>
                <li>
                    <AniLink activeClassName={navStyles.active} cover to="/" bg="#e1e1e1" duration={1}>Home</AniLink>
                </li>
                <li>
                    <AniLink activeClassName={navStyles.active} cover to="/work" bg="#e1e1e1" duration={1}>Work</AniLink>
                </li>
                <li>
                    <AniLink activeClassName={navStyles.active} cover to="/about" bg="#e1e1e1" duration={1}>About</AniLink>
                </li>
                <li>
                    <AniLink activeClassName={navStyles.active} cover to="/faq" bg="#e1e1e1" duration={1}>FAQ</AniLink>
                </li>
                <li>
                    <Link to="/#contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;