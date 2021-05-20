import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import * as aboutStyles from '../components/about.module.scss'


const AboutPage = () => {

  return (

    <Layout>
      <Seo title="Work" />
      <section className={aboutStyles.aboutHeader}>
          <h1 className={aboutStyles.h1}>Work</h1>
          <div className={aboutStyles.wrapper}>
          </div>
      </section>
    </Layout>

  )

}

export default AboutPage;
