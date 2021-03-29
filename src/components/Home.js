import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import Loaders from './loaders';

const VariantContainer = { 
  hidden : {
    opacity : 0
  },
  visible : {
    opacity : 1
  },
  exit : {
    x : '-100vw',
    transition : {
      ease : 'easeInOut'
    }
  }
  
}
const VarianWelcome = {
  hidden : {
    x : '100vw'
  },
  visible : {
    x : 0,
    transition : {
      delay : 0.7 ,
      type : 'spring',
      stiffness : 60
    }
  }
}
const VariantButton = {
  hidden : {
    opacity :0
  },
  visible : {
    opacity : 1,
    transition : {
      duration : 1,
      delay : 1.2
    }
  },
  hover : {
    boxShadow : '0px 0px 8px #FFF',
    textShadow : '0px 0px 8px #FFF',
    scale : 1.1,
    transition : {
      yoyo : Infinity
    }

  }
}

const VariantLoader = {
  hidden : {
    x : '100vw'
  },
  visible : {
    x : 0,
    transition : {
      type : 'spring',
      stiffness : 130 ,
      delay : 1.5,
    }
  }
}
const Home = () => {
  return (
    <motion.div variants={VariantContainer} initial='hidden' animate='visible' exit='exit' className="home container">
      <motion.h2
        variants={VarianWelcome}
        initial='hidden'
        animate='visible'>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={VariantButton}
          initial='hidden'
          animate='visible'
          whileHover='hover'
          >
          Create Your Pizza
        </motion.button>
      </Link>
      <motion.div 
      variants={VariantLoader}>
         <Loaders />
      </motion.div>
    </motion.div>
  )
}

export default Home;