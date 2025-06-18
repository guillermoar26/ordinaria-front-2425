import { FunctionalComponent } from "preact";
import { Character } from "../types.ts";

const CharacterDisplay: FunctionalComponent<{ character: Character }> = (
  { character },
) => {
  return (
    <>
      {character === undefined
        ? (
          <div class="detail">
            <h1>404 - Page not found</h1>
            <a href="/" data-ancestors="true" aria-current="true">Volver</a>
          </div>
        )
        : (
          <div class="detail">
            <img
              src={character.image || "../no-image.jpg"}
              alt={character.name}
            />
            <h2>
              {character.name}
              <span class="star">★</span>
            </h2>
            <p>Casa: {character.house || "Desconocida"}</p>
            <p>{character.alive ? ("Vivo") : ("Muerto")}</p>
            <a href="/" data-ancestor="true" aria-current="true">Volver</a>
          </div>
        )}
    </>
  );
};

export default CharacterDisplay;
