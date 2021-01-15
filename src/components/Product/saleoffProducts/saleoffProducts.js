import React from 'react';
import OwlCarousel from 'react-owl-carousel';  
import SaleoffProduct from './saleoffProduct/saleoffproduct'

const saleoffProducts = (props) => {
    return (
        <div class="col-lg-9 col-md-7">
            <div class="product__discount">
                <div class="section-title product__discount__title">
                    <h2>Sale Off</h2>
                </div>
                <div class="row">
                    <OwlCarousel autoplay={true} loop>
                        {props.products.map((product) =>{
                            return <SaleoffProduct name={product.name} price={product.price} img={product.img}/>
                        })}
                    </OwlCarousel>
                </div>
            </div>
        </div>
    );
};

export default saleoffProducts;