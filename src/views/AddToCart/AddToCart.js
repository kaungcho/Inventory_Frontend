import React  from "react";
import Navbar from "../../components/Navbar/Navbar";
import './AddToCart.css';
import food1 from '../../images/food1.png';
import food2 from '../../images/food2.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import user from '../../images/boy.png';
const AddToCart = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-7">
                        <h2 className="shopping-cart-text">Shopping Cart (2 items)</h2>
                        <div className="d-flex mt-3">
                            <div className="product-image">
                                <img src={food1} />
                            </div>
                            <div className="prdocut-detail flex-grow-1 ms-5 mt-4">
                                <h5>QQ Soya</h5>
                                <p className="text-muted">Quantity : 3</p>
                                <div className="d-flex product-qty">
                                    <FontAwesomeIcon icon={faMinus} />
                                    <p>3</p>
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                            </div>
                            <div className="product-action">
                                <FontAwesomeIcon className="text-muted" icon={faTrashCan} />
                                <p className="pt-3">$12.30</p>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex mt-3">
                            <div className="product-image">
                                <img src={food2} />
                            </div>
                            <div className="prdocut-detail flex-grow-1 ms-5 mt-4">
                                <h5>Chendol Pulut</h5>
                                <p className="text-muted">Quantity : 3</p>
                                <div className="d-flex product-qty">
                                    <FontAwesomeIcon icon={faMinus} />
                                    <p>3</p>
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                            </div>
                            <div className="product-action">
                                <FontAwesomeIcon className="text-muted" icon={faTrashCan} />
                                <p className="pt-3">$12.30</p>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex mt-5">
                            <div className="product-total flex-grow-1 me-5">
                                <h3>Subtotal (2 items) : $24.55</h3>
                                <h6 className="text-muted">Delivery : $2.55</h6>
                                <h6 className="text-muted">Gst : $0.83</h6>
                            </div>
                            <div className="checkout-div">
                                <button type="button">Proceed to checkout</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card user-detail">
                            <div className="card-body">
                                <div className="d-flex justify-content-evenly image-name">
                                    <div><img src={user} /></div>
                                    <div className="pt-4"><h6>Kaung Myat Cho</h6></div>
                                </div>
                                <div className="phone">
                                    <h6>Phone</h6>
                                    <p className="text-muted">+95 976 973 4207</p>
                                </div>
                                <div className="email">
                                    <h6>Email</h6>
                                    <p className="text-muted">kaungcho2@gmail.com</p>
                                </div>
                                <div className="deli-address">
                                    <h6>Delivery Address</h6>
                                    <p className="text-muted">Yangon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddToCart;