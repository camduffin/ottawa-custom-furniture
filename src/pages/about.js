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
                            {/* <p>Ottawa Custom Furniture is the work of Murray Spencer, he's a really great guy and you know what? I think you'll really like him. He prides himself on doing a good job every job no exceptions. What the hell does that mean you ask? No one can really be quite sure. Murray was dubbed 'king wood' by Food & Drink magazine in 2020 due to his unreasonably large desire to cook up some delicious tables, chairs, and tables with chairs. Tableschairs.</p> 
                                
                            
                            <p>Give Murray a shot and he might just deliver. Next time you need to have a woodworker build your tables or stools I think between you and me we both know you're going to choose this guy to do the job right and only once. That's our motto. <span>Right and only once.</span></p> */}
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