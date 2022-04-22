import * as React from "react"
import * as mobileStyles from './home.module.scss'
import { StaticImage } from "gatsby-plugin-image";



const MobileHero = () => {

    const mobileImage = '../images/conferenceThree.jpg';

        return (
            

            <div className={mobileStyles.mobileHero}>
                <StaticImage 
                    src={mobileImage}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt=""
                    loading="lazy"
                    placeholder="blurred"
                />
            </div>
            
        );
}


export default MobileHero;