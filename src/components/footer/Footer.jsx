import React from 'react'
import Logo from '../../assets/logo.png'
import{
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UserIcon,
    LinkIcon

}from '@heroicons/react/outline';
import css from './Footer.module.css'

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr />
        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>Paniyara</span>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>contact us</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon} />
                        <span>Ward No. 9 Devnager, Paniyara</span>
                    </span>
                    <span className={css.pngLine}>
                        <PhoneIcon className={css.icon} />
                    <a href="tel:+91 623546462">+91 623546462</a>
                    </span>
                    <span className={css.pngLine}>
                        <InboxIcon className={css.icon} />
                        <a href="mailto:support@paniyara.com">support@paniyara.com2</a>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <LoginIcon className={css.icon} />
                        Sign in
                    </span>
             </div>
           </div>

           <div className={css.block}>
                <div className={css.detail}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon} />
                        <a href="/about">
                            <p>about us</p>
                        </a>
                    </span>
                    </div>
           </div>

           <div className={css.block}>
                <div className={css.detail}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon} />
                       <p>Safetly Privacy & Term</p>
                       
                    </span>
                    </div>
           </div>
        </div>
   
    <div className={css.copyRight}>
     <span>Copyright @2023 by irfan, Inc </span>
      <span>All right are reserved</span>
    </div>
    </div>
  );
};

export default Footer
