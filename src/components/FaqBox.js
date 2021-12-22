import React, { useState } from "react";
import { FaqData } from './FaqData'; 
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
