import logo from "../../Images/logo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import "./homepage.css";
import ProfileIcon from "../../Images/User_fill.png"
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartIcon from "../../Images/Bag_alt.png";
import SearchIcon from "../../Images/Search_alt.png";
import { signOut } from "../../actions/userAction";
// import { useNavigate } from "react-router-dom";

export default function HomePageHeader(params) {
  // let history = useNavigate();
  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   history('/')
  // }
  return (
    <>
        <Stack className="HomePageHeader" direction="horizontal" >
            <div>
          <img className="logo" src={logo} alt="logo" />
          </div>
          <Form.Control
            placeholder="Search for products, brands and more..."
            id = "search-box"
            className="ms-auto"
          />
          <Button variant="outline-light" id = "search-button"><img src={SearchIcon} alt="Search icon" /></Button>
          <Button variant="link" className="ms-auto">
            <img src={CartIcon} alt="cart icon" />
          </Button>
          <NavDropdown title={<img src={ProfileIcon} alt="profile icon" />} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" onClick={signOut}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
        </Stack>
    </>
  );
}
