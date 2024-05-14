import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, ImageList, ImageListItem, ImageListItemBar, Button } from '@mui/material'; // Import Material-UI components
import { useNavigate } from 'react-router-dom';

function MovieList() {
  /* HOOKS */
  const navigate = useNavigate();
  const dispatch = useDispatch();
  /* END HOOKS */

  const movies = useSelector(store => store.movies); // Selecting all movies from Redux

  const handleNavigate = (id) => { // Handles Navigation to a movie's detail page
    navigate(`/details/${id}`);
  }

  useEffect(() => { // Fetches movies on page load
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  return (
    <main>
      <Typography variant="h1">MovieList</Typography>
      <ImageList cols={3} gap={16}>
        {movies.map((movie) => (
          <ImageListItem key={movie.id} data-testid="movieItem">
            <img
              src={movie.poster}
              alt={movie.title}
              onClick={() => handleNavigate(movie.id)}
              data-testid="toDetails"
            />
            <ImageListItemBar
              title={movie.title}
              actionIcon={
                <Button onClick={() => handleNavigate(movie.id)}>Details</Button>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </main>
  );
}

export default MovieList;