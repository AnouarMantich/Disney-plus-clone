import React from "react";
import { useSelector } from "react-redux";
import { selectTrending } from "../features/movie/movieSlice";
import MoviesContainer from "./MoviesContainer";

const Trending = () => {
  const movies = useSelector(selectTrending);
  return <MoviesContainer title="Trending" data={movies} />;
};

export default Trending;
