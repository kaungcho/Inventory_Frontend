import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import './Checkout.css';
import MasterCard from '../../images/master.png';
import PayPal from '../../images/PayPal.png';
import ApplePay from '../../images/apple.png';
import food1 from '../../images/food1.png';
import food2 from '../../images/food2.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrashCan, faPenToSquare, faHeadset } from "@fortawesome/free-solid-svg-icons";
import user from '../../images/boy.png';

const Checkout = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-4 mb-5">
                <div className="row">
                    <div className="col-md-8">
                        <h3 className="checkout-text">Checkout</h3>
                        <h5 className="deli-detail-text">Delivery Details :</h5>
                        <div className="row" style={{ width : '80%' }}>
                            <div className="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label custom-label">Country</label>
                                    <input type="text" class="form-control custom-input" placeholder="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label custom-label">City</label>
                                    <input type="text" class="form-control custom-input" placeholder="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label custom-label">Street</label>
                                    <input type="text" class="form-control custom-input" placeholder="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label custom-label">Postal Code</label>
                                    <input type="text" class="form-control custom-input" placeholder="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label custom-label">Packaging</label>
                                    <input type="text" class="form-control custom-input" placeholder="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label custom-label">Shipping Option</label>
                                    <input type="text" class="form-control custom-input" placeholder="" />
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ width : '80%' }}>
                            <h5 className="payment-text">Payment :</h5>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="master-card text-center flex-fill">
                                    <img src={MasterCard} />
                                    <h6>Credit/Debit Card</h6>
                                    <input class="form-check-input custom-checkbox" type="checkbox" value=""/>
                                </div>
                                <div className="paypal-card text-center flex-fill">
                                    <img className="pt-3" src={PayPal} />
                                    <h6 className="mt-4" >Paypal</h6>
                                    <input class="form-check-input custom-checkbox" type="checkbox" value=""/>
                                </div>
                                <div className="apple-card text-center flex-fill">
                                    <img src={ApplePay} />
                                    <h6>Apple Pay</h6>
                                    <input class="form-check-input custom-checkbox" type="checkbox" value=""/>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div class="mb-3 mt-5 flex-fill me-3">
                                    <label class="form-label custom-label">Card Number</label><label class="form-label text-muted float-end custom-label">*This field is mandatory</label>
                                    <input type="text" class="form-control custom-input" placeholder="xxxx xxxx xxxx xxxx" />
                                </div>
                                <div class="mb-3 mt-5 me-3" style={{ width : '110px' }}>
                                    <label class="form-label custom-label">Expiration date</label>
                                    <input type="text" class="form-control custom-input" placeholder="MM/YYYY" />
                                </div>
                                <div class="mb-3 mt-5"  style={{ width : '100px' }}>
                                    <label class="form-label custom-label">CCV code</label>
                                    <input type="text" class="form-control custom-input" placeholder="XXX" />
                                </div>
                            </div>  
                            <div class="mb-3 flex-fill me-3">
                                <label class="form-label custom-label">Full Name on card</label>
                                <input type="text" class="form-control custom-input" placeholder="" />
                            </div>
                            <div className="d-flex">
                                <div className="save-card-detail flex-fill">
                                    <div class="form-check">
                                        <input class="form-check-input custom-checkbox" type="checkbox" value=""/>
                                        <label class="form-check-label text-muted custom-label ms-3">
                                            Default checkbox
                                        </label>
                                    </div>
                                </div>
                                <div className="cancel-update-btn">
                                    <button type="button" className="cancel-btn">Cancel</button>
                                    <button type="button" className="update-btn ms-4">Update</button>
                                </div>
                            </div>
                            <h4 className="promo-code-text mt-5 pt-4">Got a Promo code?</h4>
                            <p className="sub-promo-code-text text-muted">Promo Code</p>
                            <input type="text" class="form-control custom-input-2 ms-2 mb-5" placeholder="XXXXX" />

                        </div>
                    </div>
                    <div className="col-md-4">
                         <h5 className="order-text mt-5">Your Order</h5>
                         <div className="d-flex mt-4">
                            <p className="flex-fill text-muted subtotal-text">Subtotal</p>
                            <p className="price">$22.05</p>
                         </div>
                         <div className="d-flex mt-1">
                            <p className="flex-fill text-muted subtotal-text">Delivery</p>
                            <p className="price">$2.50</p>
                         </div>
                         <div className="d-flex mt-4">
                            <p className="flex-fill subtotal-text">Total</p>
                            <p className="price">$24.55</p>
                         </div>
                         <button type="button" className="checkout-btn mt-4">Check out</button>
                         <div className="d-flex mt-3">
                            <div className="product-image">
                                <img src={food1} />
                            </div>
                            <div className="prdocut-detail flex-fill mt-4">
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
                            <div className="prdocut-detail flex-fill mt-4">
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
                                <div className="edit-customer-service d-flex justify-content-center">
                                    <div className="mt-3 ms-5 me-5">
                                        <div className="d-flex">
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                            <p>Edit</p>
                                        </div>
                                    </div>
                                    <div className="mt-3 ">
                                        <div className="d-flex">
                                            <FontAwesomeIcon icon={faHeadset} />
                                            <p>Support</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;