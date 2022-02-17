import React from 'react'
import * as contactStyles from './contact.module.scss';
import ContactForm from './ContactForm';

const Contact = () => {

    return (

        <section className={contactStyles.enter} id="contact">
            <div className={contactStyles.wrapper}>
                <div className={contactStyles.contactContainer}>
                    <div className={contactStyles.contactInfo}>
                        <h2>Contact</h2>
                        <ContactForm />
                        {/* <ul className={contactStyles.contactList}>
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
                        </ul> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;