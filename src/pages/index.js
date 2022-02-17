import * as React from "react"
import * as homeStyles from '../components/home.module.scss'
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Contact from '../components/Contact'
import HomeBio from '../components/HomeBio'
import headerImage from '../images/conferenceHeader.jpg'
import { Parallax } from 'react-parallax';


const IndexPage = () => {

  return (
        
        <Layout>
          <Seo title="Home" />
            <Parallax className={homeStyles.paraHeader} 
            bgImage={headerImage} strength={400} 
            bgImageAlt="A wooden conference room table with blue chairs around it"
            >
            </Parallax>
            <HomeBio />
            <Contact />
        </Layout>
  )
}

export default IndexPage;
