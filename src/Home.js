import React, { useState, useContext, useEffect } from "react";

import moviesdata from "./Alldat";

import Service from "./pages/Service";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Jumbotron } from "react-bootstrap";
import Modalmovie from "./Component/AddmovieModal/Modalmovie";
import ListMovie from "./Component/llistmovie/ListMovie";
import SearchContext from "./contexts/search-context";

function Home() {
  const [movies, setMovies] = useState(moviesdata);
  
  const [filteredMovies, setFilteredMovies] = useState(moviesdata);
  console.log(filteredMovies)
  const searchQuery = useContext(SearchContext);

  useEffect(() => {
    // if there is a value for searchQuery which means the user wants to search for a movie
    if (searchQuery !== null && searchQuery !== "") {
      setFilteredMovies((prevFilteredMovies) =>
        prevFilteredMovies.filter((movie) => movie.title.includes(searchQuery))
      );
    } else {
      setFilteredMovies(movies);
    }
  }, [searchQuery, movies]);

  const handleAddMovie = (newMovieData) => {
    const id = Math.random();
    // prevMovie is a   last value  of state first  take last state then do something
    setMovies((prevMovies) => [...prevMovies, { ...newMovieData, id }]);
    setFilteredMovies((prevFilteredMovies) => [
      ...prevFilteredMovies,
      { ...newMovieData, id },
    ]);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <Jumbotron>
              <h1>Hello, Movie app</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                <Modalmovie handleAddMovie={handleAddMovie} />
              </p>
            </Jumbotron>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto auto",
              }}
            >
              {filteredMovies.map((movie, index) => (
                <ListMovie key={index} movie={movie} />
              ))}
              ;
            </div>
          </div>
        </Route>
        <Route
          path="/create/:movieid"
          render={() => <Service moviesdata={movies} />}
        />
      </Switch>
    </Router>
  );
}

export default Home;
