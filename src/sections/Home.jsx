import React from 'react';
import Landingpage from '../assets/home-cover.jpg';


function Home() {
  return (
    <>
      {/* Main Hero Section */}
      <div
        className="relative h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${Landingpage})` }}
      >
        
        {/* Content to overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          
          <h1
            className="text-white font-bold tracking-wide uppercase"
            style={{ fontSize: '10vw' }}
          >
            
            Joel Joshi
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 font-semibold">
            Data Enthusiast, Front End Developer.
          </p>
        </div>

        {/* Gradient Overlay at Bottom */}
        <div
          className="absolute bottom-0 w-full h-32"
          style={{
            background: 'linear-gradient(to bottom, transparent, #1a191d)',
          }}
        ></div>
      </div>

      {/* Next Section */}
    
    </>
  );
}

export default Home;
