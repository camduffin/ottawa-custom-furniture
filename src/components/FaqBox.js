import React, { useState } from "react";
// import { FaqData } from './FaqData'; 
import { graphql, useStaticQuery } from "gatsby"
import * as faqStyles from '../components/faq.module.scss';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FaqBox = () => {

    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {

            return setClicked(null)
        }

        setClicked(index);
    }

    const data = useStaticQuery(graphql`
    
    query {
        allContentfulFaqBox {
            edges {
                node {
                    question
                    answer {
                        answer
                    }
                }
            }
        }
    }
    `)
    
    const FaqData = [

        {
            question: `Is the sky blue?`,
            answer: `No`
        },
        {
            question: `What's wrong with the world today?`,
            answer: `Everything`
        },
        {
            question: `But, why though?`,
            answer: `Because, it's not that big of a deal though really.`
        },
        {
            question: `Is the sky blue?`,
            answer: `Yeah, IDK maybe.`
        },
        {
            question: `Is the sky blue?`,
            answer: `Yeah, IDK maybe.`
        },
        {
            question: `Is the sky blue?`,
            answer: `Yeah, IDK maybe.`
        }
    
    ];

    return (
        <>
            {FaqData.map((item, index) => {

                return (
                    <div>
                        <li>
                            <div className={faqStyles.container} onClick={() => toggle(index)} key={index}>
                                <h2>{item.question}</h2>
                                <span className={faqStyles.span}>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                            </div>
                            {clicked === index ? (

                                <div className={faqStyles.dropdown}>
                                    <p>{item.answer}</p>
                                </div>

                            ) : null }
                        </li>
                    </div>
                )
            } )}
        </>
    )
}

export default FaqBox;
