import React from 'react';
import { Title } from '../Title/Title';
import { Button } from '../Button/Button';
import { Header } from '../Header/Header';
import { Hero } from '../Hero/Hero';
import './App.scss';
import { AboutMe } from '../AboutMe/AboutMe';
import { MyWorks } from '../MyWorks/MyWorks';

function App() {
  return (
    // убрать боди
    <div className="wrapper">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <MyWorks />
      </main>
    </div>
  );
}

export default App;
