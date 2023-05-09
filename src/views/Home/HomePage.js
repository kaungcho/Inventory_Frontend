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

  const circleStyles = {
    width   : '980px',
    height  : '980px',
    backgroundColor : '#F9A719',
    position : 'relative',
    borderRadius : "50%",
    zIndex: 1,
    margin: '0 auto',
    top: '-100px'
  }
  const circleTwoStyles = {
    width   : '980px',
    height  : '980px',
    backgroundColor : '#3CA099',
    position : 'relative',
    borderRadius : "50%",
    zIndex: 1,
    margin: '0 auto',
    marginTop : '-250px'
  }
  const circleThreeStyles = {
    width   : '980px',
    height  : '980px',
    backgroundColor : '#F9A719',
    position : 'relative',
    borderRadius : "50%",
    zIndex: 1,
    marginTop : '-280px'
  }
  const goToProducts = {
    width : '100%',
    backgroundColor : '#3CA099',
  }
  const goToProductText = {
     paddingTop : '20px',
     paddingBottom : '10px',
     color : 'white',
     fontWeight : 800
  }
  const arrowIcon = {
    paddingTop : '17px',
    color : 'white',
    fontWeight : 800
  }

  const goToAllProduct = () => {
    navigate('/all-products');
  }

  return (
    <CContainer fluid>
      <CRow className="homepage-row">
        <CCol xs={2} className="homepage-column1">
          <Sitebar /> 
        </CCol>
        <CCol xs={10} className="homepage-column2">
          <Circle circleStyles={circleStyles} />
          <CircleTwo circleStyles={circleTwoStyles} />
        </CCol>
        <CCol xs={12} className="homepage-column3">
          <CircleThree circleStyles={circleThreeStyles} />
        </CCol>
        <CCol xs={12} className="homepage-column4">
          <ComboOffer />
        </CCol>
        <CCol xs={12} style={{ padding : '0',cursor : 'pointer' }} className="homepage-column5" onClick={goToAllProduct}>
          <div className="d-flex justify-content-center" style={goToProducts}>
            <p style={goToProductText}>Go to all Products</p>
            <FontAwesomeIcon icon={faArrowRightLong} style={arrowIcon} />
          </div>
        </CCol>
        <CCol xs={12} className="homepage-column6">
          <GetInTouch />
        </CCol>
        <CCol xs={12} style={{ padding : 0 }} className="homepage-column7">
          <TiktokVideo />
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default HomePage;
