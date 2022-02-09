import * as React from "react"
import * as quoteStyles from '../components/quote.module.scss'
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import ContactForm from "../components/ContactForm";

const quotePage = () => {

    return (
        <Layout>
        <Seo title="Get a Quote"/>
            <section className={quoteStyles.enter} id="quote">
                <div className={quoteStyles.wrapper}>
                    <div className={quoteStyles.contactContainer}>
                        {/* <div className={quoteStyles.contactInfo}> */}
                            <h2>Get a Quote</h2>
                        {/* </div> */}
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
    </Layout>
    )
}

export default quotePage;