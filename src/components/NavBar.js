import React from 'react'
import * as navStyles from '../styles/index.module.scss'
import { Link } from 'gatsby'

const NavBar = () => {
    return (
        <nav className={navStyles.nav}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </nav>
    )
}

export default NavBar;