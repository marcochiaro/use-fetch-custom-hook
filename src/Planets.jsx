import React from "react";
import useFetch from "./useFetch";

const Planets = () => {
  const url = "https://swapi.dev/api/planets/";
  const { data, isLoading, error } = useFetch(url);

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>an error occured</p>;
  }

  return (
    <div>
      {data.map((el) => (
        <p key={el.name}>{el.name}</p>
      ))}
    </div>
  );
};

export default Planets;
