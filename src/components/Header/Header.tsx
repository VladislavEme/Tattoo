import React from "react";
import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#">Обо мне</a>
          </li>
          <li>
            <a href="#">Работы</a>
          </li>
          <li>
            <a href="#">Цены</a>
          </li>
          <li>
            <a href="#">Важное</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
