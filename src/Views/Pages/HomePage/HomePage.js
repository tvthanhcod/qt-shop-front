import { useNavigate } from "react-router-dom"
import { useRef, useState } from "react";

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classNames from "classnames/bind"
import styles from "./homepage.module.scss"
import { SlideContent, Card, Blog } from "../../../Components"


const cx = classNames.bind(styles)
const HomePage = () => {

    const navigate = useNavigate()
    const buttonRef = useRef()


    const productItem = [
        { id: 1, type: "Oranges", img: "https://technext.github.io/ogani/img/product/discount/pd-5.jpg"},
        { id: 2, type: "Fresh Meat", img: "https://technext.github.io/ogani/img/product/discount/pd-4.jpg"},
        { id: 3, type: "Vegetables", img: 'https://technext.github.io/ogani/img/product/discount/pd-3.jpg'},
        { id: 4, type: "Fastfood", img: 'https://technext.github.io/ogani/img/product/discount/pd-6.jpg'},
        { id: 5, type: "Oranges", img: 'https://technext.github.io/ogani/img/product/discount/pd-2.jpg'},
        { id: 6, type: "Oranges", img: 'https://technext.github.io/ogani/img/product/discount/pd-1.jpg'},
    ]

    const [product, setProduct] = useState(productItem)

    //setting slick slider
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: 'ease-in-out'
      };

      // fake data 
      const data = [
        {id: 1, image: "https://technext.github.io/ogani/img/categories/cat-1.jpg", name: "Fresh Fruit"},
        {id: 2, image: "https://technext.github.io/ogani/img/categories/cat-1.jpg", name: "Fresh Fruit"},
        {id: 3, image: "https://technext.github.io/ogani/img/categories/cat-1.jpg", name: "Fresh Fruit"},
        {id: 4, image: "https://technext.github.io/ogani/img/categories/cat-1.jpg", name: "Fresh Fruit"},
        {id: 5, image: "https://technext.github.io/ogani/img/categories/cat-1.jpg", name: "Fresh Fruit"},
        {id: 6, image: "https://technext.github.io/ogani/img/categories/cat-1.jpg", name: "Fresh Fruit"},
        {id: 7, image: "https://technext.github.io/ogani/img/categories/cat-1.jpg", name: "Fresh Fruit"},
        {id: 8, image: "https://technext.github.io/ogani/img/categories/cat-1.jpg", name: "Fresh Fruit"},
        {id: 9, image: "https://technext.github.io/ogani/img/categories/cat-1.jpg", name: "Fresh Fruit"},
        {id: 10, image: "https://technext.github.io/ogani/img/categories/cat-1.jpg", name: "Fresh Fruit"},
      ]


      const select = [
        { id: 1, item: "All"},
        { id: 2, item: "Oranges"},
        { id: 3, item: "Fresh Meat"},
        { id: 4, item: "Vegetables"},
        { id: 5, item: "Fastfood"},
      ]

      const handleSelect = (value) => {
        let data
        if(value === 'All') {
            data = productItem
            setProduct(data)
            return
        }
        data = productItem.filter((item) => {
        return item.type === value
       })
       setProduct(data)
      }

    return (
        <div className={cx('container')}>
           <div className="container">
            {/* banner */}
                <div className={cx('banner-box')}>
                    <div className={cx('banner')}>
                        <div className={cx('banner-description')}>
                            <p className={cx('name-banner')}>FRUIT FRESH</p>
                            <p className={cx('slogan')}>Vegetable</p>
                            <p className={cx('slogan')}>100% Organic</p>
                            <p className={cx('benefit')}>Free Pickup and Delivery Available</p>
                            <div 
                                className={cx('baner-btn')}
                                onClick={() => { navigate("/shop")}}
                            >Shop now</div>
                        </div>
                        <img src="https://technext.github.io/ogani/img/hero/banner.jpg" alt="Banner"/>
                    </div>
                </div>
                {/* slider products */}
                <div className={cx('product-box')}>
                    <Slider {...settings}>
                        { data.map((item) => {
                            return (
                                <div key={item.id} className={cx('list-product__item')}>
                                    <img src={item.image} alt="Product Item"/>
                                    <div className={cx('name-product')}>{item.name}</div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
                {/* featured products */}
                <div className={cx('featured-product-box')}>
                    <h2 className={cx('featured-product__heading')}>Featured Product</h2>
                    <div className={cx('choose-product')}>
                        <ul className={cx('tag-product')}>
                            { select.map((item) => {
                                return (
                                    <li 
                                        ref={buttonRef}
                                        key={item.id} 
                                        className={cx('tag-product__item')}
                                        onClick={() => handleSelect(item.item)}
                                    >
                                        {item.item}
                                    </li>
                                )
                            })}
                        </ul>
                        <div className={cx('featured-list')}>
                            { product ? 
                            <>
                                {product.map((product) => {
                                    return (
                                        <Card props={product.img} />
                                    )
                                })}
                            </>
                            :
                            <>
                                <h1 style={{margin: '0 auto'}}>Not Found This Product or Sold Out</h1>
                            </>
                            }
                        </div>
                    </div>
                </div>
                {/* sub - banner */}
                <div className={cx('sub-banner')}>
                    <div className={cx('sub-banner__item')}>
                        <img src="https://technext.github.io/ogani/img/banner/banner-1.jpg" alt="Sub Banner"/>
                    </div>
                    <div className={cx('sub-banner__item')}>
                        <img src="https://technext.github.io/ogani/img/banner/banner-2.jpg" alt="Sub Banner"/>
                    </div>
                </div>
                {/* list content */}
                <div className={cx('list-content__box')}>
                    <SlideContent />
                    <SlideContent />
                    <SlideContent />
                </div>
                <div className={cx('blog')}>
                    <h2 className={cx('blog-heading')}>From The Blog</h2>
                    <div className={cx('list-blog')}>
                        <Blog />
                        <Blog />
                        <Blog />
                    </div>
                </div>
           </div>
        </div>
    )
}

export default HomePage