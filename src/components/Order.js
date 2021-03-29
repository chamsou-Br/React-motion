import React, { useEffect, useState } from 'react';
import {motion ,AnimatePresence} from 'framer-motion'

const VariantContainer = {
  hidden : {
    x : '100vw',
  },
  visible : {
    x : 0,
    transition : {
      when : 'beforeChildren',
      staggerChildren : 2,
      stiffness : 150,
      type : 'spring'
    }
  },
  exit : {
    x : '-100vw',
    transition : {
      ease : 'easeInOut'
    }
  }
}

const Order = ({ pizza , setShowModal }) => {
  const [finishe , setFinish] = useState(true);
  setTimeout(()=> {
    setFinish(false)
  },4000)

  useEffect(()=> {
    setTimeout(()=> {
      setShowModal(true)
    },5000)
  },[setShowModal])
  return (
    <motion.div className="container order"
      variants={VariantContainer}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
          <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
    </motion.div>
  )
}

export default Order;