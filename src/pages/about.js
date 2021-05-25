import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import * as aboutStyles from '../components/about.module.scss'
import { StaticImage } from 'gatsby-plugin-image';


const AboutPage = () => {

  const hanger = '../images/hanger.jpg';
  const cabinet = '../images/cabinet.jpg';

  return (

    <Layout>
      <Seo title="Work" />
      <section className={aboutStyles.aboutHeader}>
          <h1 className={aboutStyles.h1}>Work</h1>
          <div className={aboutStyles.wrapper}>
          </div>
      </section>
      <section className={aboutStyles.gallerySection}>
        <div className={aboutStyles.wrapper}>
          <ul>
            <li>
              <StaticImage 
              src={hanger}
              width={200}
              height={200}
              />
            </li>
            <li>
              <StaticImage 
              src={cabinet}
              width={200}
              height={200}
              
              />
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
    </Layout>

  )

}

export default AboutPage;
