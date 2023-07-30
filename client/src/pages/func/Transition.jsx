import { motion, transform} from "framer-motion"; 
import React from "react";

function Transition (OgComponent)  {
    return () => (
        <>
        <OgComponent/>
        <motion.div
            className="slide-in"
            initial={{scaleY: 0}}
            animate={{scaleY: 0}}
            style={{willChange:'transform'}}
            exit={{scaleY: 1}}
            transition={{duration: 0.7, ease: [0.22, 1, 0.36, 1]}}
        />
        <motion.div
            className="slide-out"
            initial={{scaleY: 1}}
            animate={{scaleY: 0}}
            style={{willChange:'transform'}}
            exit={{scaleY: 0}}
            transition={{duration: 0.7, ease: [0.22, 1, 0.36, 1]}}
        />
        </>
    )
}

export default Transition;