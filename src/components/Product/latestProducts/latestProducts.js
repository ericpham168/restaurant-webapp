import React from 'react';
import LatestProdcut from './latestProduct/latestProdcut'

const latestProducts = (props) => {
    return (
        props.products.map((product) =>{
            return  <LatestProdcut name={product.name} price={product.price} img={product.img} />
        })
    );
};

export default latestProducts;