import React,{ useState, useEffect }  from "react";
import {  Link ,NavLink } from "react-router-dom";

import classNames from "classnames/bind"
import styles from "./Card.module.scss"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBagShopping, faBars, faChevronDown, faEnvelope, faPhone, faHeart } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"


const cx = classNames.bind(styles)

const Card = (props) => {

  const [lists, setList] = useState([])

  useEffect(() => {
    setList([...lists, props])
  },[])


     return (
       <div className={cx('container')}>
        
        {/* {lists.map((list) => ( */}

        <div className="container">
        <div className={cx('box')}>
            <div className={cx('card')}> 
                <div className={cx('icon-card')}>

                      <img className={cx('img_card')} src={props.props} />

                  <div className={cx("icon1")}>
                     <FontAwesomeIcon icon={faHeart} className={cx("icon")}/>
                  </div>
                  <div className={cx("icon2")}>
                  <FontAwesomeIcon icon={faChevronDown} className={cx("icon")}/>
                  </div>
                  <div className={cx("icon3")}>
                  <FontAwesomeIcon icon={faBagShopping} className={cx("icon")}/>
                </div>

                </div >
                <div className={cx('text-card')}>
                <span className={cx('title')}> Dried Fruit </span>
                <h5 className={cx('name')}>Raisin’n’nuts</h5>
                <div className={cx('Gia')}> 
                  $30.00 
                  <span> $30.00  </span>
                </div>
                </div>
                </div>
              </div>
            </div>
            {/* ))} */}
        </div>
        
     
   
     )
}

export default Card