import * as React from "react"
import * as quoteStyles from '../components/quote.module.scss'
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { graphql, useStaticQuery } from "gatsby";

const SuccessPage = () => {

    const data = useStaticQuery(graphql`

    query {
        allContentfulQuoteSuccessPage {
            edges {
                node{
                    thankYouMessage
                }
            }
        }
    }
`)

    return (
            <Layout>
            <Seo title="Success" />
                <div className={quoteStyles.wrapper}>
                    <section className={quoteStyles.successSection}>

                        {data.allContentfulGetAQuote.edges.map((edge) => {
                            return (
                                <h2>{edge.node.thankYouMessage}</h2>
                            )
                        })}
                        
                        <AniLink to="/">
                            <button>Home</button>
                        </AniLink>
                    </section>
                </div>
            </Layout>
    )
}

export default SuccessPage;