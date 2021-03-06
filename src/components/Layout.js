import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from './Footer'
import Header from "./Header"
import * as layoutStyles from './home.module.scss'
import Social from './Social'
import ScrollArrow from '../components/ScrollArrow';


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <ScrollArrow />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className={layoutStyles.mainContainer}>
        <main className={layoutStyles.main}>{children}</main>
      </div>
        <nav>
          <Social />
        </nav>
        <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
