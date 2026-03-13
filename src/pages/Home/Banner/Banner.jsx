import React from 'react';


const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/qLw9RPSX/DALL-E-2025-03-13-03-47-45-A-digital-abstract-network-visualization-with-interconnected-nodes-and-li.webp)",
      }}>
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <img className='w-96 h-96 mx-auto rounded-full flex justify-center items-center' src="https://avatars.githubusercontent.com/u/160014837?s=400&u=ae238005fd653d2f2ed44f20b50fa244a4614091&v=4" alt="Picture!" />
          <h1 className="my-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-45% via-sky-500 to-65% to-black">Front-End development</h1>
          <p className="mb-2">
            I have a strong passion for technology, especially in web development and innovative tools that enhance user experience and continue learning.
          </p>
          <a
            href="https://drive.google.com/file/d/1QwBDxYmxG-LZRr8oy7w6khI58Wtust_K/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-transparent border-2 border-sky-500 text-xl mt-1 text-white font-bold hover:bg-indigo-400"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;