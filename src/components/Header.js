import * as React from "react"
import * as headerStyles from './home.module.scss'
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from "gatsby"
import NavBar from './NavBar'
import logo from '../images/new-logo.png'

const Header = ({ siteTitle }) => (
  
    <header className={headerStyles.header}>
      <div className={headerStyles.headerContainer}>
        <div className={headerStyles.logo}>
          <Link to="/">
            <StaticImage
              className={headerStyles.svg}
              src="../images/new-logo.png"
              formats={["AUTO", "WEBP", "AVIF"]}
              alt=""
              loading="lazy"
              placeholder="blurred"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <NavBar />
      </div>
    </header>
)

export default Header
