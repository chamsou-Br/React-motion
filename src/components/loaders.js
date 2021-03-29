import React from 'react'
import {motion ,useCycle} from 'framer-motion'

const VariantLoaders = {
    visible1 : {
        x : [-20 ,20],
        y : [20 , -20],
        transition : {
            x : {
                duration : 0.5 ,
                yoyo : Infinity
            },
            y : {
                duration : 0.25 ,
                ease : 'easeOut',
                yoyo : Infinity
            }
        }
    },
    visible2 : {
        y : [20 , -20 ],
        x : 0,
        transition : {
            y : {
                duration : 0.25 ,
                yoyo : Infinity,
                ease : 'easeOut'
            }
        }
    }
}


const Loaders = () => {

    const [Visible , cycleVisible] = useCycle('visible1' , 'visible2')
    return(
    <>
        <motion.div
         variants={VariantLoaders}
         animate={Visible}
         className='loader'>

        </motion.div>
        <div onClick={()=> cycleVisible()}>Cycle Loader</div>
    </>
    )
}
export default Loaders