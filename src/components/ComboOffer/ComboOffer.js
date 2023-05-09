import React from "react";
import './combo-offer.css';
import food1 from '../../images/food1.png';
import food2 from '../../images/food2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const ComboOffer = props => {
    return (
        <>
            <div className="container mt-5 pt-5 mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="combo-offer-text">Combo Offer Today!</h3>
                        <div className="combo-offer-images d-flex justify-content-center align-items-center">
                            <div className="combo-offer-image-1">
                                <img src={food1} />
                            </div>
                            <div className="combo-offer-image-connection">
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            <div className="combo-offer-image-2">
                                <img src={food2} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <a href="#" className="all-prodcuts d-flex justify-content-end">
                            <p>Go to all Products</p>
                            <FontAwesomeIcon icon={faArrowRightLong} />
                        </a>
                        <p className="limited-time">Limited Time</p>
                        <p className="title">Western Lunch</p>
                        <p className="combo-title">Chicken Slad + American Burger</p>
                        <div className="price d-flex">
                            <p className="sale-price">$9</p>
                            <del style={{ color : '#00000070' }}><p className="regular-price">$12,50</p></del>
                        </div>
                        <p className="description">
                            Indulge in the flavors of our mouthwatering Western Food Burger. Made with the finest ingredients, it's a treat for your taste buds.
                        </p>
                        <div className="btn-and-icons d-flex">
                            <button type="button">To order</button>
                            <div className="icons">
                                <FontAwesomeIcon icon={faHeart} />
                                <FontAwesomeIcon icon={faBagShopping} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComboOffer;