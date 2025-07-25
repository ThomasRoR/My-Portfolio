import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SplashAnimation } from './components/Animations/SplashAnimation';
import { BackgroundAnimation } from './components/Animations/BackgroundAnimation';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Tools } from './components/sections/Tools';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const fadeInTimer = setTimeout(() => {
        setShowContent(true);
      }, 500); 
      return () => clearTimeout(fadeInTimer);
    }
  }, [loading]);

  return (
    <>
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-100' : 'opacity-0'}`}>
        {loading && <SplashAnimation />}
      </div>
      
      <BackgroundAnimation />
      
      <div className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Header />
        <main className="container mx-auto px-6 pt-24 relative z-10">
          <Hero />
          <About />
          <hr className="border-t border-gray-800 my-10" />
          <Tools />
          <hr className="border-t border-gray-800 my-10" />
          <Experience />
          <hr className="border-t border-gray-800 my-10" />
          <Projects />
          <hr className="border-t border-gray-800 my-10" />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;