import React from 'react'
import * as homeBioStyles from './home.module.scss'
import { StaticImage } from 'gatsby-plugin-image';

const HomeBio = () => {

    const bioImage = '../images/conferenceFour.jpg'

    return (

        <div className={homeBioStyles.bioContainer}>
            <div className={homeBioStyles.innerContainer}>
                <h1 className={homeBioStyles.h1}>Ottawa Custom Furniture</h1>
                <p className={homeBioStyles.bioText}>This is what we do.</p>
                <p className={homeBioStyles.bioText}>OCF focuses on providing a dedicated and personalized experience to bring our clients from concept & design through to build & installation. The result is a piece that will be one-of-a-kind and built to last, suited to maximize the functionality of your space while also adding beauty to your home.</p>
                <p className={homeBioStyles.bioText}>We are proudly Canadian and use local and sustainable materials whenever possible.</p>
                <p className={homeBioStyles.bioText}>Your projects are worth doing, so trust us to do it right.</p>
                <button className={homeBioStyles.button}>Work Together</button>
            </div>
            <div className={homeBioStyles.bioImage}>
                <StaticImage 
                    src={bioImage}
                    placeholder="blurred"
                    />
            </div>
        </div>
    )

}

export default HomeBio 