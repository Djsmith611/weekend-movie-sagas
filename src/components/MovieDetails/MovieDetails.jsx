
export default function MovieDetails({movie}) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.description}</p>
    </div>
      
  )
}
