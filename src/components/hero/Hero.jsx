import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'

const Hero = () => {

  const transition = {duration:3, type:"spring"}

  return (  
    <div className={css.container}>
        {/* left side  */}
        <div className={css.h_side}>
            <span className={css.text1} >Skin Protection Cream</span>
        <div className={css.text2}>
        <span>Trendy Collection</span>
        
            <span>
                {" "} 
                seedly says has suitable disposal and boy. Exercise by joy man chi rejoined.
                </span>
        </div>

        </div>

        {/* middle side */}
          <div className={css.wrapper}>
            {/* blue circle */}
            <motion.div
            initial={{bottom:"2rem"}}
            whileInView={{bottom:"0rem"}}
            className={css.blueCircle}
            transition={transition}
            >
              
            </motion.div>
        {/* motion image */}
            <motion.img
            transition={transition}
            initial={{bottom:"-2rem"}}
            whileInView={{bottom:"0rem"}}
            src={HeroImg} alt='' width={600}/>

          {/* cart div animating */}
            <motion.div
            transition={transition}
            initial={{right:"4%"}}
            whileInView={{right:"2%"}}
            className={css.cart2}>
                <RiShoppingBagFill />
                <div className={css.signup}>
                    <span>Best Signup offer</span>
                    <div>
                        <BsArrowRight />
                        </div>
                </div>
           </motion.div>
          </div>

          {/* right side */}
          <div className={css.h_side}>
            <div className={css.traffic}>
                <span>1.5M</span>
                <span>Monthly Traffic</span>
            </div>
            <div className={css.customer}>
                <span>124k</span>
                <span>happy customer</span>
            </div>
          </div>

    </div>

  )
}

export default Hero
