import * as React from "react"
import * as headerStyles from './home.module.scss'
import { StaticImage } from 'gatsby-plugin-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import NavBar from './NavBar'
import { useState, useEffect } from 'react'

const Header = ({ siteTitle }) => {

    function debounce(func, wait, immediate) {
      let timeout;
      return function() {
          let context = this, args = arguments;
          let later = function() {
              timeout = null;
              if (!immediate) func.apply(context, args);
          };
          let callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
      };
  };

  // States

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {      

      const currentScrollPos = window.pageYOffset;

      setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {   
      window.addEventListener('scroll', handleScroll);
      
      return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

    return (
        
        <header className={headerStyles.header} style={{top: visible ? '0' : '-15vh'}}>
          <div className={headerStyles.headerContainer}>
            <div className={headerStyles.logo}>
              <AniLink fade to="/">
                <StaticImage
                  className={headerStyles.svg}
                  src="../images/wow-logo.png"
                  formats={["AUTO", "WEBP", "AVIF", "jpg"]}
                  alt=""
                  placeholder="blurred"
                  width={80}
                  height={80}
                />
              </AniLink>
            </div>
            <NavBar />
          </div>
        </header>
    )
}

export default Header
