import React from "react";
// import { useForm, ValidationError } from "@formspree/react";
import * as quoteStyles from './quote.module.scss'
import { useState } from "react"

function ContactForm() {
    // const [, handleSubmit] = useState();
    // if (state.succeeded) {
    //     return <p>We'll be in touch shortly.</p>;
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // }
    return (

        // <form onSubmit={handleSubmit} className={quoteStyles.form}>
        //     <label htmlFor="name" className="sr-only">name</label>
        //     <input type="text" id="name" name="name" placeholder="Name" required/>
        //     <label htmlFor="email" className="sr-only">email</label>
        //     <input id="email" type="email" name="email" placeholder="Email" required />
        //     <ValidationError prefix="Email" field="email" errors={state.errors} />
        //     <label htmlFor="message" className="sr-only">message</label>
        //     <textarea id="message" name="message" placeholder="Type your comments about the project..." required/>
        //     <ValidationError prefix="Message" field="message" errors={state.errors} />


        //     <button className={quoteStyles.button} type="submit" disabled={state.submitting}>
        //     Submit
        //     </button>
        // </form>

        <form name="Quote" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className={quoteStyles.form}>
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