import React from "react";
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CNavGroup,
  CNavItem,
  CSidebarFooter,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sitebar.css";

const Sitebar = (props) => {
  const styles = {
    "--cui-sidebar-width": '300px',
    "--cui-sidebar-bg": "#FFFFFF",
    "--cui-sidebar-nav-link-color": "black",
    "--cui-sidebar-nav-link-hover-color": "#F9A719",
    "--cui-sidebar-color": "black",
    "--cui-sidebar-nav-link-color": "black",
  };
  return (
    <>
      <CSidebar style={styles} className='shadow-lg'>
        <CSidebarBrand>Sidebar Brand</CSidebarBrand>
        <CSidebarNav>
          <CNavItem href="#">About Us</CNavItem>
          <CNavItem href="#">Our Service</CNavItem>
          <CNavGroup toggler="Product">
            <CNavItem href="#">Baole Dessert</CNavItem>
            <CNavItem href="#">Skinlogic</CNavItem>
            <CNavItem href="#">Cheryl & Co</CNavItem>
          </CNavGroup>
          <CNavItem href="#">Contact Us</CNavItem>
        </CSidebarNav>
        <CSidebarFooter>
          <div className="d-flex flex-row">
            <a href="#" className="me-4 login">Login</a>
            <a href="#" className="">Sign Up</a>
          </div>
        </CSidebarFooter>
      </CSidebar>
    </>
  );
};

export default Sitebar;
