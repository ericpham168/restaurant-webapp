import React from 'react';
import '../assets/sass/_home-page.scss'
import '../assets/sass/_header.scss'
import '../assets/sass/_variable.scss'
import '../assets/sass/_base.scss'
import '../assets/css/style.css'
import '../assets/sass/_hero.scss'
import languageImg from '../assets/img/language.png'
import firstBanner from '../assets/img/banner/banner-1.jpg'
import SecondBanner from '../assets/img/banner/banner-2.jpg'
import lbProductOne from '../assets/img/latest-product/lp-1.jpg'
import lbProductTwo from '../assets/img/latest-product/lp-2.jpg'
import lbProductThree from '../assets/img/latest-product/lp-3.jpg'
import saleoffImg from '../assets/img/product/discount/pd-1.jpg'

import logo from '../assets/img/logo.png'
import Header from '../components/UI/header/header'
import Nav from '../components/UI/Nav/nav'
import Breadcrumb from '../components/UI/breadcrumb/breadcum'
import FeaturedProduct from '../components/Product/fetureProducts/featureProduct/featureProduct'
import featureEightImg from '../assets/img/featured/feature-8.jpg'
import banner from '../assets/img/breadcrumb.jpg'
import LatestProdcut from '../components/Product/latestProducts/latestProduct/latestProdcut';
import ProductDetailImg from '../assets/img/product/details/product-details-1.jpg'
import ProductDetail from '../components/Product/ProductDetails/productDetail'
import Footer from '../components/UI/footer/footer'
import SaleoffProduct from '../components/Product/saleoffProducts/saleoffProduct/saleoffproduct'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const homepage = () => {
    return (
        <div>
            <div>
                {/* Page Preloder */}
                {/* <div id="preloder">
                    <div className="loader" />
                </div> */}
                {/* Humberger Begin */}
                <div className="humberger__menu__overlay" />
                <div className="humberger__menu__wrapper">
                    <div className="humberger__menu__logo">
                        <a href="#"><img src={logo} alt="" /></a>
                    </div>
                    <div className="humberger__menu__cart">
                        <ul>
                            <li><a href="#"><i className="fa fa-heart" /> <span>1</span></a></li>
                            <li><a href="#"><i className="fa fa-shopping-bag" /> <span>3</span></a></li>
                        </ul>
                        <div className="header__cart__price">item: <span>$150.00</span></div>
                    </div>
                    <div className="humberger__menu__widget">
                        <div className="header__top__right__language">
                            <img src={languageImg} alt="" />
                            <div>English</div>
                            <span className="arrow_carrot-down" />
                            <ul>
                                <li><a href="#">Spanis</a></li>
                                <li><a href="#">English</a></li>
                            </ul>
                        </div>
                        <div className="header__top__right__auth">
                            <a href="#"><i className="fa fa-user" /> Login</a>
                        </div>
                    </div>
                    <nav className="humberger__menu__nav mobile-menu">
                        <ul>
                            <li className="active"><a href="./index.html">Home</a></li>
                            <li><a href="./shop-grid.html">Shop</a></li>
                            <li><a href="#">Pages</a>
                                <ul className="header__menu__dropdown">
                                    <li><a href="./shop-details.html">Shop Details</a></li>
                                    <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                                    <li><a href="./checkout.html">Check Out</a></li>
                                    <li><a href="./blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="./blog.html">Blog</a></li>
                            <li><a href="./contact.html">Contact</a></li>
                        </ul>
                    </nav>
                    <div id="mobile-menu-wrap" />
                    <div className="header__top__right__social">
                        <a href="#"><i className="fa fa-facebook" /></a>
                        <a href="#"><i className="fa fa-twitter" /></a>
                        <a href="#"><i className="fa fa-linkedin" /></a>
                        <a href="#"><i className="fa fa-pinterest-p" /></a>
                    </div>
                    <div className="humberger__menu__contact">
                        <ul>
                            <li><i className="fa fa-envelope" /> hello@colorlib.com</li>
                            <li>Free Shipping for all Order of $99</li>
                        </ul>
                    </div>
                </div>
                {/* Humberger End */}
                {/* Header Section Begin */}
                <Header logo={logo} />
                {/* Header Section End */}
                {/* Hero Section Begin */}
                <Nav />



                {/* Hero Section End */}
                {/* Categories Section Begin */}
                {/* <section className="categories">
                    <div className="container">
                        <div className="row">
                            <div className="categories__slider ">
                                <div className="col-lg-3">
                                    <div className="categories__item set-bg" data-setbg="img/categories/cat-1.jpg">
                                        <h5><a href="#">Fresh Fruit</a></h5>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="categories__item set-bg" data-setbg="img/categories/cat-2.jpg">
                                        <h5><a href="#">Dried Fruit</a></h5>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="categories__item set-bg" data-setbg="img/categories/cat-3.jpg">
                                        <h5><a href="#">Vegetables</a></h5>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="categories__item set-bg" data-setbg="img/categories/cat-4.jpg">
                                        <h5><a href="#">drink fruits</a></h5>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="categories__item set-bg" data-setbg="img/categories/cat-5.jpg">
                                        <h5><a href="#">drink fruits</a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* Categories Section End */}

                <Breadcrumb img={banner} />
                <section>
                    <div className="container">
                        <div className="row">
                            <OwlCarousel autoplay={true} loop>
                                <SaleoffProduct name="Thịt bò" price="300.000vnd" img={saleoffImg} />
                                <SaleoffProduct name="Thịt bò" price="300.000vnd" img={saleoffImg} />
                                <SaleoffProduct name="Thịt bò" price="300.000vnd" img={saleoffImg} />
                                <SaleoffProduct name="Thịt bò" price="300.000vnd" img={saleoffImg} />
                                <SaleoffProduct name="Thịt bò" price="300.000vnd" img={saleoffImg} />
                                <SaleoffProduct name="Thịt bò" price="300.000vnd" img={saleoffImg} />
                            </OwlCarousel>
                        </div>
                    </div>
                </section>
                {/* Featured Section Begin */}
                <section className="featured spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <h2>Featured Product</h2>
                                </div>
                                <div className="featured__controls">
                                    <ul>
                                        <li className="active" data-filter="*">All</li>
                                        <li data-filter=".oranges">Oranges</li>
                                        <li data-filter=".fresh-meat">Fresh Meat</li>
                                        <li data-filter=".vegetables">Vegetables</li>
                                        <li data-filter=".fastfood">Fastfood</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row featured__filter">
                            <FeaturedProduct img="feature-1.jpg" name="Thịt bò" price="300.000vnd" img={featureEightImg} />
                            <FeaturedProduct img="feature-1.jpg" name="Thịt heo" price="350.000vnd" img={featureEightImg} />
                            <FeaturedProduct img="feature-1.jpg" name="Cá điều hồng" price="300.000vnd" img={featureEightImg} />
                            <FeaturedProduct img="feature-1.jpg" name="Bạch tuột" price="400.000vnd" img={featureEightImg} />
                            <FeaturedProduct img="feature-1.jpg" name="Cua hoàng đế" price="300.000vnd" img={featureEightImg} />
                            <FeaturedProduct img="feature-1.jpg" name="Tôm alaska" price="300.000vnd" img={featureEightImg} />
                            <FeaturedProduct img="feature-1.jpg" name="Cua tuyết" price="700.000vnd" img={featureEightImg} />
                            <FeaturedProduct img="feature-1.jpg" name="Cá ngừ đại dương" price="500.000vnd" img={featureEightImg} />
                        </div>
                    </div>
                </section>
                {/* Featured Section End */}
            </div>

            <div>
                {/* Banner Begin */}
                <div className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="banner__pic">
                                    <img src={firstBanner} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="banner__pic">
                                    <img src={SecondBanner} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Banner End */}
                {/* Latest Product Section Begin */}
                <section className="latest-product spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="latest-product__text">
                                    <h4>Latest Products</h4>
                                    <OwlCarousel autoplay={true} loop items={1} >
                                        <div className="latest-prdouct__slider__item">
                                            <LatestProdcut name="táo nhật" price="30.000" img={lbProductOne} />
                                            <LatestProdcut name="mận hàn quốc" price="30.000" img={lbProductTwo} />
                                            <LatestProdcut name="mận hàn quốc" price="30.000" img={lbProductThree} />
                                        </div>
                                        <div className="latest-prdouct__slider__item">
                                            <LatestProdcut name="táo nhật" price="30.000" img={lbProductOne} />
                                            <LatestProdcut name="mận hàn quốc" price="30.000" img={lbProductTwo} />
                                            <LatestProdcut name="mận hàn quốc" price="30.000" img={lbProductThree} />
                                        </div>
                                    </OwlCarousel>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="latest-product__text">
                                    <h4>Latest Products</h4>
                                    <OwlCarousel autoplay={true} loop items={1} >
                                        <div className="latest-prdouct__slider__item">
                                            <LatestProdcut name="táo nhật" price="30.000" img={lbProductOne} />
                                            <LatestProdcut name="mận hàn quốc" price="30.000" img={lbProductTwo} />
                                            <LatestProdcut name="mận hàn quốc" price="30.000" img={lbProductThree} />
                                        </div>
                                        <div className="latest-prdouct__slider__item">
                                            <LatestProdcut name="táo nhật" price="30.000" img={lbProductOne} />
                                            <LatestProdcut name="mận hàn quốc" price="30.000" img={lbProductTwo} />
                                            <LatestProdcut name="mận hàn quốc" price="30.000" img={lbProductThree} />
                                        </div>
                                    </OwlCarousel>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="latest-product__text">
                                    <h4>Latest Products</h4>
                                    <OwlCarousel autoplay={true} loop items={1} smartSpeed={250} nav>
                                        <div className="latest-prdouct__slider__item">
                                            <LatestProdcut name="táo nhật" price="30.000" img={lbProductOne} />
                                            <LatestProdcut name="mận hàn quốc" price="30.000" img={lbProductTwo} />
                                            <LatestProdcut name="mận hàn quốc" price="30.000" img={lbProductThree} />
                                        </div>
                                        <div className="latest-prdouct__slider__item">
                                            <LatestProdcut name="táo nhật" price="30.000" img={lbProductOne} />
                                            <LatestProdcut name="mận hàn quốc" price="30.000" img={lbProductTwo} />
                                            <LatestProdcut name="mận hàn quốc" price="30.000" img={lbProductThree} />
                                        </div>
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Latest Product Section End */}

                <section class="product-details spad">
                    <div class="container">
                        <div class="row">
                            <ProductDetail name="Thịt bò" price="5000.000" img={ProductDetailImg} />
                        </div>
                    </div>
                </section>

                {/* Footer Section Begin */}
                <Footer logo={logo} />
            </div>



        </div>
    );
};

export default homepage;