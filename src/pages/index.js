import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Contact from '../components/Contact'
import HomeBio from '../components/HomeBio'
import HeroImage from '../components/Hero'


const IndexPage = () => {
  

  return (
        
        <Layout>
          <Seo title="Home" />
            <HeroImage />
            <HomeBio />
            <Contact />
        </Layout>
  )
}

export default IndexPage;