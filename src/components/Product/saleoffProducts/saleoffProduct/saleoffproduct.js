import React, { useEffect } from 'react';

const saleoffproduct = (props) => {
    return (
            <div className="col-lg-12">
                <div className="product__discount__item">
                    <div className="product__discount__item__pic set-bg"
                        style={{ backgroundImage: 'url(' + props.img + ')' }}>
                        <div className="product__discount__percent">-20%</div>
                        <ul className="product__item__pic__hover">
                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                            <li><a href="#"><i className="fa fa-retweet" /></a></li>
                            <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                        </ul>
                    </div>
                    <div className="product__discount__item__text">
                        <span>Vegetables</span>
                        <h5><a href="#">Vegetables’package</a></h5>
                        <div className="product__item__price">$30.00 <span>$36.00</span></div>
                    </div>
                </div>
            </div>
    );


};

export default saleoffproduct;