import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import './login.css';
import '../../common/css/common.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import login from '../../actions/auth';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Swal from 'sweetalert2';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(state => state.auth);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const validateFormData = (data) => {
    const errors = {};

    if (data.username.trim() === '') {
      errors.username = 'required';
    }

    if (data.password.trim() === '') {
      errors.password = 'required';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    const validationErrors = validateFormData(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Perform form submission
      dispatch(login(formData.username, formData.password)).then(() =>{
        if(isLoggedIn == true){
          navigate('/')
        }
      });
    }
  }

  useEffect(() => {
    if(Object.keys(errors).length > 0){
      if(errors.username == 'required' || errors.password == 'required'){
        Swal.fire({
          icon: 'error',
          text: 'Required Data',
        });
      }
    }
  },[errors]);
  
  return (
    <>
      <div className="container-fluid">
        <div className="row p-0 m-0">
          <div className="col-md-6 offset-md-3">
            <div className="card">
                <div className="card-body p-5">
                    <form>
                        <div className="mb-3">
                            <label className="form-label dark-green-color fw-bold">Name</label>
                            <input type="name" name="username" className="form-control"  value={formData.username} onChange={handleChange}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label dark-green-color fw-bold">Password</label>
                            <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} id="exampleInputPassword1" />
                        </div>
                        <button type="button" onClick={handleLogin} className="btn login-btn mt-3 shadow mb-4">Login</button>
                      
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
