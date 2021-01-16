import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onLikeButtonClick, onDonate }) {
  
  const toyComponents = toys.map((toy) => 
    <ToyCard key={toy.id} toy={toy} onLike={onLikeButtonClick} onDonate={onDonate} />
  )
  return (
    <div id="toy-collection">
      {toyComponents}
    </div>
  );
}

export default ToyContainer;
