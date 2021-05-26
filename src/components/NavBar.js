import React from 'react'
import * as navStyles from './home.module.scss'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const NavBar = () => {
    return (
        <nav className={navStyles.navContainer}>
            <ul className={navStyles.nav}>
                <li>
                    <AniLink activeClassName={navStyles.active} cover to="/" bg="#a7bbc7" duration={1}>Home</AniLink>
                </li>
                <li>
                    <AniLink activeClassName={navStyles.active} cover to="/work" bg="#a7bbc7" duration={1}>Work</AniLink>
                </li>
                <li>
                    <AniLink activeClassName={navStyles.active} cover to="/about" bg="#a7bbc7" duration={1}>About</AniLink>
                </li>
                <li>
                    <AniLink activeClassName={navStyles.active} cover to="/faq" bg="#a7bbc7" duration={1}>FAQ</AniLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;