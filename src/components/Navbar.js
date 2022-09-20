import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import './Navbar.css';
import {Button} from './Button'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

return(
  <>
  <nav className="navbar">
    <div className="navbar-container">
      <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>SMOKEONTHEGRILL</Link>
      <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/menu" className="nav-links" onClick={closeMobileMenu}>
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/reserve" className="nav-links-mobile" onClick={closeMobileMenu}>
              Make a Reservation
            </Link>
          </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Make a Reservation</Button>}
    </div>
  </nav>
  </>
)
}
export default Navbar;