// import React from 'react';
// import Header from './components/Header.jsx';
// import Projects from './components/Project.jsx';
// import About from './Components/About.jsx';
// import Contact from './components/Contact.jsx';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <main>
//         <About />
//         <Projects />
//         <Contact />
//       </main>
//     </div>
//   );
// }

// export default App;

// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Project';
import Footer from './components/Footer';
import Contact from './components/Contact';


const App = () => {
  return (
    <div className="font-sans antialiased text-gray-700">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact/>
      </main>
      <Footer />
    </div>
  );
};

export default App;
