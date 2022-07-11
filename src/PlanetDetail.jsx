import React, { useState } from "react";
import useFetch from "./useFetch";

const PlanetDetail = () => {
  const [id, setId] = useState(1);
  const url = `https://swapi.dev/api/planets/${id}/`;
  const { data: planet, isLoading, error } = useFetch(url);

  const fetchNextPlanet = () => {
    setId(id + 1);
  };

  if (isLoading) {
    return <p>loading...</p>;
  } else if (error) {
    return <p>An error has ocurred.</p>;
  } else {
    const { name, climate, gravity, population } = planet;
    return (
      <div>
        <h3>Name: {name}</h3>
        <p>{climate}</p>
        <p>{gravity}</p>
        <p>{population}</p>
        <button onClick={fetchNextPlanet}>Next Planet</button>
      </div>
    );
  }
};

export default PlanetDetail;
