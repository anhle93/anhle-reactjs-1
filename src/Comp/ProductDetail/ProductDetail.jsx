import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail(props) {
    const [tabActive, setTabActive] = useState("description")

    const params = useParams();
    const id = parseInt(params.id);
    // const product = datajson.data.find(item => item.product_id === id);

    useEffect(() => {
        props.productDetail(id);
    }, [])

    const product = props.data;
    console.log(product, product.comments);

    const onClickTab = (name) => {
        setTabActive(name)
    }

    const priceFormat = (price) => {
        return new Intl.NumberFormat('de-DE').format(price);
    }
    
    return (
        <main>
            <section className="breadcrumb-area" style={{ backgroundImage: 'url("./assets/page-title.png")' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="breadcrumb-text text-center">
                                <h1>Our Shop</h1>
                                <ul className="breadcrumb-menu">
                                    <li><a href="index.html">home</a></li>
                                    <li><span>shop details</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="shop-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-4">
                            <div className="product-details-img mb-10">
                                <div className="tab-content" id="myTabContentpro">
                                    {
                                        product.images 
                                        ?  <div className="tab-pane fade show active" id="home" role="tabpanel">
                                                <div className="product-large-img">
                                                    <img src={`https://media3.scdn.vn/${product.images[0]}`} alt="" />
                                                </div>
                                            </div>
                                        : <div className="tab-pane fade show active" id="home" role="tabpanel">
                                            <div className="product-large-img">
                                                <img src="https://media3.scdn.vn/img/product/pro1.jpg" alt="" />
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="shop-thumb-tab mb-30">
                                <ul className="nav" id="myTab2" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="/home" role="tab" aria-selected="true"><img src="img/product/pro1.jpg" alt="" /> </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="/profile" role="tab" aria-selected="false"><img src="img/product/pro2.jpg" alt="" /></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab2" data-toggle="tab" href="/profile1" role="tab" aria-selected="false"><img src="img/product/pro3.jpg" alt="" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-8">
                            <div className="product-details mb-30 pl-30">
                                <div className="details-cat mb-20">
                                    <a href="/">decor,</a>
                                    <a href="/">furniture</a>
                                </div>
                                <h2 className="pro-details-title mb-15">{product.name}</h2>
                                <div className="details-price mb-20">
                                    <span>{priceFormat(product.final_price)}đ</span>
                                    <span className="old-price">{priceFormat(product.price)}đ</span>
                                </div>
                                <div className="product-variant">
                                    <div className="product-desc variant-item">
                                        <p>{product.track_info}</p>
                                    </div>
                                    <div className="product-info-list variant-item">
                                        <ul>
                                            <li><span>Brands:</span> Hewlett-Packard</li>
                                            <li><span>Product Code:</span> d12</li>
                                            <li><span>Reward Points:</span> 100</li>
                                            <li><span>Stock:</span> <span className="in-stock">In Stock</span></li>
                                        </ul>
                                    </div>
                                    <div className="product-action-details variant-item">
                                        <div className="product-details-action">
                                            <form action="/">
                                                <div className="plus-minus">
                                                    <div className="cart-plus-minus"><input type="text" defaultValue={1} /><div className="dec qtybutton">-</div><div className="inc qtybutton">+</div></div>
                                                </div>
                                                <button className="details-action-icon" type="submit"><i className="fas fa-heart" /></button>
                                                <div className="details-cart mt-40">
                                                    <button className="btn theme-btn">purchase now</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-50">
                        <div className="col-xl-8 col-lg-8">
                            <div className="product-review">
                                <ul className="nav review-tab" id="myTabproduct" role="tablist">
                                    <li className="nav-item">
                                        <a
                                            className={`nav-link ${tabActive === "description" && "active"}`}
                                            id="home-tab6"
                                            data-toggle="tab"
                                            role="tab"
                                            aria-controls="home"
                                            aria-selected="true"
                                            onClick={() => onClickTab("description")}
                                            href="#home6"
                                        >
                                            Description
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className={`nav-link ${tabActive === "comments" && "active"}`}
                                            id="profile-tab6"
                                            data-toggle="tab"
                                            role="tab"
                                            aria-controls="profile"
                                            aria-selected="false"
                                            onClick={() => onClickTab("comments")}
                                            href="#profile6"
                                        >
                                            Reviews ({
                                                product.comments ? product.comments.total_count : 0
                                            })
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent2">
                                    <div
                                        className={`tab-pane show ${tabActive === "description" && "active"}`}
                                        id="home6"
                                        role="tabpanel"
                                        aria-labelledby="home-tab6"
                                    >
                                        <div className="desc-text">
                                            <p dangerouslySetInnerHTML={{ __html: product.description }} />
                                        </div>
                                    </div>
                                    <div
                                        className={`tab-pane show ${tabActive === "comments" && "active"}`}
                                        id="profile6"
                                        role="tabpanel"
                                        aria-labelledby="profile-tab6"
                                    >
                                        <div className="desc-text review-text">
                                            <div className="product-commnets">
                                                {
                                                    product.comments ?
                                                    product.comments.data.map(elm => {
                                                        return (
                                                            <div className="product-commnets-list mb-25 pb-15">
                                                                <div className="pro-comments-img">
                                                                    <img src={`https://media3.scdn.vn/${elm.customer_logo}`} alt="" />
                                                                </div>
                                                                <div className="pro-commnets-text">
                                                                    <h4>{elm.customer_name} - <span>{elm.time}</span></h4>
                                                                    <div className="pro-rating">
                                                                        <i className="far fa-star" />
                                                                        <i className="far fa-star" />
                                                                        <i className="far fa-star" />
                                                                        <i className="far fa-star" />
                                                                    </div>
                                                                    <p>{elm.data}</p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                    : <p>EMPTY</p>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="pro-details-banner">
                                <a href="shop.html"><img src="img/banner/pro-details.jpg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default ProductDetail;