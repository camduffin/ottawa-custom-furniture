import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import * as workStyles from '../components/work.module.scss'
import { StaticImage } from 'gatsby-plugin-image';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import AniLink from 'gatsby-plugin-transition-link/AniLink'


const WorkPage = () => {

  const mantle = '../images/dark-mantle.jpg';
  const cabinet = '../images/corner-cabinet2.jpg';
  const coffeeTable = '../images/coffee-table.jpg';
  const darkRound = '../images/dark-round-table.jpg';
  const lillyBox = '../images/lilly-box.jpg';
  const computerDesk = '../images/computer-desk.jpg';
  const headBoard = '../images/rustic-headboard.jpg';
  const officeDivider = '../images/office-divider.jpg';
  const receptionDesk = '../images/reception.jpg';
  const woodenTable = '../images/wooden-table-one.jpg';
  const tallBench = '../images/tall-bench2.jpg';


  return (

    <Layout>
      <Seo title="Work" />
      <section className={workStyles.aboutHeader}>
          <h1 className={workStyles.h1}>Work</h1>
          <div className={workStyles.wrapper}>
          </div>
      </section>
      <section className={workStyles.workWriteupSection}>
        <div className={workStyles.wrapper}>
          <p className={workStyles.workWriteup}>Cabinetry & Woodworking below - it's all really great and I just really want you to like it, ok? Check out my <a href="https://www.instagram.com/ottawacustomfurniture/" target="_blank" rel="noreferrer noopener">instagram</a> for more commissions.</p>
        </div>
      </section>
      <section className={workStyles.gallerySection}>
        <div className={workStyles.wrapper}>
          <ul>
            <li>
              <StaticImage
                src={mantle}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="fireplace with a dark wooden mantlepiece"
                loading="lazy"
                placeholder="blurred"
                width={300}
                height={300}
              />
              <h4>Dark Rustic Mantle</h4>
            </li>
            <li>
              <StaticImage
                src={lillyBox}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="white toy chest with the name lilly engraved"
                loading="lazy"
                placeholder="blurred"
                width={400}
                height={230}
              />
              <h4>Engraved Toy Chest</h4>
            </li>
            <li>
              <StaticImage
                src={officeDivider}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="a wooden slat office divider in an office building"
                loading="lazy"
                placeholder="blurred"
                width={300}
                height={250}
              />
              <h4>Office Divider</h4>
            </li>
            <li>
              <StaticImage
                src={tallBench}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="a rustic wooden beam with black metal sides"
                loading="lazy"
                placeholder="blurred"
                width={300}
                height={300}
              />
              <h4>Tall Bench with Storage</h4>
            </li>
            <li>
              <StaticImage
                src={headBoard}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="a rustic wooden beam with black metal sides"
                loading="lazy"
                placeholder="blurred"
                width={400}
                height={300}
              />
              <h4>Rustic Beam</h4>
            </li>
            <li>
              <StaticImage
                src={cabinet}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="a small wooden corner cabinet"
                loading="lazy"
                placeholder="blurred"
                width={300}
                height={300}
              />
              <h4>Petit Corner Cabinet</h4>
            </li>
            <li>
              <StaticImage
                src={computerDesk}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="a desk with an extendable laptop stand"
                loading="lazy"
                placeholder="blurred"
                width={300}
                height={200}
              />
              <h4>Desk with Laptop Stand</h4>
            </li>
            <li>
              <StaticImage
                src={coffeeTable}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="a coffee table with storage space"
                loading="lazy"
                placeholder="blurred"
                width={400}
                height={200}
              />
              <h4>Coffee Table with Storage</h4>
            </li>
            <li>
              <StaticImage
                src={woodenTable}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="a fine wooden table top"
                loading="lazy"
                placeholder="blurred"
                width={300}
                height={200}
              />
              <h4>Fine Wooden Table</h4>
            </li>
            <li>
              <StaticImage
                src={receptionDesk}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="a red and black deceoption desk"
                loading="lazy"
                placeholder="blurred"
                width={350}
                height={200}
              />
              <h4>Reception Desk</h4>
            </li>
            <li className={workStyles.questions}>
              <p>Questions? <a href="mailto:contact@ottawacustomfurniture.ca" target="_blank" rel="noreferrer noopener">Email me</a> for commission inquiries, or check out <AniLink cover to="/faq" bg="#a7bbc7" duration={1}>FAQ</AniLink><HiOutlineArrowNarrowRight /></p>
            </li>
            <li>
              <StaticImage
                src={darkRound}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="a round wooden and extendable dinner table"
                loading="lazy"
                placeholder="blurred"
                width={300}
                height={200}
              />
              <h4>Extendable Table</h4>
            </li>
          </ul>
        </div>
      </section>
    </Layout>

  )

}

export default WorkPage;
