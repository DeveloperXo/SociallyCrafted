import logo from "../../Images/logo.png";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import "../homepage/homepage.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import ProfileIcon from "../../Images/User_fill.png"
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartIcon from "../../Images/Bag_alt.png";
import { useState } from "react";
import Cart from "./Cart";

export default function ProductPageHeader(params) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
        <Stack className="HomePageHeader" direction="horizontal" >
            <div>
          <img className="logo" src={logo} alt="logo" />
          </div>
          
          <Button variant="link" className="ms-auto" onClick={handleShow}>
            <img src={CartIcon} alt="cart icon" />
          </Button>
          <Offcanvas show={show} onHide={handleClose} placement="end">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Cart/>
                  </Offcanvas.Body>
                </Offcanvas>
          <NavDropdown title={<img src={ProfileIcon} alt="profile icon" />} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
        </Stack>
    </>
  );
}
