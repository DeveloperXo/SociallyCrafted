import React, { useEffect } from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import SignPage from "./components/signpage/SignPage";
import HomePage from './components/homepage/HomePage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SellerDashboard from './components/sellerdashboard/sellerdashboard';
import ProductPage from './components/productpage/ProductPage';
import SellerPage from './components/sellerpage/SellerPage';
import DetailsPage from './components/detailspage/DetailsPage';
import AllProducts from "./components/allpoductspage/AllProducts"
import ConfirmOrder from './components/confirmorder/ConfirmOrder';
import CreateProduct from './components/sellerdashboard/createProduct/CreateProduct';

import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, isUserLoggedIn } from './actions/userAction';
import UserProfile from './components/profilepage/UserProfile';
import Cart from './components/productpage/Cart';
import { updateCart } from './actions/cartAction';
import { isSellerCheck } from './actions/sellerAction';

function App() {
  const dispatch = useDispatch();
  const { error, isAuthenticated } = useSelector((state) => state.user);
  const { sellerAuth }   = useSelector((state) => state.seller);

  // for user authentication
  useEffect(() => {
    if(!isAuthenticated){
      console.log('Good')
      dispatch(isUserLoggedIn())
      dispatch(clearErrors())
    }
  }, [isAuthenticated, error])

  // updating cart
  useEffect(() => {
    dispatch(updateCart())
  }, [])

  // for seller authentication
  useEffect(() => {
    if(!sellerAuth){
      dispatch(isSellerCheck())
    }
  }, [sellerAuth])

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignPage/>}/>
        <Route path='/home/:id' element={isAuthenticated?<HomePage/>:<SignPage />}/>
        <Route path='/product/:id' element={isAuthenticated?<ProductPage/>: <SignPage />}/>
        <Route path='/products' element={isAuthenticated?<AllProducts/>: <SignPage />}/>
        <Route path='/seller/:id' element={isAuthenticated?<SellerPage/>: <SignPage />}/>
        <Route path='/filldetails' element={isAuthenticated?<DetailsPage/>: <SignPage />}/>
        <Route path='/dashboard/seller' element={sellerAuth? <SellerDashboard/>:<SignPage />}/>
        <Route path='/confirm/order' element={isAuthenticated?<ConfirmOrder/>: <SignPage />}/>
        <Route path='/profile' element={isAuthenticated?<UserProfile/>: <SignPage />}/>
        <Route path='/cart' element={isAuthenticated?<Cart/>: <SignPage />}/>
        <Route path='/dashboard/seller/create-new-product' element={sellerAuth?<CreateProduct />:<SignPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
