import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Contact from '../components/Contact'
import HomeBio from '../components/HomeBio'
import HeroImage from '../components/Hero'
import MobileHero from "../components/MobileHero"
import { useState, useEffect } from 'react'



const IndexPage = () => {

  return (
        
        <Layout>
          <Seo title="Home" />
          {useWindowWidth() >= 700 ? 
          <HeroImage />
          : 
          <MobileHero/>
        }
            <HomeBio />
            <Contact />
        </Layout>
  )
}

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

  useEffect(() => {
      const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
  },[]);

  return windowWidth;
};

export default IndexPage;