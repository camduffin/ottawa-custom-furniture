import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import * as aboutStyles from '../styles/about.module.scss'

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <div className={aboutStyles.wrapper}>
      <h1 className={aboutStyles.h1}>About</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quos sit ipsum sequi! Nulla enim asperiores numquam laudantium maxime dignissimos error esse, possimus aliquid repellat, eius temporibus vero earum quo accusantium ad? Voluptate enim asperiores nihil assumenda ipsa, sequi quidem ratione non impedit molestias quia error et. Animi, harum. Dolorem!</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
