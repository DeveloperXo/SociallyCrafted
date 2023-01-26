import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function SellerForm(params) {
    const [flag, setFlag] = useState(true);

    function signupswitchHandler(params) {
        setFlag(!flag);
    }
    function loginHandler(params) {
        
    }
    function registerHandler(){}

    return(
        <>
        {!flag && (
        <div className="pe-sm-0 pe-lg-5">
          <h2 style={{ "fontFamily": "poppins", color: "var(--main-color)" }}>
            Welcome Back!
          </h2>
          <p className="text-muted mb-20">Let's get started</p>
          <Form action="#" >
            <Form.Group className="mb-3" >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                id="seller-login-email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" 
              name="password"
              id="seller-login-password"
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
          <Form  onSubmit={registerHandler}>
            <Form.Group className="mb-3" >
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                id="seller-register-name"
                name="name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                id="seller-register-email"
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
              id="seller-register-password"
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
    )
}