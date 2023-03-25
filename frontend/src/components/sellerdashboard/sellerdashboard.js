import SellerDashboardHeader from "./SellerDashboardHeader";
import Container from "react-bootstrap/esm/Container";
import SellerAuth from "./SellerAuth";
import { useSelector } from "react-redux";
import { isSellerCheck } from "../../actions/sellerAction";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Totals from "./Totals";
import Revenue from "./Revenue";
import TopProducts from "./TopProducts";
export default function SellerDashboard(params) {
    const dispatch = useDispatch();
    const seller = JSON.parse(localStorage.getItem('seller'))
    const { error, sellerAuth } = useSelector((state) => state.seller);
    console.log('sellerAuth',sellerAuth, seller)
    useEffect(() => {
        if(sellerAuth){
            console.log('Good - Seller Dashboard')
        }
        else{
            dispatch(isSellerCheck)
        }
    }, [sellerAuth])
    return ( 
        <>
        <SellerDashboardHeader/>
        <br /><br />
        <br /><br />
        <Container> 
        {!sellerAuth?<SellerAuth />: <></>}
        <Totals/>
        <Revenue/>
        <TopProducts/>
        </Container>
        </>
    )
    
}