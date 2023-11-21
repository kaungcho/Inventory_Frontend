import React from "react";
import {CContainer, CRow, CCol} from '@coreui/react';
import Sitebar from "../../components/Sidebar/Sitebar";
import './HomePage.css';
import Circle from "../../components/Circle/Circle";
import CircleTwo from "../../components/Circle/CircelTwo";
import CircleThree from "../../components/Circle/CircleThree";
import ComboOffer from "../../components/ComboOffer/ComboOffer";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import TiktokVideo from "../../components/TiktokVideo/TiktokVideo";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <CContainer fluid>
      <CRow className="homepage-row">
        <CCol xs={3} className="homepage-column1">
          <Sitebar /> 
        </CCol>
        <CCol xs={8} className="homepage-column2">
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="image">Image</label>
                  <input type="file" className="form-control" id="image" />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Item Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input type="text" className="form-control" id="price" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default HomePage;
