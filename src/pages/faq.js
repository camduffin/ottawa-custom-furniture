import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import * as faqStyles from '../components/faq.module.scss';
import FaqBox from '../components/FaqBox';


const FaqPage = () => {

    return (
        <Layout>
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
        </Layout>
    )
}

export default FaqPage;