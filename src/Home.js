import React, { useState } from "react";

import moviesdata from "./Alldat";

import { Jumbotron } from "react-bootstrap";
import Modalmovie from "./Component/AddmovieModal/Modalmovie";
import ListMovie from "./Component/llistmovie/ListMovie";
import Rate from "./Component/Rating/Rating";
import Navbarfirst from "./Layout/Navbarfirst";
function Home() {
  const [moviesall, setMoviesall] = useState(moviesdata);

  const handleAddMovie = (newMovieData) => {
    // prevMovie is a   last value  of state first  take last state then do something 
    setMoviesall((prevMovies) => [
      ...prevMovies,
      { ...newMovieData, id:Math.random()  },
    ]);
  };

  console.log(moviesall)
 

  const allmovies = moviesall.map(function (movie, index) {
    return <ListMovie key={index} movie={movie} />;
  });
  return (
    <div>
      <Jumbotron>
        <h1>Hello, Movie app</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Modalmovie handleAddMovie={handleAddMovie} />
        </p>
       
     
      </Jumbotron>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto"
        }}
      >
        {allmovies}
      </div>
    </div>
  );
}

export default Home;
