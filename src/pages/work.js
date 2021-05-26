import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import * as workStyles from '../components/work.module.scss'
import { StaticImage } from 'gatsby-plugin-image';


const WorkPage = () => {

  const mantle = '../images/dark-mantle.jpg';
  const cabinet = '../images/corner-cabinet2.jpg';
  const coffeeTable = '../images/coffee-table.jpg';
  const darkRound = '../images/dark-round-table.jpg'

  return (

    <Layout>
      <Seo title="Work" />
      <section className={workStyles.aboutHeader}>
          <h1 className={workStyles.h1}>Work</h1>
          <div className={workStyles.wrapper}>
          </div>
      </section>
      <section>
        <div className={workStyles.wrapper}>
          <p className={workStyles.workWriteup}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate nisi a aliquam quisquam natus nostrum animi voluptatem quas eum?</p>
        </div>
      </section>
      <section className={workStyles.gallerySection}>
        <div className={workStyles.wrapper}>
          <ul>
            <li>
              <StaticImage
                src={mantle}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt=""
                loading="lazy"
                placeholder="blurred"
                width={200}
                height={200}
              />
              <h4>Dark Rustic Mantle</h4>
            </li>
            <li>
              <StaticImage
                src={coffeeTable}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt=""
                loading="lazy"
                placeholder="blurred"
                width={400}
                height={200}
              />
              <h4>Coffee Table Storage</h4>
            </li>
            <li>
            <StaticImage
                src={darkRound}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt=""
                loading="lazy"
                placeholder="blurred"
                width={300}
                height={200}
              />
              <h4>Extendable Table</h4>
            </li>
            <li>
            <StaticImage
                src={cabinet}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt=""
                loading="lazy"
                placeholder="blurred"
                width={200}
                height={200}
              />
              <h4>Corner Cabinet</h4>
            </li>
            <li></li>
          </ul>
        </div>
      </section>
    </Layout>

  )

}

export default WorkPage;
