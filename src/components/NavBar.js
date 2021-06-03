import React from 'react'
import * as navStyles from './home.module.scss'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Link } from 'gatsby'

const NavBar = () => {

    return (
        <nav className={navStyles.navContainer}>
            <ul className={navStyles.nav}>
                <li>
                    <AniLink activeClassName={navStyles.active} fade to="/" >Home</AniLink>
                </li>
                <li>
                    <AniLink activeClassName={navStyles.active} fade to="/work">Work</AniLink>
                </li>
                <li>
                    <AniLink activeClassName={navStyles.active} fade to="/about" duration={1}>About</AniLink>
                </li>
                <li>
                    <AniLink activeClassName={navStyles.active} fade to="/faq" duration={1}>FAQ</AniLink>
                </li>
                <li>
                    <Link to="/#contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;