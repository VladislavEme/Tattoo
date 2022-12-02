import React from 'react';
import { Header } from '../Header/Header';
import { Hero } from '../Sections/Hero/Hero';
import './App.scss';
import { AboutMe } from '../Sections/AboutMe/AboutMe';
import { MyWorks } from '../Sections/MyWorks/MyWorks';

function App() {
  return (
    <div className='wrapper'>
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
