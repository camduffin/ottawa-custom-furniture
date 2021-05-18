import React from 'react'
import * as footerStyles from './home.module.scss'



const Footer = () => {
    return (

        <footer className={footerStyles.footer}>
            <p className={footerStyles.footerPara}>© {new Date().getFullYear()} Ottawa Custom Furniture</p>
        </footer>

    )
}

export default Footer;