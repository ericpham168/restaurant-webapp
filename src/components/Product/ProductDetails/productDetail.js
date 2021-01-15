import React from 'react';
import '../../../assets/css/bootstrap.min.css'
import OwlCarousel from 'react-owl-carousel';  

const productDetail = (props) => {
    return (
        <>
            <div className="col-lg-6 col-md-6">
                <div className="product__details__pic">
                    <div className="product__details__pic__item">
                        <img className="product__details__pic__item--large" src={props.img} alt="" />
                    </div>
                    <OwlCarousel autoplay={true} loop autoplayTimeout={3000}>
                        <img src={props.img} alt="" style={{padding: "5%"}}/>
                        <img src={props.img} alt="" style={{padding: "5%"}}/>
                        <img src={props.img} alt="" style={{padding: "5%"}}/>
                        <img src={props.img} alt="" style={{padding: "5%"}}/>
                    </OwlCarousel>
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
                <div className="product__details__text">
                    <h3>{props.name}</h3>
                    <div className="product__details__price">{props.price}</div>
                    <div className="product__details__quantity">
                        <div className="quantity">
                            <div className="pro-qty">
                                <input type="text" defaultValue={1} />
                            </div>
                        </div>
                    </div>
                    <a href="#" className="primary-btn">Thêm vào giỏ hàng</a>
                </div>
            </div>
        </>

    );
};

export default productDetail;