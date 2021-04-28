import React, { useState } from "react";
import Home from "./Home";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Navbarfirst from "./Layout/Navbarfirst";
import Footer from "./Layout/Footer";
import moviesdata from "./Alldat";
function App() {


  const  FilterByName = (name)  => {

  }
  return (
    <Router>
      <div className="App">
        <Navbarfirst   FilterByName={FilterByName}   name={moviesdata.title}/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route
            path="/create/:movieid"
         
            render={() => <Service moviesdata={moviesdata}  />}
          />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
