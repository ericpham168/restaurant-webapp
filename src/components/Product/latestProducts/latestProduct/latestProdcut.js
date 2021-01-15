import React from 'react'

const latestProdcut = (props) => {
    return (
        <a href="#" className="latest-product__item">
            <div className="latest-product__item__pic">
                <img src={props.img} alt={props.name} />
            </div>
            <div className="latest-product__item__text">
                <h6>{props.name}</h6>
                <span>{props.price}</span>
            </div>
        </a>
    );
};

export default latestProdcut;