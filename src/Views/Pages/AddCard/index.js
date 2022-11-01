import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import classNames from 'classnames/bind';
import styles from './index.module.scss';
const cx = classNames.bind(styles);

// import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';



function AddCard() {

    let slug = useParams();
    const [so, setSo] = useState(1);

    function handerCong() {
        setSo(so + 1);
    }

    function handerTru() {
        setSo(so - 1);

    }

    return (
        <div className={cx('container')}>
            <div className={cx('img-bia')}>
                <div className={cx('text-bia')}>
                    <div>
                        <div>
                            <h2> QT - Shop </h2>
                        </div>
                        <p> Home - Shop </p>
                    </div>
                </div>
                <img src="https://technext.github.io/ogani/img/breadcrumb.jpg" />
            </div>


            <div className={cx('table')}>
                <table>
                    <tr>
                        <div>
                            <td>
                                Products
                            </td>
                        </div>
                        <div>
                            <td>
                                Price
                            </td>
                            <td>
                                Quantity
                            </td>
                            <td>
                                Total
                            </td>
                        </div>
                    </tr>

                    <tr>
                        <div>
                            <td>
                                <img src="https://technext.github.io/ogani/img/cart/cart-1.jpg" />
                                <label> Vegetable’s Package</label>
                            </td>
                        </div>
                        <div>
                            <td>
                                <p>
                                    $55.00
                                </p>
                            </td>
                            <td>
                                <p>
                                    <button onClick={() => handerTru()}>-</button>
                                    <input type='text' value={so} />
                                    <button onClick={() => handerCong()}>+</button>
                                </p>
                            </td>
                            <td>
                                <p>
                                    $110.00
                                    {/* <faInstagram /> */}
                                </p>
                            </td>
                        </div>
                    </tr>

                    <tr>
                        <div>
                            <td>
                                <img src="https://technext.github.io/ogani/img/cart/cart-1.jpg" />
                                <label> Vegetable’s Package</label>
                            </td>
                        </div>
                        <div>
                            <td>
                                <p>
                                    $55.00
                                </p>
                            </td>
                            <td>
                                <p>
                                    <button onClick={() => handerTru()}>-</button>
                                    <input type='text' value={so} />
                                    <button onClick={() => handerCong()}>+</button>
                                </p>
                            </td>
                            <td>
                                <p>
                                    $110.00
                                </p>
                            </td>
                        </div>
                    </tr>
                    <tr>
                        <div>
                            <td>
                                <img src="https://technext.github.io/ogani/img/cart/cart-1.jpg" />
                                <label> Vegetable’s Package</label>
                            </td>
                        </div>
                        <div>
                            <td>
                                <p>
                                    $55.00
                                </p>
                            </td>
                            <td>
                                <p>
                                    <button onClick={() => handerTru()}>-</button>
                                    <input type='text' value={so} />
                                    <button onClick={() => handerCong()}>+</button>
                                </p>
                            </td>
                            <td>
                                <p>
                                    $110.00
                                </p>
                            </td>
                        </div>
                    </tr>
                </table>

            </div>
            <div className={cx('box')}>
                <div className={cx('button_update')}>
                    <div>
                        <button>CONTINUE SHOPPING</button>
                    </div>
                    <div>
                        <button>
                            UPADATE CART
                        </button>
                    </div>
                </div>
            </div>
            <div className={cx('box-all1')}>
                <div className={cx('box1')}>
                    <div className={cx('left')}>
                        <div className={cx('title')} >
                            <h1 >
                                Discount Codes
                            </h1>
                        </div>
                        <div className={cx('Discount')}>
                            <div>
                                <input type='text' placeholder="Enter you coupon code" />
                            </div>
                            <div>
                                <button>
                                    APPLY COUPON
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('right')}>
                        <h1>
                            Cart Total
                        </h1>
                        <table>
                            <tr>
                                <td>
                                    Subtotal
                                </td>
                                <td>$454.98</td>
                            </tr>
                            <hr />
                            <tr>
                                <td>
                                    Total
                                </td>
                                <td>$454.98</td>
                            </tr>


                        </table>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                </div>




            </div>
            <div>
                <div class="container text-center">
                    <div class="row justify-content-md-center">
                        <div class="col col-lg-2">
                            1 of 3
                        </div>
                        <div class="col-md-auto">
                            Variable width content
                        </div>
                        <div class="col col-lg-2">
                            3 of 3
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            1 of 3
                        </div>
                        <div class="col-md-auto">
                            Variable width content
                        </div>
                        <div class="col col-lg-2">
                            3 of 3
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddCard;