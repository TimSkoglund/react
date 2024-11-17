import { useState } from 'react';
import Logo from '../assets/images/logo.svg';
// import Logo-dark from '../assets/images/logo-dark.svg'; <----Funkar inte
import Popup from './Popup';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <header>
      <div className="container">
        <a id="logo" href="index.html">
          <img src={Logo} alt="Silicon Logotype" />
        </a>
        <nav id="main-menu" className="navbar">
          <Link className="nav-link" to="/app.jsx#app-features">
            Features
          </Link>
          <Link className="nav-link" to="/contact">
            Contact {/* Link to the Contact page */}
          </Link>
        </nav>
        <div id="darkmode-toggle-switch" className="btn-toggle-switch">
          <span className="label">Dark mode</span>
          <label htmlFor="darkmode-switch" className="toggle-switch">
            <input id="darkmode-switch" type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>

        <a id="auth-signin" href="#" className="btn-primary">
          <i className="fa-thin fa-user-large"></i>
          <span>Sign in / up</span>
        </a>

        <div className="popup-wrapper">
          <button onClick={handlePopup} className="btn-mobile">
            <i className="fa-regular fa-bars"></i>
          </button>
          
          {/* Conditionally render popup next to the button */}
          {isPopupOpen && <Popup onClose={handlePopup} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
