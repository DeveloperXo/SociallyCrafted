import logo from '../../Images/logo.png';
import './SignPageHeader.css';

export default function SignPageHeader(){
    return (
        <div className='SignPageHeader'>
            <img src={logo} alt='logo' />
        </div>
    )
}