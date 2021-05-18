import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import * as contactStyles from '../styles/contact.module.scss'

function ContactForm() {
    const [state, handleSubmit] = useForm("form");
    if (state.succeeded) {
        return <p className="submit-message">We'll be in touch shortly.</p>;
    }
    return (

        <form onSubmit={handleSubmit} className={contactStyles.form}>
            <label htmlFor="email" className="sr-only">email</label>
            <input id="email" type="email" name="email" placeholder="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <label htmlFor="message" className="sr-only">message</label>
            <textarea id="message" name="message" placeholder="message" required/>
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <label htmlFor="name" className="sr-only">name</label>
            <input type="text" id="name" name="name" placeholder="name" required/>

            <button type="submit" disabled={state.submitting}>
            Send
            </button>
        </form>
    );
}

export default ContactForm;