import logo from "../../Images/logo.png";
import Stack from "react-bootstrap/Stack";
import "../sellerdashboard/sellerdashboard.css";

export default function DetailsHeader(options) {
    return (
        <>
        <Stack className="sellerHeader" direction="horizontal" >
            <div>
          <img className="logo" src={logo} alt="logo" />
          </div>
        </Stack>
    </>
    )
}