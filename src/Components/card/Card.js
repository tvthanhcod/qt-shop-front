import React,{ useState }  from "react";
import {  Link ,NavLink } from "react-router-dom";

import classNames from "classnames/bind"
import styles from "./Card.module.scss"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBagShopping, faBars, faChevronDown, faEnvelope, faPhone, faHeart } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"


const cx = classNames.bind(styles)

const Card = (props) => {

     return (
    <div className={cx('container')}>
        <div className="container">
        <div className={cx('box')}>
            <div className={cx('card')}> 
                <div className={cx('icon-card')}>
   
                      <img className={cx('img_card')} src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/252020151_121948873591875_3772768744386900456_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a26aad&_nc_ohc=qqbv0ApAIsgAX-EyEZh&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT_uLr970NTVvuTl2Jzy6s-cOkk4TZKteSyrpJrzm8NI_Q&oe=632D0BC3" />

                  <div className={cx("icon1")}>
                     <FontAwesomeIcon icon={faHeart} className={cx("icon")}/>
                  </div>
                  <div className={cx("icon2")}>
                  <FontAwesomeIcon icon={faChevronDown} className={cx("icon")}/>
                  </div>
                  <div className={cx("icon3")}>
                  <FontAwesomeIcon icon={faBagShopping} className={cx("icon")}/>
                </div>
               
                </div>
                </div>
              </div>
            </div>
        </div>
        
     
   
     )
}

export default Card