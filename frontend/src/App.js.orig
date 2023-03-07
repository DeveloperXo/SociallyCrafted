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

import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, isUserLoggedIn } from './actions/userAction';
// import isLoggedIn from ''

function App() {
  const dispatch = useDispatch();
  const { error, isAuthenticated } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    if(isAuthenticated){
      console.log('Good')
    }
    else{
      console.log('no-auth : ' + error)
      dispatch(isUserLoggedIn())
      dispatch(clearErrors())
    }
  }, [isAuthenticated, error])


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
        <Route path='/dashboard/seller/:id' element={isAuthenticated?<SellerDashboard/>: <SignPage />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
