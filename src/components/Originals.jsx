import React from "react";
import { useSelector } from "react-redux";

import { selectOriginal } from "../features/movie/movieSlice";
import MoviesContainer from "./MoviesContainer";

const Originals = () => {
  const movies = useSelector(selectOriginal);
  return <MoviesContainer title="Originals" data={movies} />;
};

export default Originals;
