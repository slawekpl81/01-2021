import hamburger from '../img/hamburger.png';
import './HeadMenu.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const MenuHead = () => {
    return ( 
        <div className="menuHead">
            <img src={hamburger} alt="hamburger"/>
            <a href="mailto:patrykkrolikowski@testweb.4vps.eu"><i className="top fa fa-envelope mr-2"></i>testmail@mail.com</a>
            <a href="/#"><i className="top fa fa-assistive-listening-systems mr-2"></i>32000-00-00</a>
            <Link to="/cart"><i className="top fa fa-shopping-cart mr-2"></i>Cart</Link>

            <Link to="/login"><i className="top fa fa-user mr-2"></i>Login</Link>
            <Link to="/createaccount"><i className="top fa fa-chevron-right mr-2"></i>Create account</Link>
        </div>
     );
}
 
export default MenuHead;