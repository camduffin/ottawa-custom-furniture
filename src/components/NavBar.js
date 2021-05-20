import React from 'react'
import * as navStyles from './home.module.scss'
import { Link } from 'gatsby'

const NavBar = () => {
    return (
        <nav>
            <ul className={navStyles.nav}>
                <li>
                    <Link activeClassName={navStyles.active} to="/">Home</Link>
                </li>
                <li>
                    <Link activeClassName={navStyles.active} to="/about">Work</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;