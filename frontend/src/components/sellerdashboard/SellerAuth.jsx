import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
// import { clearErrors, login, } from "../../actions/userAction";
import { sellerLogin, sellerRegister, clearErrors } from "../../actions/sellerAction";
// import { useAlert } from "react-alert";
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom";


export default function SellerAuth({}) {
  const dispatch = useDispatch();
  const [err, setErr] = useState(false);

  // const alert = useAlert();
  let history = useNavigate();

  const { error, sellerAuth } = useSelector(
    (state) => state.seller
  );

  const [flag, setFlag] = useState(true);
  const [rseller, setRseller] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [lseller, setLseller] = useState({
    email: "",
    password: "",
  });
  function signupswitchHandler(params) {
    setFlag(!flag);
  }
  const handleChange = e =>{
    const {name,value} = e.target
    setRseller({
    ...rseller,//spread operator 
    [name]: value
    })
    setLseller({
      ...lseller,//spread operator 
      [name]: value
      })
    }
  function registerHandler(e) {
    e.preventDefault();
    const sellerData = { name: rseller.name, email: rseller.email, password: rseller.password}
    dispatch(sellerRegister(sellerData))
  }
  function loginHandler(e) {
    e.preventDefault();
    dispatch(sellerLogin(lseller.email, lseller.password));
  }

  useEffect(()=>{
    if(error){
      console.log(error);
      setErr(true)
      dispatch(clearErrors());
    }
    if (sellerAuth) {
      history('/dashboard/seller');
    }
  },[error,dispatch, history, sellerAuth])
  return (
    <>
    
      {!flag && (
        <div className="pe-sm-0 pe-lg-5">
          <h2 style={{ "fontFamily": "poppins", color: "var(--main-color)" }}>
            Welcome Back!
          </h2>
          <p className="text-muted mb-20">Let's get started</p>
          <Form onSubmit={loginHandler}>
            <Form.Group className="mb-3" >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                id="customer-login-email"
                value={lseller.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" 
              name="password"
              id="customer-login-password"
              value={lseller.password}
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
            >
              Sign In
            </Button>
            {err ? <Alert className="mt-2"  variant="secondary">
          Invalid email or password!
        </Alert> : <></>}
            
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
            Create a seller account
          </h2>
          <p className="text-muted mb-20">Let's get started</p>
          <Form  onSubmit={registerHandler}>
            <Form.Group className="mb-3" >
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                id="customer-register-name"
                name="name"
                value={rseller.name}
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
                value={rseller.email}
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
                value={rseller.password}
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
            >
              Sign Up
            </Button>
            {err ? <Alert className="mt-2"  variant="secondary">
                Invalid email or password!
              </Alert> : <></>}
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
