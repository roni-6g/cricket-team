import logo from '../../images/cricket-team-logo.png';
import './Header.css'
const Header = () => {
    return (
        <div className="header-area">
            <img src={logo} alt="" />
            <h1>Build Your Awesome Team</h1>
        </div>
    );
};

export default Header;