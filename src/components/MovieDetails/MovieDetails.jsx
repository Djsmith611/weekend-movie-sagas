import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Divider,
  Fab,
  Grid,
  Typography,
} from "@mui/material";
import { usePalette } from "react-palette";
import { useEffect, useState } from "react";
import MovieDetailsEdit from "./MovieDetailsEdit";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import NavigationIcon from "@mui/icons-material/Navigation";


// Displays the details page of a selected movie
export default function MovieDetails() {
  const [isEdit, setIsEdit] = useState(false); // Edit mode state for details edit
  const { id } = useParams(); // id parameter for displaying a single movies details
  const movie = useSelector((store) => // selecting the movie based on parameters
    store.movies.find((item) => item.id === parseInt(id))
  );
  const { // react-palette palette generation based on the movie image ** Very fun!
    data: palette,
    loading: paletteLoading,
    error: paletteError,
  } = usePalette(`/${movie?.poster}`);
  const genres = useSelector((store) => store.activeGenres); // Selecting genres of the actively displayed movie
  const dispatch = useDispatch(); // useDispatch hook
  const navigate = useNavigate(); // useNavigate hook

  useEffect(() => { // Getting movie details on component load
    const movieId = parseInt(id) // Ensuring 'id' is passsed as a number
    dispatch({ type: "GET_DETAILS", payload: movieId });
  }, [dispatch, id]); // using dispatch and id in the dependency array

  /**
   * using Circular progress as a loading screen in case movie is not loaded when component renders
   */
  if (!movie) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // For navigation button to home
  const handleClick = () => {
    navigate("/");
  };

  // For edit mode boolean
  const toggleEdit = () => {
    setIsEdit(!isEdit);
  }


  return (
    <div
      data-testid="movieDetails"
      style={{
        background: palette?.vibrant,
        paddingTop: "10px",
        minHeight: "100vh",
      }}
    >
      <MovieDetailsEdit isEdit={isEdit} toggleEdit={toggleEdit} movie={movie} />
      {/* Edit backdrop will be displayed if Edit mode is toggled */}
      <Typography variant="h2">{movie.title}</Typography>
      <img src={`/${movie.poster}`} alt={movie.title} style={{ height: "50vh" }} />
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        marginY="5px"
        marginBottom="30px"
      >
        {genres.map((genre) => ( // Mapping genres to Chip components under movie poster
          <Grid item xs="auto" key={genre.name}>
            <Chip label={genre.name} />
          </Grid>
        ))}
      </Grid>
      {/* Placed edit button in divider for styling */}
      <Divider>Description<Button variant="text" onClick={toggleEdit}>Edit</Button></Divider>
      <Typography
        variant="body1"
        sx={{
          width: "40%",
          marginX: "auto",
          marginY: "10px",
          textAlign: "left",
          whiteSpace: "pre-wrap",
          textIndent: "50px",
          color: palette?.muted,
          backgroundColor: palette?.darkMuted,
          padding: "10px",
          borderRadius: "10px",
        }}
        gutterBottom
      >
        {movie.description}
      </Typography>
      {/* Using Fab and icon for navigation button to home */}
      <Fab variant="extended" data-testid="toList" onClick={handleClick}>
        <NavigationIcon sx={{ mr: 1 }} />
        Home
      </Fab>
    </div>
  );
}
