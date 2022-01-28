import React, { useState } from "react";
import { FaqData } from './FaqData'; 
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
        allContentfulFaqBoxTwo {
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

    // Faq data from Contentful

    const questionOne = data.allContentfulFaqBox.edges.map((edge) => edge.node.question) 
    const answerOne = data.allContentfulFaqBox.edges.map((edge) => edge.node.answer.answer)
    const questionTwo = data.allContentfulFaqBoxTwo.edges.map((edge) => edge.node.question) 
    const answerTwo = data.allContentfulFaqBoxTwo.edges.map((edge) => edge.node.answer.answer)

    
    const FaqData = [
        
        {
            question: questionOne,
            answer: answerOne
        },
        {
            question: questionTwo,
            answer: answerTwo
        },
        
        
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
