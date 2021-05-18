import React from 'react'
import * as contactStyles from './contact.module.scss'
import ContactForm from '../components/ContactForm'

const Contact = () => {
    return (

        <section className={contactStyles.enter}>
            <div className={contactStyles.wrapper}>
                <div className={contactStyles.contactContainer}>
                    <div className={contactStyles.contactInfo}>
                        <h2>Contact</h2>
                        <ul className={contactStyles.contactList}>
                            <li>
                                <a href="mailto:contact@ottawacustomfurniture.ca" target="_blank" rel="noreferrer noopener">contact@ottawacustomfurniture.ca</a>
                            </li>
                            <li>
                                <p>123 Lets Make Wooden Things Blvd.</p>
                            </li>
                            <li>
                                <p>Ottawa, Ontario, Canada</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;