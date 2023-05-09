import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import './login.css';
import '../../common/css/common.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row p-0 m-0">
          <div className="col-md-7 wrapper">
            <div className="welcome-div">
                <div className="welcome-main"><span className="welcome-text">Welcome!</span> <br/> Or <br/> Welcome <br/> Back!</div>
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
                <div className="card-body p-5">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label dark-green-color fw-bold">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label dark-green-color fw-bold">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" class="btn login-btn mt-3 shadow mb-4">Login</button>
                        <div class="mb-3 d-flex login-signup-div justify-content-between">
                            <div className="dark-green-color sign-up">Don't haven't an account?<a className="ms-2 dark-green-color fw-bold">Sign Up!</a></div>
                            <div className="dark-green-color forget-password">Fogert Password</div>
                        </div>
                        <div className="sign-in-with mt-5">
                            <h6><span>Or Sign in with</span></h6>
                        </div>
                        {/* <div className="sign-up-icons">
                          <div className="facebook-icon">
                            <FontAwesomeIcon icon={ faFacebook } size="lg" style={{color: "#3b5998",}} />
                          </div>
                        </div> */}
                    </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
