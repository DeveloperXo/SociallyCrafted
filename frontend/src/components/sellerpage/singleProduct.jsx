import React from 'react';
import "./sellerpage.css";
import pimage from "../../Images/pimg.jpg";
const singleProduct = () => {
  return (
    <>
        <div className='sp'>
            <img alt="" src={pimage} className="spimg"></img>
        </div>
    </>
  )
}

export default singleProduct;