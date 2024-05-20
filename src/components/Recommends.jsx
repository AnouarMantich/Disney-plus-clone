import React from "react";
import { useSelector } from "react-redux";
import { selectRecommend } from "../features/movie/movieSlice";
import MoviesContainer from "./MoviesContainer";

const Recommends = () => {
  const movies = useSelector(selectRecommend);

  return <MoviesContainer title="Recommended for you" data={movies} />;
};

export default Recommends;
