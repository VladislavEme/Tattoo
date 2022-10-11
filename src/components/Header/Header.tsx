import React from "react";
import "./Header.scss";

export const Header: React.FC = () => {
  const navItem = ["Обо мне", "Работы", "Цены", "Важное", "Контакты"];
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="nav__list">
          {navItem.map((navItemName, i) => (
            <li className="nav__item" key={i}>
              <a className="nav__link" href="#">
                {navItemName}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
