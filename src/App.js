// import logo from './logo.svg';
import './App.css';

import HeadMenu from './components/HeadMenu/HeadMenu';
import Header from './components/Header/Header';
import MainMenu from './components/MainMenu/MainMenu';
import Footer from './components/Footer/Footer';

import Home from './components/sitesContent/Home/Home';
import Products from './components/sitesContent/Products/Products';
import AboutUs from './components/sitesContent/AboutUs/AboutUs';
import Contact from './components/sitesContent/Contact/Contact';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <HeadMenu />
        <Header />
        <MainMenu />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
