import React from 'react'
import * as navStyles from './home.module.scss'
import { Link } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll';

const NavBar = () => {

    return (
        <nav className={navStyles.navContainer}>
            <ul className={navStyles.nav}>
                <li>
                    <Link to="#home-bio">Our Ethos</Link>
                </li>
                <li>
                    <Link to="/#contact">Work Together</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;