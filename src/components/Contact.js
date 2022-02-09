import React from 'react'
import * as contactStyles from './contact.module.scss'

const Contact = () => {
    return (

        <section className={contactStyles.enter} id="contact">
            <div className={contactStyles.wrapper}>
                <div className={contactStyles.contactContainer}>
                    <div className={contactStyles.contactInfo}>
                        <h2>Contact</h2>
                        <ul className={contactStyles.contactList}>
                            <li>
                                <a href="mailto:contact@ottawacustomfurniture.ca" target="_blank" rel="noreferrer noopener">contact@ottawacustomfurniture.ca</a>
                            </li>
                            <li>
                                <p>123 I Gotta Piece'a Wood Right Here Cres.</p>
                            </li>
                            <li>
                                <p>Earth, Earth, Earth</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;