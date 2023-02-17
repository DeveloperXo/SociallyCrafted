import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignPage from "./components/signpage/SignPage";
import HomePage from './components/homepage/HomePage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SellerDashboard from './components/sellerdashboard/sellerdashboard';
import ProductPage from './components/productpage/ProductPage';
import SellerPage from './components/sellerpage/SellerPage';
import DetailsPage from './components/detailspage/DetailsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignPage/>}/>
        <Route path='/home/:id' element={<HomePage/>}/>
        <Route path='/product/:id' element={<ProductPage/>}/>
        <Route path='/seller/:name' element={<SellerPage/>}/>
        <Route path='/filldetails' element={<DetailsPage/>}/>
        <Route path='/dashboard/seller/:id' element={<SellerDashboard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
