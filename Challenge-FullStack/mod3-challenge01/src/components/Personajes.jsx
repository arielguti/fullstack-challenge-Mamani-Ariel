import React, { useState, useEffect } from "react";
import { getCharacters } from "../service";
import Personaje from "./Personaje";

export default function Personajes() {
  const [isLoading, setIsLoading] = useState(false);
  const [charList, setCharList] = useState([]);
  const [character, setCharacter] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getCharacters()
      .then((data) => {
        setCharList(data.results);
        console.log(data.results);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
      <>
        {character ?
            <img className="img-char" src={character} alt="No hay imagen" />        
          : <p className="loading-text">Seleccionar personaje</p>
        }
        {!isLoading ? (
          charList.map(({ id, name, status, species, image }) => (
            <section className="cards">
              <Personaje
              key={id}
              name={name}
              status={status}
              species={species}
              image={image}
              setCharacter={setCharacter}
            />
            </section>          
          ))
        ) : (
          <p className="loading-text">Cargando...</p>
        )}
      </> 
  );
}

//export default Personajes;