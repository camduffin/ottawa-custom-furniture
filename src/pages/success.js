import * as React from "react"
import * as quoteStyles from '../components/quote.module.scss'
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const successPage = () => {

    return (
            <Layout>
            <Seo title="Success" />
                <div className={quoteStyles.wrapper}>
                    <section className={quoteStyles.successSection}>
                        <h2>Thanks for reaching out! I'll get back to you shortly.</h2>
                        <AniLink to="/">
                            <button>Home</button>
                        </AniLink>
                    </section>
                </div>
            </Layout>
    )
}

export default successPage;