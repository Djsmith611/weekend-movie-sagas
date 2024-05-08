import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

export default function MovieDetails({movie}) {
  const genres = useSelector(store => store.activeGenres);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({ type:"GET_DETAILS", payload:movie.id });
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
