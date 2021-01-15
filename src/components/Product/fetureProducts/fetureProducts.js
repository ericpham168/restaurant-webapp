import React from 'react';
import FeaturedProduct from '../fetureProducts/featureProduct/featureProduct'

const fetureProducts = (props) => {
    return (
        props.product.map((product) =>{
            return <FeaturedProduct img={product.img} name={product.name} price={product.price} />
        })
    );
};

export default fetureProducts;