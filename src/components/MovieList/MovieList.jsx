import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, ImageList, ImageListItem, ImageListItemBar, Button } from '@mui/material'; // Import Material-UI components
import { useNavigate } from 'react-router-dom';

function MovieList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  const handleNavigate = (id) => {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  return (
    <main>
      <Typography variant="h1">MovieList</Typography>
      <ImageList cols={3} gap={16}>
        {movies.map((movie) => (
          <ImageListItem key={movie.id}>
            <img
              src={movie.poster}
              alt={movie.title}
              onClick={() => handleNavigate(movie.id)}
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