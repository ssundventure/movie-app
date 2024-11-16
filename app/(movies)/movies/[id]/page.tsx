import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieVideos from "../../../../components/movie-videos";
import MovieInfo from "../../../../components/movie-info";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h3>Movie detail Page</h3>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieVideos id={id} />
      </Suspense>
      <h4>Videos</h4>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieInfo id={id} />
      </Suspense>
    </div>
  );
}
