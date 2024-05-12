import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import MovieDetailsEdit from "./MovieDetailsEdit";
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
import NavigationIcon from "@mui/icons-material/Navigation";
import { usePalette } from "react-palette";

export default function MovieDetails() {
  const [isEdit, setIsEdit] = useState(false);
  const { id } = useParams();
  const movie = useSelector((store) =>
    store.movies.find((item) => item.id === parseInt(id))
  );
  const {
    data: palette,
    loading: paletteLoading,
    error: paletteError,
  } = usePalette(`/${movie?.poster}`);
  const genres = useSelector((store) => store.activeGenres);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "GET_DETAILS", payload: parseInt(id) });
  }, [dispatch, id]);

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

  const handleClick = () => {
    navigate("/");
  };

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
        {genres.map((genre) => (
          <Grid item xs="auto" key={genre.name}>
            <Chip label={genre.name} />
          </Grid>
        ))}
      </Grid>
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
      <Fab variant="extended" data-testid="toList" onClick={handleClick}>
        <NavigationIcon sx={{ mr: 1 }} />
        Home
      </Fab>
    </div>
  );
}
