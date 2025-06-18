import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "axios";
import { Character } from "../../types.ts";
import CharacterDisplay from "../../components/CharacterDisplay.tsx";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Character>) => {
    const id = ctx.params.id;
    try {
      const response = await axios.get<Character[]>(
        `https://hp-api.onrender.com/api/character/${id}`,
      );
      const character = response.data[0];
      return ctx.render(character);
    } catch (error) {
      console.log(error);
      return ctx.render(undefined);
    }
  },
};

const Page = (props: PageProps<Character>) => (
  <CharacterDisplay character={props.data} />
);

export default Page;
