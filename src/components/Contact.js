import React from 'react'
import * as contactStyles from './contact.module.scss'
import { FiInstagram } from 'react-icons/fi'
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Contact = () => {



    return (

        <section className={contactStyles.enter} id="contact">
            <div className={contactStyles.wrapper}>
                <div className={contactStyles.contactContainer}>
                    <div className={contactStyles.contactInfo}>
                        <h2>Contact</h2>
                        <ul className={contactStyles.contactList}>
                            <li>
                                <a href="https://www.instagram.com/ottawacustomfurniture/" target="_blank" rel="noreferrer noopener">
                                    Instagram <FiInstagram className={contactStyles.socialLink} />
                                </a>
                            </li>
                            <li>
                                <a href="mailto:contact@ottawacustomfurniture.ca" target="_blank" rel="noreferrer noopener">contact@ottawacustomfurniture.ca</a>
                            </li>
                            <li>
                                <AniLink to="/quote">
                                    <button>Get a Quote</button>
                                </AniLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={contactStyles.bottomImage}></div>
        </section>
    )
}

export default Contact;