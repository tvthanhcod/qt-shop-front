import React,{useEffect,useState, useRef} from "react";

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classNames from "classnames/bind"
import styles from "./shoppage.module.scss"
import  Card  from "../../../Components/Card/Card"
import SlideContext from "../../../Components/SlideContent/SlideContent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBagShopping, faBars, faChevronDown, faEnvelope, faPhone, faGrid2 } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faTwitter, faInstagram, faBluetooth } from "@fortawesome/free-brands-svg-icons"

import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const cx = classNames.bind(styles)

const ShopPage = () => {

    const ref_slider = useRef()
    const ref_valueMin = useRef()
    const ref_valueMax = useRef()


    const list = [
        { id: 1, departments: 'Fresh Meat'},
        { id: 2, departments: 'Vegetables'},
        { id: 3, departments: 'Fruit & Nut Gifts'},
        { id: 4, departments: 'T-Shirts'},
        { id: 5, departments: 'Fresh Berries'},
        { id: 6, departments: 'Ocean Foods '},
        { id: 7, departments: 'Butter & Eggs '},
        { id: 8, departments: 'Fastfood '},
        { id: 9, departments: 'Fresh Onion '},
        { id: 10, departments: 'Papayaya & Crisps '},

    ]
    
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
         autoplay: true,
        autoplaySpeed: 2000,
        
      };
    
   const  data = [
        { id: 1, img: "https://technext.github.io/ogani/img/product/discount/pd-5.jpg"},
        { id: 2, img: "https://technext.github.io/ogani/img/product/discount/pd-4.jpg"},
        { id: 3, img: 'https://technext.github.io/ogani/img/product/discount/pd-3.jpg'},
        { id: 4, img: 'https://technext.github.io/ogani/img/product/discount/pd-6.jpg'},
        { id: 5, img: 'https://technext.github.io/ogani/img/product/discount/pd-2.jpg'},
        { id: 6, img: 'https://technext.github.io/ogani/img/product/discount/pd-1.jpg'},
    ]

    const colors = [
        {id: 1 , color: 'white'},
        {id: 2 , color: 'Red'},
        {id: 3 , color: 'Blue'},
        {id: 4 , color: 'Gray'},
        {id: 5 , color: 'Black'},
        {id: 6 , color: 'Green'},

    ]

    const buttons = [
        {id: 1 , item: 'Large'},
        {id: 1 , item: 'Medium'},
        {id: 1 , item: 'Small'},
        {id: 1 , item: 'Tiny'},

        
    ]

    useEffect(() => {
    noUiSlider.create(document.getElementById('slider'), {
        start: [40, 80],
        connect: true,    
        range: {
            'min': 0,
            'max': 400
        }
    });

    ref_slider.current.noUiSlider.on("update", function (values, handle) {
        if (handle) {
            ref_valueMax.current.innerHTML = values[handle];
            
        } else {
            ref_valueMin.current.innerHTML = values[handle];
        }
    });
})

 

    return (
        <div className={cx('container')}>
                <div className={cx('img-bia')}>
                    <div className={cx('text-bia')}>
                        <div >
                            <div>
                                 <h2>  QT - Shop  </h2>
                            </div>
                            <p> Home - Shop </p>
                        </div>
                    </div>
                    <img src="https://technext.github.io/ogani/img/breadcrumb.jpg" />
                </div>

                <div className={cx('row')}>
                    <div className={cx('row-left')}>
                        <h2>Department</h2>
                        <ul>
                            {list.map((item, index) => (
                                <div className={cx('ul_departments')}>
                                    <li key={item.id}> {item.departments} </li>
                                </div>
                        ))}
                        </ul>
                        <h4 className={cx('Price')}>Price</h4>
                
                        <div >
                        {/* <input type="range" min='0' max='100'  className={cx('range')} /> */}
                        <div id="slider" className={cx('range')}  ref={ref_slider}>
                            
                        </div>
                        <div class={cx('text')}> $ <span id="kt_slider_basic_min" ref={ref_valueMin}>  </span> -- $ 
                          <span id="kt_slider_basic_max" ref={ref_valueMax}> $ </span></div>
                     
                        </div>

                        <div>
                            <h2>Colors</h2>
                            <div className={cx('ul-color')}>
                            {colors.map((color, index) => (
                                <div key={color.id} > 
                                {/* <input type="radio" style={{background: '#D62D2D'}} /> */}
                                    {color.color}
                                    <div className={cx('fake-color')} style={{
                                        background: color.color,
                                        width:'15px',
                                        height: '15px',
                                        marginTop: '-20px',
                                        marginLeft: '-20px',
                                        borderRadius: "100px",
                                        border: '0.1px solid black'
                                }}>  </div>
                                 </div>
                            ))}
                            </div>
                            <h2>Popular Size</h2>
                            <div className={cx('fake-button')}>
                            {buttons.map((button, index) => (
                                <div> 
                                <input type="button" value={button.item} />
                                </div>
                              ))}
                            </div>
                            
                            <div style={{marginTop: '50px'}}>
                                <SlideContext />
                            </div>
                        </div>
                    </div>
                    <div className={cx('row-right')}>
                        <h2>Sale Off</h2>
                      <Slider {...settings}>
                        {data.map((list, index) => (
                        <div>
                          <Card props={list.img}/>
                        </div>
                          ))}
                        </Slider>
                    <hr />
                    <div className={cx('test')}>
                    <div>  Sort By </div>
                    <div className={cx('Default')}> Default </div>
                    <div className={cx('Products')}> 16 Products found </div>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faEnvelope} /> &nbsp;&nbsp;
                        <FontAwesomeIcon icon={faBagShopping} />
                    </div>
                    </div>
                    <span>

                    </span>
                        <div className={cx('list-card')}>
                        {data.map((list, index) => (
                                <div>
                                <Card props={list.img}/>
                                </div>
                        ))}
                    </div>
                    <div className={cx('list-card')}>
                        {data.map((list, index) => (
                                <div>
                                <Card props={list.img}/>
                                </div>
                        ))}
                    </div>

                    <div className={cx('btn-slide')}>
                        <div>
                            <input type="button" value="1" />
                        </div>
                        <div>
                            <input type="button" value="2" />
                        </div> <div>
                            <input type="button" value="3" />
                        </div>
                        <div>
                            <input type="button" value="->" />
                        </div>
                    </div>
                    </div>

                 
                </div>
                
        </div>
    )
}

export default ShopPage