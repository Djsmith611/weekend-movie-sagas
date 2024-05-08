import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const movie = useSelector(store => store.movies.find(movie => movie.id === id));
  const [genres, setGenres] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const genresToSet = dispatch({ type:"GET_DETAILS", payload:id });
    setGenres(genresToSet);
  }, [])

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} />
      <ul>
        {
          genres.map((genre) => (
            <li>
              {genre.name}
            </li>
          ))
        }
      </ul>
      <p>{movie.description}</p>
    </div>
  )
}
