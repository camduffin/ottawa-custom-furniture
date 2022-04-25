import * as React from "react"
import * as homeStyles from './home.module.scss'
import image from '../images/conferenceNew.jpg'
import { Parallax } from 'react-parallax';


const HeroImage = () => {

        return (

            <Parallax className={homeStyles.paraHeader} 
                bgImage={image} strength={400} 
                bgImageAlt="A wooden conference room table with blue chairs around it"
                >
            </Parallax>

        );
}

export default HeroImage;