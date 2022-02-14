import React from "react";
import * as quoteStyles from './quote.module.scss'

function ContactForm() {

    return (

        <form name="Quote" action="/success" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className={quoteStyles.form}>
            <input type="hidden" name="form-name" value="Quote" />
            <label htmlFor="name" className="sr-only">name</label>
            <input type="text" id="name" name="name" placeholder="Name" required/>

            <label htmlFor="email" className="sr-only">email</label>
            <input id="email" type="email" name="email" placeholder="Email" required />

            <label htmlFor="phone" className="sr-only">Phone Number</label>
            <input type="text" id="phone-number" name="phone-number" placeholder="Phone #" required/>

            <label htmlFor="message" className="sr-only">message</label>
            <textarea id="message" name="message" placeholder="Type your comments about the project..." required/>

            <button type="submit" className={quoteStyles.button}>Submit</button>
        </form>

    );
}

export default ContactForm;