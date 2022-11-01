import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBagShopping, faBars, faChevronDown, faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

import { Search } from "../../Components"

import classNames from "classnames/bind"
import styles from "./header.module.scss"

const cx = classNames.bind(styles)
const Header = () => {

    const [isActive, setIsActive] = useState(true)
    // const [selected, setSelected] = useState('')

    const handleSelectDepartments = (item) => {
        alert(`you choosed ${item.departments}`)
    }

    // fake data api departments
    const data = [
        { id: 1, departments: 'Jeans'},
        { id: 2, departments: 'Shirts'},
        { id: 3, departments: 'Dress'},
        { id: 4, departments: 'T-Shirts'},
        { id: 5, departments: 'Hoodie'},
        { id: 6, departments: 'Manchester United'},
    ]

    const navigate = useNavigate()

    const handleCart = () => {
        navigate("/cart")
    }

    return (
        <div className={cx('container')}>
            <div className={cx('header__top')}>   
                <div className="container">
                    <div className={cx('header__top-box')}>
                        <div className={cx('left-side')}>
                            <div className={cx('mail')}>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <p>hello@colorlib.com</p>
                            </div>
                            <div className={cx('separate')}></div>
                            <div className={cx('slogan')}>
                                <p>Free Shipping for all Order of $99</p>
                            </div>
                        </div>
                        <div className={cx('right-side')}>
                            <div className={cx('social-media')}>
                                <a href="#">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </div>
                            <div className={cx('separate')}></div>
                            <div className={cx('language')}>
                                <p>English</p>
                                <FontAwesomeIcon icon={faChevronDown}/>
                            </div>
                            <div className={cx('separate')}></div>
                            <div className={cx('authentication')}>
                                <FontAwesomeIcon icon={faUser}/>
                                <p>Login</p>
                            </div>
                        </div>
                    </div>
                </div>                    
            </div>
            <div className={cx('header__mid')}>
                <div className="container">
                    <div className={cx('header__mid-box')}>
                        <div className={cx('logo')}>
                            <h1>QT SHOP</h1>
                        </div>
                        <div className={cx('menu')}>
                            <ul>
                                <li>
                                    <Link to="/">
                                        <p>HOME</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/shop">
                                        <p>SHOP</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blog">
                                        <p>BLOG</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact">
                                        <p>CONTACT</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div 
                            className={cx('cart')}
                            onClick={() => handleCart()}
                        >
                           <FontAwesomeIcon icon={faBagShopping} />
                           <div className={cx('amount-product')}>
                                <p>6</p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('header__bot')}>
                <div className="container">
                    <div className={cx('header__bot-box')}>
                        <div className={cx('department')}>
                            <FontAwesomeIcon icon={faBars} />
                            <p>All department</p>
                            <div 
                                className={cx('evt-down')}
                                onClick={() => setIsActive(!isActive)}
                            >
                                <FontAwesomeIcon icon={faChevronDown}/>
                            </div>
                            { isActive && 
                            <div className={cx('drop-down')}>
                                <ul className={cx('drop-down-list')}>
                                    {data.map((item) => {
                                        return (
                                            <li key={item.id} onClick={() => handleSelectDepartments(item)} >{item.departments}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                            }
                        </div>
                        <div className={cx('search')}>
                            <Search />
                        </div>
                        <div className={cx('contact')}>
                            <div className={cx('contact-icon')}>
                                <FontAwesomeIcon className={cx('phone-icon')} icon={faPhone}/>
                            </div>
                            <div className={cx('contact-detail')}>
                                <p className={cx('phone-num')}>+65 11.188.888</p>
                                <p className={cx('time-contact')}>support 24/7 time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header