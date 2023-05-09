import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavLink,
} from "@coreui/react";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CNavbar expand="lg" colorScheme="light" className="bg-light shadow p-3">
        <CContainer fluid>
          <CNavbarBrand href="#">TENCES ECommerce Logo</CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav component="nav">
              <CNavLink href="#" className="px-4" active>
                About Us
              </CNavLink>
              <CNavLink href="#" className="px-4">
                Our Services
              </CNavLink>
              <CNavLink href="#" className="px-4">
                Products
              </CNavLink>
              <CNavLink href="#" className="px-4">
                Contact Us
              </CNavLink>
            </CNavbarNav>
            <CNavbarNav component="nav" className="navbar-nav-2">
              <CNavLink href="#" className="px-4">
                Login
                </CNavLink>
                <CNavLink href="#" className="px-4">
                Sign Up
                </CNavLink>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
};

export default Navbar;
