import React from "react";
import './AllProduct.css';
import food1 from '../../images/food1.png'
import Navbar from "../../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody,CFormCheck } from "@coreui/react";
import { useNavigate } from "react-router-dom";
const AllProduct = () => {
    const navigate = useNavigate();
    const goToSingleProduct = () => {
        navigate('/single-product');
    }

    return (
        <>
        <Navbar />
            <div className="container mt-3" id="product">
                <div className="d-flex justify-content-center">
                    <input type="text" placeholder="what are you looking for today? " className="form-control search-input" />
                </div>
                <div className="row p-0">
                    <div className="col-md-4">
                        <h1>All Products</h1>
                        <CAccordion>
                          <CAccordionItem itemKey={1}>
                            <CAccordionHeader><h6>Categories</h6></CAccordionHeader>
                            <CAccordionBody>
                                <div className="d-flex flex-column">
                                    <div className="d-flex">
                                        <CFormCheck id="checkboxNoLabel" value="" aria-label="..."/>
                                        <h6 className="ms-4">sadsa</h6>
                                        <h6 className="ms-4 text-muted">1</h6>
                                    </div>
                                    <div className="d-flex">
                                        <CFormCheck id="checkboxNoLabel" value="" aria-label="..."/>
                                        <h6 className="ms-4">sadsa</h6>
                                        <h6 className="ms-4 text-muted">1</h6>
                                    </div>
                                    <div className="d-flex">
                                        <CFormCheck id="checkboxNoLabel" value="" aria-label="..."/>
                                        <h6 className="ms-4">sadsa</h6>
                                        <h6 className="ms-4 text-muted">1</h6>
                                    </div>
                                </div>
                            </CAccordionBody>
                          </CAccordionItem>
                          <CAccordionItem itemKey={2}>
                            <CAccordionHeader><h6>Brands</h6></CAccordionHeader>
                            <CAccordionBody>
                             
                            </CAccordionBody>
                          </CAccordionItem>
                          <CAccordionItem itemKey={3}>
                            <CAccordionHeader><h6>Price</h6></CAccordionHeader>
                            <CAccordionBody>
                              
                            </CAccordionBody>
                          </CAccordionItem>
                        </CAccordion>
                    </div>
                    <div className="col-md-8">
                        <div className="row all-product-list-div">
                            <div className="col-md-4 mr-3">
                                <div className="single-product-div" onClick={goToSingleProduct}>
                                    <div className="card">
                                        <div className="card-body">
                                            <center><img src={food1} /></center>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <div className="popular">Popular</div>
                                                </div>
                                                <div className="icons">
                                                    <FontAwesomeIcon icon={faBagShopping} />
                                                    <FontAwesomeIcon icon={faHeart} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="product-title">Chicken Salad</p>
                                    <h5 className="product-price">$4.20</h5>
                                </div>
                            </div>
                            <div className="col-md-4 mr-3">
                                <div className="single-product-div">
                                    <div className="card">
                                        <div className="card-body">
                                            <center><img src={food1} /></center>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <div className="popular">Popular</div>
                                                </div>
                                                <div className="icons">
                                                    <FontAwesomeIcon icon={faBagShopping} />
                                                    <FontAwesomeIcon icon={faHeart} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="product-title">Chicken Salad</p>
                                    <h5 className="product-price">$4.20</h5>
                                </div>
                            </div>
                            <div className="col-md-4 mr-3">
                                <div className="single-product-div">
                                    <div className="card">
                                        <div className="card-body">
                                            <center><img src={food1} /></center>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <div className="popular">Popular</div>
                                                </div>
                                                <div className="icons">
                                                    <FontAwesomeIcon icon={faBagShopping} />
                                                    <FontAwesomeIcon icon={faHeart} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="product-title">Chicken Salad</p>
                                    <h5 className="product-price">$4.20</h5>
                                </div>
                            </div>
                            <div className="col-md-4 mr-3">
                                <div className="single-product-div">
                                    <div className="card">
                                        <div className="card-body">
                                            <center><img src={food1} /></center>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <div className="popular">Popular</div>
                                                </div>
                                                <div className="icons">
                                                    <FontAwesomeIcon icon={faBagShopping} />
                                                    <FontAwesomeIcon icon={faHeart} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="product-title">Chicken Salad</p>
                                    <h5 className="product-price">$4.20</h5>
                                </div>
                            </div>
                            <div className="col-md-4 mr-3">
                                <div className="single-product-div">
                                    <div className="card">
                                        <div className="card-body">
                                            <center><img src={food1} /></center>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <div className="popular">Popular</div>
                                                </div>
                                                <div className="icons">
                                                    <FontAwesomeIcon icon={faBagShopping} />
                                                    <FontAwesomeIcon icon={faHeart} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="product-title">Chicken Salad</p>
                                    <h5 className="product-price">$4.20</h5>
                                </div>
                            </div>
                            <div className="col-md-4 mr-3">
                                <div className="single-product-div">
                                    <div className="card">
                                        <div className="card-body">
                                            <center><img src={food1} /></center>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <div className="popular">Popular</div>
                                                </div>
                                                <div className="icons">
                                                    <FontAwesomeIcon icon={faBagShopping} />
                                                    <FontAwesomeIcon icon={faHeart} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="product-title">Chicken Salad</p>
                                    <h5 className="product-price">$4.20</h5>
                                </div>
                            </div>
                            <div className="col-md-4 mr-3">
                                <div className="single-product-div">
                                    <div className="card">
                                        <div className="card-body">
                                            <center><img src={food1} /></center>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <div className="popular">Popular</div>
                                                </div>
                                                <div className="icons">
                                                    <FontAwesomeIcon icon={faBagShopping} />
                                                    <FontAwesomeIcon icon={faHeart} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="product-title">Chicken Salad</p>
                                    <h5 className="product-price">$4.20</h5>
                                </div>
                            </div>
                            <div className="col-md-4 mr-3">
                                <div className="single-product-div">
                                    <div className="card">
                                        <div className="card-body">
                                            <center><img src={food1} /></center>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <div className="popular">Popular</div>
                                                </div>
                                                <div className="icons">
                                                    <FontAwesomeIcon icon={faBagShopping} />
                                                    <FontAwesomeIcon icon={faHeart} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="product-title">Chicken Salad</p>
                                    <h5 className="product-price">$4.20</h5>
                                </div>
                            </div>
                            <div className="col-md-4 mr-3">
                                <div className="single-product-div">
                                    <div className="card">
                                        <div className="card-body">
                                            <center><img src={food1} /></center>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <div className="popular">Popular</div>
                                                </div>
                                                <div className="icons">
                                                    <FontAwesomeIcon icon={faBagShopping} />
                                                    <FontAwesomeIcon icon={faHeart} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="product-title">Chicken Salad</p>
                                    <h5 className="product-price">$4.20</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AllProduct;