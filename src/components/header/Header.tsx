import { memo } from "react";

import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Рабочий стол руководителя</h1>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <a className="header__link header__link--active" href="/#">
              Dashboard
            </a>
          </li>
          <li className="header__item">
            <a className="header__link" href="/#">
              Team line up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default memo(Header);
