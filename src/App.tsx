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

import { translations } from './translations';

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  
  const [language, setLanguage] = useState<'pt' | 'en'>('en');

  const toggleLanguage = () => {
    setLanguage(lang => (lang === 'pt' ? 'en' : 'pt'));
  };
  
  const currentText = translations[language];

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
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {loading && <SplashAnimation />}
      </div>

      <BackgroundAnimation />

      <div className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        
        <Header 
          content={currentText.header} 
          currentLang={language} 
          onLanguageToggle={toggleLanguage} 
        />

        <main className="container mx-auto px-6 pt-24 relative z-10">
          <Hero content={currentText.hero} />
          <About content={currentText.about} />
          <hr className="border-t border-gray-800 my-10" />
          <Tools content={currentText.tools} />
          <hr className="border-t border-gray-800 my-10" />
          <Experience content={currentText.experience} />
          <hr className="border-t border-gray-800 my-10" />
          <Projects content={currentText.projects} />
          <hr className="border-t border-gray-800 my-10" />
          <Contact content={currentText.contact} />
        </main>

        <Footer content={currentText.footer} />
      </div>
    </>
  );
}

export default App;