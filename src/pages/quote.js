import * as React from "react"
import * as quoteStyles from '../components/quote.module.scss'
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import ContactForm from "../components/ContactForm";
import { graphql, useStaticQuery } from "gatsby";

const QuotePage = () => {

    const data = useStaticQuery(graphql`

    query {
        allContentfulGetAQuote {
            edges {
                node {
                    title
                }
            }
        }
        
    }
`)

    return (
        <Layout>
            <Seo title="Get a Quote"/>
            <section className={quoteStyles.enter} id="quote">
                <div className={quoteStyles.wrapper}>
                    <div className={quoteStyles.contactContainer}>
                        {data.allContentfulGetAQuote.edges.map((edge) => {
                                return (
                                    <h2>{edge.node.title}</h2>
                                )
                        })}
                
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
    </Layout>
    )
}

export default QuotePage;