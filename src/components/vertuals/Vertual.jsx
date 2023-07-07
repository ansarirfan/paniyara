import React from 'react'
import css from './Vertual.module.css';
import Shade from '../../assets/shade.png'
import Before from '../../assets/before.png'
import After from '../../assets/after.png'
import ReactCompareImage from 'react-compare-image'

const Vertual = () => {
  return (
    <div className={css.Vertual}>
        <div className={css.left}>
    <span>Virtual Try-on</span>
    <span>Never Buy The Wrong Shade Again! </span>
    <span> Try Now !</span>
    <img src={Shade} alt="" />
        </div>

        <div className={css.right}>
            <div className={css.wrapper}>
                <ReactCompareImage leftImage={Before} 
                rightImage={After} />
            </div>
        </div>
    </div>
  )
}

export default Vertual
