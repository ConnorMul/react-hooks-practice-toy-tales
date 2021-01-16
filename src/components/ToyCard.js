import React from "react";

function ToyCard({ toy, onLike, onDonate }) {
  const {id, name, image, likes} = toy
  
  function handleDeleteClick() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        onDonate(toy);
      });
  }

  function handleAddLike() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        likes: toy.likes + 1
      }),
    })
    .then(response => response.json())
    .then(onLike)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleAddLike}>Like {"<3"}</button>
      <button className="del-btn"onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
