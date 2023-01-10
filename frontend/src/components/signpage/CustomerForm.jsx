import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios';


export default function CustomerForm(params) {
  const [flag, setFlag] = useState(true);
  const [rcustomer, setRcustomer] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [lcustomer, setLcustomer] = useState({
    email: "",
    password: "",
  });
  function signupswitchHandler(params) {
    setFlag(!flag);
  }
  const handleChange = e =>{
    const {name,value} = e.target
    setRcustomer({
    ...rcustomer,//spread operator 
    [name]: value
    })
    setLcustomer({
      ...lcustomer,//spread operator 
      [name]: value
      })
    }
  function registerHandler(params) {
    axios.post("http://localhost:4000/register", rcustomer )
    .then(res=>console.log(res)).catch(function (error) {
      console.log(error);
    })
  }
  function loginHandler(params) {
    axios.post("http://localhost:4000/login", lcustomer )
    .then(res=>console.log(res)).catch(function (error) {
      console.log(error);
    })
  }
  return (
    <>
      {!flag && (
        <div className="pe-sm-0 pe-lg-5">
          <h2 style={{ "fontFamily": "poppins", color: "var(--main-color)" }}>
            Welcome Back!
          </h2>
          <p className="text-muted mb-20">Let's get started</p>
          <Form action="#">
            <Form.Group className="mb-3" >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                id="customer-login-email"
                value={lcustomer.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" 
              name="password"
              id="customer-login-password"
              value={lcustomer.password}
              onChange={handleChange}
              required />
            </Form.Group>

            <Button
              style={{
                width: "10rem",
                "borderRadius": "0",
                "backgroundImage":
                  "linear-gradient(96.83deg, #174066 6.48%, #00D1FF 162.22%)",
                border: "None",
              }}
              variant="primary"
              
              onClick={loginHandler}
            >
              Sign In
            </Button>
            <p className="mt-3">
              Don't have an account? &nbsp;
              <button
                onClick={signupswitchHandler}
                style={{
                  border: "None",
                  "backgroundColor": "transparent",
                  color: "var(--other-color)",
                  padding: "0",
                }}
              >
                Register here
              </button>
            </p>
          </Form>
        </div>
      )}
      {flag && (
        <div className="pe-sm-0 pe-lg-5">
          <h2 style={{ "fontFamily": "poppins", color: "var(--main-color)" }}>
            Create an account
          </h2>
          <p className="text-muted mb-20">Let's get started</p>
          <Form action= {`/home/${rcustomer.name}`}>
            <Form.Group className="mb-3" >
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                id="customer-register-name"
                name="name"
                value={rcustomer.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                id="customer-register-email"
                value={rcustomer.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Password"
              name="password"
              id="customer-register-password"
                value={rcustomer.password}
                onChange={handleChange}
               required />
            </Form.Group>

            <Button
              style={{
                width: "10rem",
                "borderRadius": "0",
                "backgroundImage":
                  "linear-gradient(96.83deg, #174066 6.48%, #00D1FF 162.22%)",
                border: "None",
              }}
              variant="primary"
              type="submit"
              onClick={registerHandler}
            >
              Sign Up
            </Button>
            <p className="mt-3">
              Already have an account? &nbsp;
              <button
                onClick={signupswitchHandler}
                style={{
                  border: "None",
                  "backgroundColor": "transparent",
                  color: "var(--other-color)",
                  padding: "0",
                }}
              >
                Sign In here
              </button>
            </p>
          </Form>
        </div>
      )}
    </>
  );
}
