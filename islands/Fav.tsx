import { useEffect, useState } from "preact/hooks";
import { Character } from "../types.ts";
import { signal } from "@preact/signals";

export const Fav = ({ id }: { id: string }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleFavButton = () => {
    const cookies = document.cookie.split("; ");
    const favCookies = cookies.find((c) => c.startsWith("favorite="));

    const cookie = `favorite=${id}; HttpOnly; `;
    if (favCookies) {
      // Add the new id to the current cookie!
      document.append(cookie);
    }

    // if no cookie, create it with the id
    document.cookie = `favorite=${id}; HttpOnly; Path=/; expires=`;
  };

  return (
    <div>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setToggle(!toggle);
          handleFavButton();
        }}
      >
        <span class={toggle ? ("star fav") : ("star")}>★</span>
      </button>
    </div>
  );
};

export default Fav;
