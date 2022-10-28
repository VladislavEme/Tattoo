import React from "react";
import { Title } from "../Title/Title";
import { Button } from "../Button/Button";
import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";
import "./App.scss";
import { AboutMe } from "../AboutMe/AboutMe";

function App() {
  return (
    <body className="body">
      <Header />
      <main>
        <Hero />
        <AboutMe />
      </main>
    </body>
  );
}

export default App;
