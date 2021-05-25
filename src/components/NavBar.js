import React from 'react'
import * as navStyles from './home.module.scss'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const NavBar = () => {
    return (
        <nav>
            <ul className={navStyles.nav}>
                <li>
                    <AniLink activeClassName={navStyles.active} cover to="/" bg="#a7bbc7" duration={2}>Home</AniLink>
                </li>
                <li>
                    <AniLink activeClassName={navStyles.active} cover to="/about" bg="#a7bbc7" duration={2}>Work</AniLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;