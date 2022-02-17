import React from "react";
import * as contactStyles from './contact.module.scss'
import { graphql, useStaticQuery } from "gatsby";

function ContactForm() {

    const data = useStaticQuery(graphql`

    query {
        allContentfulGetAQuote {
            edges {
                node {
                    title
                    messageBoxPlaceholder
                }
            }
        }
        
    }
`)

    return (

        <form name="Quote" action="/success" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className={contactStyles.form}>
            <input type="hidden" name="form-name" value="Quote" />
            <label htmlFor="name" className="sr-only">Name</label>
            <input type="text" id="name" name="name" placeholder="Name" required/>

            <label htmlFor="email" className="sr-only">Email</label>
            <input id="email" type="email" name="email" placeholder="Email" required />

            {/* <label htmlFor="phone" className="sr-only">Phone Number</label>
            <input type="text" id="phone-number" name="phone-number" placeholder="Phone # (   )-(   )-(    )" required/> */}

            <label htmlFor="message" className="sr-only">Message</label>
            {data.allContentfulGetAQuote.edges.map((edge) => {
                return (
                    <textarea id="message" name="message" placeholder={edge.node.messageBoxPlaceholder} required/>
                )
            })}


            <button type="submit" className={contactStyles.button}>Submit</button>
        </form>

    );
}

export default ContactForm;