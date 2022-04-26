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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;