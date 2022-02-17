import * as React from "react"
import * as headerStyles from './home.module.scss'
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import NavBar from './NavBar'
import { FiInstagram } from 'react-icons/fi'
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
        
        <header className={headerStyles.header} style={{top: visible ? '0' : '-21vh'}}>
          <div className={headerStyles.headerContainer}>
            
            <div className={headerStyles.logo}>
                <h2>Ottawa Custom Furniture</h2>
                {/* <AniLink to="/quote">
                  <button className={headerStyles.buttonHeader}>Work Together</button>
                </AniLink> */}
            </div>

            <div className={headerStyles.line}></div>

            <div className={headerStyles.rightContainer}>
              <NavBar />
              <div className={headerStyles.socialContainer}>
                <a href="mailto:contact@ottawacustomfurniture.ca" target="_blank" rel="noreferrer noopener">contact@ottawacustomfurniture.ca</a>
                <a href="https://www.instagram.com/ottawacustomfurniture/" target="_blank" rel="noreferrer noopener" className={headerStyles.headerInsta}>
                        <FiInstagram />
                </a>
              </div>
            </div>

          </div>
        </header>
    )
}

export default Header
