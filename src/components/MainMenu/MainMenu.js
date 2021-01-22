
import './MainMenu.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const MainMenu = () => {
    return (  
        <div className="mainMenu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/aboutUs">About us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}
 
export default MainMenu;