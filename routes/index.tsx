import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "axios";
import { Character } from "../types.ts";
import CharacterList from "../components/CharacterList.tsx";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Character[]>) => {
    try {
      const response = await axios.get<Character[]>(
        `https://hp-api.onrender.com/api/characters`,
      );
      const characters = response.data;
      return ctx.render(characters);
    } catch (error) {
      console.log(error);
      return ctx.render([]);
    }
  },
};

const Page = (props: PageProps<Character[]>) => (
  <CharacterList characters={props.data} />
);

export default Page;
