import React from 'react';

const featureProduct = (props) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
            <div className="featured__item">
                <div className="featured__item__pic set-bg" style ={ { backgroundImage: "url("+props.img+")" }}>
                    <ul className="featured__item__pic__hover">
                        <li><a href="#"><i className="fa fa-heart" /></a></li>
                        <li><a href="#"><i className="fa fa-retweet" /></a></li>
                        <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                    </ul>
                </div>
                <div className="featured__item__text">
                    <h6><a href="#">{props.name}</a></h6>
                    <h5>{props.price}</h5>
                </div>
            </div>
        </div>
    );
};

export default featureProduct;