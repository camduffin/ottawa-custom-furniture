import * as React from "react"
import * as headerStyles from '../styles/index.module.scss'
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from "gatsby"
import NavBar from './NavBar'


const Header = ({ siteTitle }) => (
  
    <header className={headerStyles.header}>
      <div className={headerStyles.headerContainer}>
        <div className={headerStyles.logo}>
          <Link to="/">
            <StaticImage
              src="../images/logo.png"
              formats={["AUTO", "WEBP", "AVIF"]}
              alt=""
              loading="lazy"
              placeholder="blurred"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <NavBar />
      </div>
    </header>
)

export default Header
