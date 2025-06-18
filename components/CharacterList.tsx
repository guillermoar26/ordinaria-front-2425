import { FunctionalComponent } from "preact";
import { Character } from "../types.ts";
import { Fav } from "../islands/Fav.tsx";

const CharacterList: FunctionalComponent<{ characters: Character[] }> = (
  { characters },
) => {
  return (
    <div class="grid">
      {characters.map((ch) => (
        <div class="card">
          <a href={`/character/${ch.id}`}>
            <img src={ch.image || "no-image.jpg"} alt={ch.name} />
          </a>
          <div class="card-info">
            <a
              class="name"
              href={`/character/${ch.id}`}
            >
              {ch.name}
            </a>
            <Fav id={ch.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
