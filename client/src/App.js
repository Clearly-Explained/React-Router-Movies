import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route, Link, Switch } from 'react-router-dom';
import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovieList(response.data);
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <div>

        <Switch>
          <Route exact path="/">
            <MovieList movies={movieList} />
          </Route>
          <Route path="/movies/:id">
            <Movie movies={movieList} />
          </Route>

        </Switch>

      </div>
    </div>
  );
}