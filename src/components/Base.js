import React from 'react';
import { Link } from 'react-router-dom';
import {motion } from 'framer-motion'

const VariantContainer = {
  hidden : {
    x : '100vw'
  }, 
  visible : {
    x : 0,
    transition : {
      type : 'spring',
      stiffness : 120,
      delay : 0.4
    }
  },
  exit : {
    x :'-100vw',
    transition : {
      ease : 'easeInOut'
    }
  }
}

const VariantListe = {
  hover  : {
    scale : 1.3,
    color : '#F8e112',
    fontWeight : 600,
    originX : 0,
    transition : {
      type : "spring",
      stiffness : 300,
    }
  }
}
const VariantButton = {
  hidden : {
    x : '-100vw'
  },
  visible : {
    x : 0,
    transition : {
      type : 'spring',
      stiffness : 120
    }
  },
  hover : {
    boxShadow : '0px 0px 12px #FFF',
    textShadow : '0px 0px 12px #FFF',
    scale : 1.2,
    transition : {
      yoyo : Infinity
    }
  }
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      variants={VariantContainer}
      initial='hidden'
      animate='visible'
      exit='exit'
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              variants={VariantListe} whileHover='hover'>
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next" 
          variants={VariantButton} initial='hidden' animate='visible'>
          <Link to="/toppings">
            <motion.button
              variants={VariantButton} whileHover='hover'
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;