import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProductDetails} from "../../actions/productAction";
import HomePageHeader from "../homepage/HomePageHeader";
import "./productPage.css";
import pimage from "../../Images/pimg.jpg";

import { useParams } from 'react-router-dom';

export default function ProductPage(){
    const { id } = useParams();
    
    const dispatch = useDispatch();
    const {product} = useSelector(
        (state) => state.productDetails
      );

    console.log(product);
    useEffect(() => {
        dispatch(getProductDetails(id));
      }, [dispatch, id]);

    console.log(product)
    return(
        <>
        <HomePageHeader/>
        <br></br>
            <div className="productContainer">
                <div className="leftSide">
                    <img alt="" src={pimage}></img>
                    <hr></hr>
                </div>
                <div className="rightSide">
                    <h2>Rustic Wall Hanging Jars with LED lights Handmade Wall Art Hanging design Set of Two</h2>
                    <span>@crafty_home_decor</span>
                    <h4 className="price">$599</h4>
                    <hr></hr>
                    <div className="rsbuttons">
                    <button className="bluebutton">Buy Now</button>
                    <button className="whitebutton">Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}