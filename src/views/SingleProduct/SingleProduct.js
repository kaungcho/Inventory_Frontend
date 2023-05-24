import React from "react";
import "./SingleProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import food1 from "../../images/food1.png";
import food2 from "../../images/food2.png";
import { useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const navigate = useNavigate();
  const goToAddToCart = () => {
    navigate("/add-to-cart");
  };

  const goToSingleProduct = () => {
    navigate("/single-product");
  };

  

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center">
          <input
            type="text"
            placeholder="what are you looking for today? "
            className="form-control search-input"
          />
        </div>
        <div className="row mt-5">
          <div className="col-md-8">
            <div className="single-product-image d-flex justify-content-center align-items-center">
              <div className="single-product-image-1">
                <img src={food1} />
              </div>
              <div className="single-product-image-connection">
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <div className="single-product-image-2">
                <img src={food2} />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <p className="limited-text">Limited Time</p>
            <h4 className="product-category mt-4">Baole Dessert</h4>
            <h2 className="product-name">
              Three Way Dessert + Ultimate Jelly Dessert
            </h2>
            <h1 className="sale-price">$9</h1>
            <del className="original-price ms-3">$12,50</del>
            <p className="product-description">
              Indulge in the flavors of our mouthwatering Western Food Burger.
              Made with the finest ingredients, it's a treat for your taste
              buds.
            </p>
            <div className="add-to-cart-div d-flex mt-5">
              <button type="button" className="add-to-cart" onClick={goToAddToCart}>
                Add to Bag
              </button>
              <div className="icon ps-5">
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </div>
          </div>
        </div>
        <h4 className="mt-5 fw-bold">You might also like</h4>
        <div className="row related-product-list-div">
          <div className="col-md-3 mr-3">
            <div className="single-product-div" onClick={goToSingleProduct}>
              <div className="card">
                <div className="card-body">
                  <center>
                    <img src={food1} />
                  </center>
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
          <div className="col-md-3 mr-3">
            <div className="single-product-div">
              <div className="card">
                <div className="card-body">
                  <center>
                    <img src={food1} />
                  </center>
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
          <div className="col-md-3 mr-3">
            <div className="single-product-div">
              <div className="card">
                <div className="card-body">
                  <center>
                    <img src={food1} />
                  </center>
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
          <div className="col-md-3 mr-3">
            <div className="single-product-div">
              <div className="card">
                <div className="card-body">
                  <center>
                    <img src={food1} />
                  </center>
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
        <h4 className="mt-5 fw-bold">Recently View</h4>
        <div className="row related-product-list-div">
          <div className="col-md-3 mr-3">
            <div className="single-product-div" onClick={goToSingleProduct}>
              <div className="card">
                <div className="card-body">
                  <center>
                    <img src={food1} />
                  </center>
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
          <div className="col-md-3 mr-3">
            <div className="single-product-div">
              <div className="card">
                <div className="card-body">
                  <center>
                    <img src={food1} />
                  </center>
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
          <div className="col-md-3 mr-3">
            <div className="single-product-div">
              <div className="card">
                <div className="card-body">
                  <center>
                    <img src={food1} />
                  </center>
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
    </>
  );
};
export default SingleProduct;
