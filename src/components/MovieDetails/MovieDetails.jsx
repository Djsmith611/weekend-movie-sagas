import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const movie = useSelector((store) =>
    store.movies.find((item) => item.id === parseInt(id))
  );
  const genres = useSelector((store) => store.activeGenres);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "GET_DETAILS", payload: parseInt(id) });
  }, [dispatch, id]);

  if (!movie) {
    return <div> Loading ...</div>;
  }

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div data-testid="movieDetails">
      <h2>{movie.title}</h2>
      <img src={`/${movie.poster}`} alt={movie.title} />
      <h5>Genres</h5>
      <ul>
        {genres.map((genre) => (
          <li key={genre.name}>{genre.name}</li>
        ))}
      </ul>
      <h5>Description</h5>
      <p>{movie.description}</p>
      <button data-testid="toList" onClick={handleClick}>Home</button>
    </div>
  );
}
