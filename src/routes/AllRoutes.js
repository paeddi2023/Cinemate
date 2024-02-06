import { Routes, Route } from "react-router-dom";
import { MovieDetails, MovieList, Search, PageNotFound } from "../pages";


export const AllRoutes = () => {
    return (
      <div className="dark:bg-darkbg">
        <Routes>
          <Route
            path="/"
            element={
              <MovieList
                apiPath="movie/now_playing?language=de-DE"
                title="Home"
              />
            }
          />
          <Route path="movie/:id" element={<MovieDetails />} />
          <Route
            path="movies/popular"
            element={
              <MovieList
                apiPath="movie/popular?language=de-DE"
                title="Poular"
              />
            }
          />
          <Route
            path="movies/top"
            element={
              <MovieList
                apiPath="movie/top_rated?language=de-DE"
                title="Top Rated"
              />
            }
          />
          <Route
            path="movies/upcoming"
            element={
              <MovieList
                apiPath="movie/upcoming?language=de-DE"
                title="Upcomming"
              />
            }
          />
          <Route
            path="search"
            element={<Search apiPath="search/movie?language=de-DE" />}
          />
          <Route path="*" element={<PageNotFound title="Page Not Found" />} />
        </Routes>
      </div>
    );
}