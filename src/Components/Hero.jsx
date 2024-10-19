// // src/components/Hero.jsx
// import React from 'react';

// const Hero = () => {
//   return (
//     <section className="bg-slate-400 text-white h-screen flex flex-col justify-center items-center">
//       <h1 className="text-5xl font-bold mb-4">Hi, I'm Niru</h1>
//       <p className="text-2xl mb-8">A Web Developer</p>
//       <a href="#projects" className="bg-white text-blue-700 py-2 px-4 rounded-full hover:bg-gray-700 transition">
//         See My Work
//       </a>
//     </section>
//   );
// };

// export default Hero;

// src/components/Hero.jsx
import React from 'react';
import profileImage from '../assets/tina.jpg'; // Import the image

const Hero = () => {
  return (
    <section className="bg-gray-600 text-white h-screen flex flex-col justify-center items-center">
      <img 
        src={profileImage} 
        alt="Profile" 
        className="w-40 h-40 rounded-full mb-8 shadow-lg" // Add Tailwind styles
      />
      <h1 className="text-5xl font-bold mb-4">Hello, I'm Niru</h1>
      <p className="text-2xl mb-8">A Web Developer</p>
      <a href="#projects" className="bg-white text-blue-600 py-2 px-4 rounded-full hover:bg-gray-100 transition">
        See My Work
      </a>
    </section>
  );
};

export default Hero;

