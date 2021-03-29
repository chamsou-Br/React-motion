import React from 'react';
import { Link } from 'react-router-dom';
import {motion , AnimatePresence} from 'framer-motion'

const drowupVariant = {
    hidden : {
        opacity : 0
    },
    visible : {
        opacity : 1,
        transition : {
            type : 'tween'
        }
    }
}
const VariantModal = {
    hidden : {
        y : '-100vw'
    },
    visible : {
        y : 200,
        transition : {
            type : 'spring',
            delay : 0.5,
            stiffness : 100
        }
    }
}

const Modal = ({showModal , setShowModal}) => {
return(
    <AnimatePresence>
        {showModal && (
            <motion.div
             variants={drowupVariant}
             initial='hidden'
             animate='visible'
             exit='hidden'
             className='drowup'>

                <motion.div className='modal'
                 variants={VariantModal}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'>
                    <p>Want to Make Another Pizza :)</p>
                    <Link to='/'>
                        <motion.button>
                            Exit
                        </motion.button>
                    </Link>
                    
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
)
}
export default Modal;