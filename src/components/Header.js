import React from 'react';
import { motion } from 'framer-motion' 

const VariantTitle = {
  hidden : {
    y : '-100vw'
  },
  visible : {
    y : 0 ,
    transition : {
      type : 'spring',
      stiffness : 60, 
    }
  }
}

const VariantSvg = {
  hidden :  {
    rotate : -180
  },
  visible : {
    rotate: 0,
    transition : {
      type: 'tween',
      duration : 1
    }
  }
}

const VariantPath = {
  hidden : {
    opacity : 0,
    pathLength : 0
  },
  visible : {
    opacity : 1,
    pathLength : 1,
    transition : {
      duration : 2,
      ease : 'easeInOut'
     
    }
  }
}
const Header = () => {
  return (
    <header>
      <div className="logo">
        <motion.svg 
            variants={VariantSvg} initial='hidden' animate='visible' 
            drag dragElastic={1} dragConstraints={{top : 0, left : 0, right : 0,bottom : 0}}
            className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={VariantPath}
          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={VariantPath}
          />
        </motion.svg>
      </div>
      <motion.div 
         variants={VariantTitle}
         initial='hidden'
         animate='visible'     
         className="title"
         >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  )
}

export default Header;