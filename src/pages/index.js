import * as React from "react"
import * as homeStyles from '../components/home.module.scss'
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Contact from '../components/Contact'
import PageTransition from 'gatsby-plugin-page-transitions';
import { StaticImage } from 'gatsby-plugin-image';


const IndexPage = () => {

  const woodenBG = '../images/wooden-bg-two.jpg';

  return (
        
          <PageTransition>
        <Layout>
          <Seo title="Home" />
          <section className={homeStyles.headerBG}>
            <div className={homeStyles.wrapper} className={homeStyles.headerContain}>
              <div className={homeStyles.mainHeader}>
                <div className={homeStyles.mainHeaderText}>
                  <h1 className={homeStyles.h1}>Thoughtfully designed, beautiful & functional.</h1>
                </div>
                <a href="#contact">
                  <div class={homeStyles.arrow}>
                    <span></span>
                    <span></span>
                    <span></span>
                    down arrow
                  </div>
              </a>
              </div>
            </div>
          </section>
          <Contact />
        </Layout>
          </PageTransition>
  )
}

export default IndexPage;
