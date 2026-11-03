import React from 'react';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import AboutMe from '../AboutMe/AboutMe';
import Me from '../AboutMe/Me';
import Education from '../Educations/Education';

const Home = () => {
  return (
    <div className="bg-[#050d1a] min-h-screen">
      <Banner />
      <Me />
      <Skills />
      <Projects />
      <Education />
      <AboutMe />
    </div>
  );
};

export default Home;
