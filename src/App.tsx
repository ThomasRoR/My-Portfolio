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

const SECTION_COLOR_MAP: Record<string, string> = {
  hero: '#8A2BE2',
  sobre: '#8A2BE2',
  ferramentas: '#FF8A3D',
  experiencia: '#2ED5C1',
  projetos: '#FF9EDC',
  contato: '#8A2BE2',
};

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState(SECTION_COLOR_MAP.hero);
  
  const [language, setLanguage] = useState<'pt' | 'en'>('en');

  const toggleLanguage = () => {
    setLanguage(lang => (lang === 'pt' ? 'en' : 'pt'));
  };
  
  const currentText = translations[language];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const fadeInTimer = setTimeout(() => {
        setShowContent(true);
      }, 250);
      return () => clearTimeout(fadeInTimer);
    }
  }, [loading]);

  useEffect(() => {
    if (!loading) {
      const removalTimer = setTimeout(() => {
        setShowSplash(false);
      }, 500);
      return () => clearTimeout(removalTimer);
    }
  }, [loading]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const sectionIds = Object.keys(SECTION_COLOR_MAP);

    const determineActiveSection = () => {
      const viewportMiddle = window.innerHeight / 2;
      let closestSectionId = 'hero';
      let closestDistance = Number.POSITIVE_INFINITY;

      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (!element) {
          return;
        }

        const rect = element.getBoundingClientRect();
        const sectionMiddle = rect.top + rect.height / 2;
        const distance = Math.abs(sectionMiddle - viewportMiddle);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSectionId = id;
        }
      });

      const newColor = SECTION_COLOR_MAP[closestSectionId] ?? SECTION_COLOR_MAP.hero;
      setBackgroundColor(prev => (prev === newColor ? prev : newColor));
    };

    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        determineActiveSection();
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    determineActiveSection();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <>
      {showSplash && <SplashAnimation isVisible={loading} />}

      <BackgroundAnimation color={backgroundColor} />

      <div className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        
        <Header 
          content={currentText.header} 
          currentLang={language} 
          onLanguageToggle={toggleLanguage} 
          accentColor={backgroundColor}
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