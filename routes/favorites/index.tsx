import { FreshContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET: (req, ctx: FreshContext) => {
    const cookie = req.headers.get("Cookie") ?? "";
    const favCookie = cookie.split("; ").find((c) =>
      c.startsWith("favorites=")
    );

    // If cookie, lookup id and senx on ctx.render
    if (favCookie) {
      const favs = favCookie.split("=")[1];
      return ctx.render(favs);
    }

    return ctx.render();
  },
};

// print if cookies
const Page = () => {
};

export default Page;
