import * as React from "react"
import * as homeStyles from '../components/home.module.scss'
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Contact from '../components/Contact'
import HomeBio from '../components/HomeBio'


const IndexPage = () => {

  return (
        
        <Layout>
          <Seo title="Home" />
          <section className={homeStyles.headerBG}>
            <div className={homeStyles.wrapper}>
              <div className={homeStyles.mainHeader}>
                <a href="#contact">
                  {/* <div class={homeStyles.arrow}>
                    <span></span>
                    <span></span>
                    <span></span>
                    down arrow
                  </div> */}
              </a>
              </div>
            </div>
          </section>
          <HomeBio />
          <Contact />
        </Layout>
  )
}

export default IndexPage;
