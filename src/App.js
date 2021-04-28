import React, { useState } from "react";
import Home from "./Home";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import Contact from "./pages/Contact";

import SearchContext from "./contexts/search-context";

import Navbarfirst from "./Layout/Navbarfirst";
import Footer from "./Layout/Footer";


function App() {
  const [searchQuery, setSearchQuery] = useState();

  return (
    <SearchContext.Provider value={searchQuery}>
      <Router>
        <div className="App">
          <Navbarfirst setSearchQuery={setSearchQuery} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            {/* <Route
            path="/create/:movieid"
            render={() => <Service moviesdata={moviesdata} />}
          /> */}
          </Switch>

          <Footer />
        </div>
      </Router>
    </SearchContext.Provider>
  );
}

export default App;
