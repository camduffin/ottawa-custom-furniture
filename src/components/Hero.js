import * as React from "react"
import * as homeStyles from './home.module.scss'
import image from '../images/conferenceHeader.jpg'
import { StaticImage } from 'gatsby-plugin-image'
import { Parallax } from 'react-parallax';
// import { useState, useEffect } from "react"

const HeroImage = () => {

    const mobileImage = '../images/conferenceHeader.jpg'

    // const [width, setWidth] = useState(window.innerWidth);
    // const breakpoint = 1100;

    // useEffect(() => {
    //     const handleResizeWindow = () => setWidth(window.innerWidth);
    
    //     window.addEventListener("resize", handleResizeWindow);
        
    //     return () => {
    
    //         window.removeEventListener("resize", handleResizeWindow);
    //     };
    // }, []);

    // if (width > breakpoint) {
    //     return (
    //         <Parallax className={homeStyles.paraHeader} 
    //             bgImage={image} strength={400} 
    //             bgImageAlt="A wooden conference room table with blue chairs around it"
    //             >
    //         </Parallax>
    //     );
    //     }
        return (
            // <StaticImage className={homeStyles.paraHeader} 
            //     src={mobileImage} 
            //     alt="A wooden conference room table with blue chairs around it"
            //     width={1500}
            //     height={1000}
            //     >
            // </StaticImage>
            <Parallax className={homeStyles.paraHeader} 
                bgImage={image} strength={400} 
                bgImageAlt="A wooden conference room table with blue chairs around it"
                >
            </Parallax>
            // <div className={homeStyles.parallax}></div>
        );
}

export default HeroImage;