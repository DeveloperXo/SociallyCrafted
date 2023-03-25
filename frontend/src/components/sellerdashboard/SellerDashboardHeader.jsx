import logo from "../../Images/logo.png";
import Stack from "react-bootstrap/Stack";
import "./sellerdashboard.css";
import ProfileIcon from "../../Images/User_fill.png"
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function SellerDashboardHeader(params) {
  return (
        <Stack className="sellerHeader" direction="horizontal" style={{"z-index":10}}>
            <div>
          <img className="logo" src={logo} alt="logo" />
          </div>
          <NavDropdown title={<img src={ProfileIcon} alt="profile icon" />} className="ms-auto" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
        </Stack>
  );
}
