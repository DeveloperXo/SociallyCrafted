import SellerDashboardHeader from "./SellerDashboardHeader";
import Container from "react-bootstrap/esm/Container";
export default function SellerDashboard(params) {
    const user = JSON.parse(localStorage.getItem('user'))
    let isAdmin = false;
    if(user.role === 'admin'){
        isAdmin = true;
    }
    else{
        isAdmin = false;
    }
    console.log(isAdmin)
    return (
        <>
        <SellerDashboardHeader/>
        <br /><br />
        <br /><br />
        <Container>
        {!isAdmin?<p><b>Unauthorized Access</b></p>: <>Welcome ADMIN</>}
        </Container>
        </>
    )
    
}