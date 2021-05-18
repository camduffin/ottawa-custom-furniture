import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as homeStyles from '../styles/index.module.scss'
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { BsArrowRight } from 'react-icons/bs'

const IndexPage = () => (
  <Layout>
    <SEO title="Ottawa Custom Furniture" />
    <div className={homeStyles.wrapper}>
    <div className={homeStyles.header}>
      <div className={homeStyles.mainHeaderText}>
        <h1 className={homeStyles.h1}>Thoughtfully designed, beautiful & functional.</h1>
        <h2 className={homeStyles.h2}>Ottawa Custom Furniture</h2>
        <Link to="/about">
          Enter
          <BsArrowRight />
          </Link>
      </div>
      <div className={homeStyles.wood}>
        <StaticImage
          src="../images/wood.jpg"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt=""
          loading="lazy"
          placeholder="blurred"
          width={700}
          height={400}
        />
      </div>
    </div>
    </div>
  </Layout>
)

export default IndexPage
