import React from 'react';
import { Link } from 'react-router-dom';
import { motion} from 'framer-motion'

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
    x : '-100vw',
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
  hover : {
    boxShadow : '0px 0px 12px #FFF',
    textShadow : '0px 0px 12px #FFF',
    scale : 1.2,
    transition : {
      yoyo : Infinity
    }
  }
}

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container"
      variants={VariantContainer}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li variants={VariantListe} whileHover='hover' key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
        variants={VariantButton}
        whileHover='hover'>
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;