import React from "react";
import './GetInTouch.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const GetInTouch = () => {
    return (
        <>
            <div className="row mt-5 ">
                <div className="col-md-6 d-flex flex-column align-items-center mt-5 ">
                    <div className="address">
                        <h6>Singapore</h6>
                        <p>53 Ubi Ave 1, #06-05 Paya Ubi Industrial Park, Singapore 408934</p>
                    </div>
                    <div className="contact mt-3">
                        <h6 className="contact-text">Contact Us</h6>
                        <h6>+65 8699 6768</h6>
                        <h6>Enquiry@Tenes.com.sg</h6>
                    </div>
                    <div className="find-us d-flex mt-4">
                        <div className="find-us-text">
                            <h6>Find Us with</h6>
                            <h6>Google Maps</h6>
                            <button className="go-to-google mt-2">Go to Google Maps</button>
                        </div>
                        <div className="find-us-icon">
                            <FontAwesomeIcon icon={faLocationDot} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="get-in-touch">
                        <h1>Get In Touch!</h1>
                        <p>Write your message here and our team will contact you very soon</p>
                        <input type="text" className="form-control mt-2" placeholder="Your Name"/>
                        <input type="text" className="form-control mt-3" placeholder="Your Surname"/>
                        <input type="text" className="form-control mt-3" placeholder="Your Email"/>
                        <textarea className="form-control mt-3" placeholder="Your Message"></textarea>
                        <button type="button" className="form-control mt-4">Send</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default GetInTouch;