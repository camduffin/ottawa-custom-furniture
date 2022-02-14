import * as React from "react"
import * as homeStyles from '../components/home.module.scss'
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Contact from '../components/Contact'
import HomeBio from '../components/HomeBio'
import image from '../images/conferenceTwo.jpg'
import { Parallax } from 'react-parallax';


const IndexPage = () => {

  return (
        
        <Layout>
          <Seo title="Home" />
        <Parallax className={homeStyles.paraHeader} 
        bgImage={image} strength={600} 
        bgImageAlt="A wooden conference room table with blue chairs around it"
        >
          <section>
            <div className={homeStyles.wrapper}>
              {/* <div className={homeStyles.mainHeader}> */}
                {/* <a href="#contact"> */}
                  {/* <div class={homeStyles.arrow}>
                    <span></span>
                    <span></span>
                    <span></span>
                    down arrow
                  </div> */}
              {/* </a> */}
              {/* </div> */}
            </div>
          </section>
          </Parallax>
          <HomeBio />
          <Contact />
        </Layout>
  )
}

export default IndexPage;
