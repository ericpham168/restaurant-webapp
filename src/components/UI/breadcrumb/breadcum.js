import React from 'react';

const breadcum = (props) => {
    return (
        <section className="breadcrumb-section set-bg" style ={ { backgroundImage: "url("+props.img+")" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="breadcrumb__text">
                            <h2>Hải Sản Giang Ghẹ</h2>
                            <div className="breadcrumb__option">
                                <a href="./index.html">Home</a>
                                <span>Shop</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default breadcum;