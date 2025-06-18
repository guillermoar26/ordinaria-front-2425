import { FunctionalComponent } from "preact";

const Header: FunctionalComponent = () => {
  return (
    <div class="header">
      <nav>
        <a href="/" data-current="true" aria-current="page">Todos</a>
        <a href="/favorites">Favoritos</a>
      </nav>
    </div>
  );
};

export default Header;
