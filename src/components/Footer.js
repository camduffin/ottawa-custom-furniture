import React from 'react'
import * as footerStyles from '../styles/index.module.scss'



const Footer = () => {
    return (

        <footer className={footerStyles.footer}>
            <p>© {new Date().getFullYear()} Ottawa Custom Furniture</p>
        </footer>

    )
}

export default Footer;