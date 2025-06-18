import { PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";

const Layout = ({ Component }: PageProps) => {
  return (
    <div>
      <Header />
      <div>
        <Component />
      </div>
    </div>
  );
};

export default Layout;
