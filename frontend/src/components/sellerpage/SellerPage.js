// import "../productpage/productPage.css";
import "./sellerpage.css";
import HomePageHeader from "../homepage/HomePageHeader";
import pimage from "../../Images/pimg.jpg";
import SingleProduct from "./singleProduct";
import React from 'react'

function SellerPage() {
  return (
    <>
        <HomePageHeader/><br></br>
            <div className="sellerContainer">
                <div className="upperSide">
                    <div className="left">
                        <h1>crafty_home_decor</h1>
                        <span>Crafty home decoration <br></br>Crafty home decoration things that enhance the beauty of your home.<br></br>Jaipur, Maharashtra.</span>
                        <span className="blueSpan"><sapn className="num">59</sapn> <sapn className="text">Posts</sapn>   <span className="num">600</span><span className="text"> Followers</span></span>
                        <div className="rsbuttons">
                    <button className="bluebutton">Follow</button>
                    <button className="whitebutton">Message</button>
                    </div>
                    </div>
                    <div className="right">
                        <img alt="" src={pimage}></img>
                    </div>
                </div>
                <div className="lowerSide">
                    <SingleProduct/>
                    <SingleProduct/>
                    <SingleProduct/>
                    <SingleProduct/>
                    <SingleProduct/>
                    <SingleProduct/>
                </div>
            </div>
        </>
  )
}

export default SellerPage