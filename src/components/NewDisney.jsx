import React from "react";
import { useSelector } from "react-redux";
import { selectNewDisney } from "../features/movie/movieSlice";
import MoviesContainer from "./MoviesContainer";

const NewDisney = () => {
  const movies = useSelector(selectNewDisney);
  return <MoviesContainer title="New to disney +" data={movies} />;
};

export default NewDisney;
