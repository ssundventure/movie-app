import { API_URL } from "../app/constants";
import infoStyles from "../styles/movie-info.module.css"

export async function getMovie(id: string) {
  //console.log(`Fetching movies: ${Date.now()}`);
  //await new Promise((resolve) => setTimeout(resolve, 3000));
  //throw new error("Error!");
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
  return json;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={infoStyles.container}>
      <img
        src={movie.poster_path}
        className={infoStyles.poster}
        alt={movie.title}
      />
      <div className={infoStyles.info}>
        <h1 className={infoStyles.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
