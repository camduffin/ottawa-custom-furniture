import React, {useState} from 'react';
import { BsChevronDoubleUp } from 'react-icons/bs';
import * as scrollStyles from './home.module.scss'
import { useEffect } from 'react'; 

const ScrollArrow = () =>{

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
        setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
        setShowScroll(false)
    }
    };

    const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)
    });


    return (
        
        <BsChevronDoubleUp className={scrollStyles.scrollTop} onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
    );
}

export default ScrollArrow;