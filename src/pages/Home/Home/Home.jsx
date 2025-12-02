import React from 'react';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';
import Education from '../Educations/Education';
import Skills from '../Skills/Skills';
import AboutMe from '../AboutMe/AboutMe';
import { Snowfall } from 'react-snowfall';
import Me from '../AboutMe/Me';

const Home = () => {
    
    return (
        <div>
             {/* Snow effect */}
      <Snowfall 
        snowflakeCount={120} 
        style={{ position: "fixed", width: "100vw", height: "100vh", zIndex: 1 }}
      />
            <Banner></Banner>
            <Me></Me>
            <Skills></Skills>
            <Projects></Projects>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;