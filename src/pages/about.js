import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import * as aboutStyles from '../components/about.module.scss'
import { StaticImage } from 'gatsby-plugin-image';

const AboutPage = () => {

    const murray = '../images/murray.jpg';

    return (
        <Layout>
            <Seo title="About" />
            <section className={aboutStyles.aboutSection}>
                <div className={aboutStyles.wrapper}>
                    <div className={aboutStyles.aboutHeader}>
                        <div className={aboutStyles.murrayImage}>
                            <StaticImage 
                            src={murray}
                            placeholder="blurred"
                            />
                        </div>
                        <div>
                            <h1>About</h1>
                            <p>Ottawa Custom Furniture is the work of Murray Spencer, he's a really great guy and you know what? I think you'll really like him. He prides himself on doing a good job every job no exceptions. What the hell does that mean you ask? No one can really be quite sure. Murray was dubbed 'king wood' by Food & Drink magazine in 2020 due to his unreasonably large desire to cook up some delicious tables, chairs, and tables with chairs. Tableschairs.</p> 
                                
                            <p>Give Murray a shot and he might just deliver. Next time you need to have a woodworker build your tables or stools I think between you and me we both know you're going to choose this guy to do the job right and only once. That's our motto. <span>Right and only once.</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default AboutPage;