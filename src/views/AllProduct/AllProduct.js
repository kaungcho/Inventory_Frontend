import React from "react";
import './AllProduct.css';
import food1 from '../../images/food1.png'
import Navbar from "../../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import fetchCategoryList from '../../actions/category';
import productFun from '../../actions/product';
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody,CFormCheck } from "@coreui/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import URL from '../../constants/url';

const AllProduct = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          await Promise.all([dispatch(fetchCategoryList()), dispatch(productFun.fetchProductList())]);
        };
        fetchData();
      }, []);
  
    const {allCategoryList} = useSelector(state => state.category);
    const {allProductList} = useSelector(state => state.product);
    const navigate = useNavigate();
    const goToSingleProduct = (id) => {
        navigate(
            '/single-product',
            {
                replace :true,
                state : {
                    id : id
                }
            }
        );
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
                                    {allCategoryList && allCategoryList.map(category => (
                                      <div key={category.id} className="d-flex">
                                        <CFormCheck id="checkboxNoLabel" value="" aria-label="..." />
                                        <h6 className="ms-4">{category.name}</h6>
                                        <h6 className="ms-4">{category.description}</h6>
                                      </div>
                                    ))}
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
                            {allProductList && allProductList.map(product => (
                                <div key={product.id} className="col-md-4 mr-3">
                                <div className="single-product-div" onClick={() => goToSingleProduct(product.id)}>
                                    <div className="card">
                                        <div className="card-body">
                                            {/* <center><img src={URL.LOCAL_IMAGE_URL + '1683584000_1.png'} /></center> */}
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
                                    <p className="product-title">{product.name}</p>
                                    <h5 className="product-price">$ {Number(product.amount).toFixed(2)}</h5>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AllProduct;