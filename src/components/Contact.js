import React from 'react'
import { Link } from 'gatsby'
import * as contactStyles from '../styles/contact.module.scss'
import { MdKeyboardArrowRight } from 'react-icons/md'
import ContactForm from '../components/ContactForm'

const Contact = () => {
    return (

        <section className={contactStyles.enter}>
            <div className={contactStyles.wrapper}>
                <ContactForm />
                <div className={contactStyles.wrapper} className={contactStyles.buttonContainer}>
                    <Link to="/about">
                        About
                        <MdKeyboardArrowRight className={contactStyles.arrow} />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Contact;