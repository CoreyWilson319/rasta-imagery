// Imports
import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
// Components
import Home from "./components/Home";
import NavbarComp from "./components/NavbarComp";
import About from "./components/About";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";

// Others
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <div>
      <NavbarComp />
      <Route exact path="/" render={(props) => <Home props={props} />} />
      <Route path='/about' render={(props) => <About props={props} />} />
      <Route exact path='/contact' render={(props) => <Contact props={props} />} />
      <Route exact path='/pricing' render={(props) => <Pricing props={props} />} />
    </div>
  );
}

export default App;
