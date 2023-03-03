import logo from "../../Images/logo.png";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import "../homepage/homepage.css";
import ProfileIcon from "../../Images/User_fill.png"
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartIcon from "../../Images/Bag_alt.png";
export default function ProductPageHeader(params) {
  return (
    <>
        <Stack className="HomePageHeader" direction="horizontal" >
            <div>
          <img className="logo" src={logo} alt="logo" />
          </div>
          
          <Button variant="link" className="ms-auto">
            <img src={CartIcon} alt="cart icon" />
          </Button>
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
