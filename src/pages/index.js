import * as React from "react"
import * as homeStyles from '../components/home.module.scss'
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Contact from '../components/Contact'


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className={homeStyles.headerBG}>
      <div className={homeStyles.wrapper}>
        <div className={homeStyles.mainHeader}>
          <div className={homeStyles.mainHeaderText}>
            <h1 className={homeStyles.h1}>Thoughtfully designed, beautiful & functional.</h1>
          </div>
        </div>
      </div>
    </section>
    <Contact />
  </Layout>
)

export default IndexPage
