import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import * as aboutStyles from '../components/about.module.scss'
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from "gatsby";
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const AboutPage = () => {

    const cabinet = '../images/cabinet.jpg';

    const data = useStaticQuery(graphql`

        query {
            allContentfulAbout {
                edges {
                    node {
                        title
                        biographyText {
                            biographyText
                        }
                        biographyTextTwo {
                            biographyTextTwo
                        }
                        biographyTextThree {
                            biographyTextThree
                        }
                    }
                }
            }
            
        }
    `)

    return (
        <Layout>
            <Seo title="The Story" />
            <section className={aboutStyles.aboutSection}>
                <div className={aboutStyles.wrapper}>
                    <div className={aboutStyles.aboutHeader}>
                        <div>
                        {data.allContentfulAbout.edges.map((edge) => {
                            return (
                                <h1>{edge.node.title}</h1>
                            )
                        })}
                        {data.allContentfulAbout.edges.map((edge) => {
                            return (
                                <p>{edge.node.biographyText.biographyText}</p>
                            )
                        })}

                        {data.allContentfulAbout.edges.map((edge) => {
                            return (
                                <p>{edge.node.biographyTextTwo.biographyTextTwo}</p>
                            )
                        })}

                        {data.allContentfulAbout.edges.map((edge) => {
                            return (
                                <p>{edge.node.biographyTextThree.biographyTextThree}</p>
                            )
                        })}
                            <AniLink to="/quote">
                                <button className={aboutStyles.button}>Get in Touch</button>
                            </AniLink>
                        </div>
                    </div>
                </div>
                        <div className={aboutStyles.cabinetImage}>
                            <StaticImage 
                            src={cabinet}
                            placeholder="blurred"
                            formats={["AUTO", "WEBP", "AVIF"]}
                            alt="a dark wooden cabinet with household items left around a living room"
                            loading="lazy"
                            placeholder="blurred"
                            width={1000}
                            />
                        </div>
            </section>
        </Layout>
    )
}

export default AboutPage;