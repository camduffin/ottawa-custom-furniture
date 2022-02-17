import React from 'react'
import * as homeBioStyles from './home.module.scss'
import { StaticImage } from 'gatsby-plugin-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { graphql, useStaticQuery } from "gatsby";

const HomeBio = () => {

    const bioImage = '../images/coffee-table.jpg'

    const data = useStaticQuery(graphql`

    query {
        allContentfulHome {
            edges {
                node {
                    title
                    homeIntroTextOne {
                        homeIntroTextOne
                    }
                    homeIntroTextTwo {
                        homeIntroTextTwo
                    }
                    homeIntroTextThree {
                        homeIntroTextThree
                    }
                    homeIntroTextFour {
                        homeIntroTextFour
                    }
                }
            }
        }
        
    }
`)

    return (

        <section id="home-bio">
            <div className={homeBioStyles.bioContainer}>
                <div className={homeBioStyles.innerContainer}>

                {data.allContentfulHome.edges.map((edge) => {
                            return (
                                <h1 className={homeBioStyles.h1}>{edge.node.title}</h1>
                            )
                    })}

                    {data.allContentfulHome.edges.map((edge) => {
                            return (
                                <p className={homeBioStyles.bioText}>{edge.node.homeIntroTextOne.homeIntroTextOne}</p>
                            )
                    })}

                    {data.allContentfulHome.edges.map((edge) => {
                            return (
                                <p className={homeBioStyles.bioText}>{edge.node.homeIntroTextTwo.homeIntroTextTwo}</p>
                            )
                    })}

                    {data.allContentfulHome.edges.map((edge) => {
                            return (
                                <p className={homeBioStyles.bioText}>{edge.node.homeIntroTextThree.homeIntroTextThree}</p>
                            )
                    })}

                    {data.allContentfulHome.edges.map((edge) => {
                            return (
                                <p className={homeBioStyles.bioText}>{edge.node.homeIntroTextFour.homeIntroTextFour}</p>
                            )
                    })}

                    <AniLink to="/quote">
                        <button className={homeBioStyles.button}>Work Together</button>
                    </AniLink>
                </div>
                <div className={homeBioStyles.bioImage}>
                    <StaticImage
                        src={bioImage}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="a coffee table with books and a camera placed on top"
                        loading="lazy"
                        placeholder="blurred"
                    />
                </div>
            </div>
        </section>
    )

}

export default HomeBio 