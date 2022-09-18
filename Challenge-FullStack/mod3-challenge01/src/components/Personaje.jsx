import React from "react";

function Personaje({ name, status, species, image, setCharacter }) {
  return (
    <div className="color-square" onClick={() => setCharacter(image)}>
      <img src={image} alt={name} />
      <p> Nombre: {name}</p>
      <p>Species: {species}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default Personaje;