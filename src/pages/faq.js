import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import * as faqStyles from '../components/faq.module.scss';
import PageTransition from 'gatsby-plugin-page-transitions';
import FaqBox from '../components/FaqBox';


const FaqPage = () => {

    return (
        <Layout>
            <PageTransition>
            <Seo title="FAQ" />
                <section className={faqStyles.faqSection}>
                    <div className={faqStyles.wrapper}>
                    <h1 className={faqStyles.h1}>
                        FAQ
                    </h1>
                        <ul className={faqStyles.faqList}>
                            <FaqBox />
                        </ul>
                    </div>
                </section>
            </PageTransition>
        </Layout>
    )
}

export default FaqPage;