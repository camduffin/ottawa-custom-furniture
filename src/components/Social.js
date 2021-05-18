import React from 'react'
import * as socialStyles from '../styles/index.module.scss'
import { FiInstagram } from 'react-icons/fi'
import { FaPaperPlane } from 'react-icons/fa'

const Social = () => {
    return (
        <nav>
            <ul className={socialStyles.socialList}>
                <li>
                    <a href="https://www.instagram.com/ottawacustomfurniture/" target="_blank" rel="noreferrer noopener">
                        <FiInstagram className={socialStyles.socialLink} /> 
                    </a>
                </li>
                <li>
                    <a href="mailto:contact@ottawacustomfurniture.ca" target="_blank" rel="noreferrer noopener">
                        <FaPaperPlane className={socialStyles.socialLink}  />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Social;