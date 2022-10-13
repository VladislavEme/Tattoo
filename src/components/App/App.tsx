import React from "react";
import { AboutMe } from "../AboutMe/AboutMe";
import { Button } from "../Button/Button";
import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";
import "./App.scss";

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
