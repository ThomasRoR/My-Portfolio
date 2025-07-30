import { useState, useRef } from 'react';
import { Menu } from 'react-feather';

interface HeaderProps {
  content: {
    name: string;
    nav: string[];
  };
  currentLang: 'pt' | 'en';
  onLanguageToggle: () => void;
}

export function Header({ content, currentLang, onLanguageToggle }: HeaderProps) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const navLinks = [
    { href: '#sobre', label: content.nav[0] },
    { href: '#ferramentas', label: content.nav[1] },
    { href: '#experiencia', label: content.nav[2] },
    { href: '#projetos', label: content.nav[3] },
    { href: '#contato', label: content.nav[4] },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if (!targetId) return;

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const headerHeight = headerRef.current?.offsetHeight || 0;
      const targetPosition = targetSection.offsetTop - headerHeight;
      
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header ref={headerRef} className="bg-black-custom/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">{content.name}</a>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={handleSmoothScroll} className="text-white hover:text-purple-custom transition duration-300">
              {link.label}
            </a>
          ))}
          <button 
            onClick={onLanguageToggle} 
            className="border border-white text-white py-1 px-3 rounded hover:bg-white hover:text-black-custom transition-colors duration-300"
          >
            {currentLang === 'pt' ? 'EN' : 'PT-BR'}
          </button>
        </div>
        
        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white focus:outline-none">
          <Menu />
        </button>
      </nav>
      
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        {navLinks.map(link => (
          <a key={link.href} href={link.href} onClick={handleSmoothScroll} className="block py-2 px-6 text-white hover:bg-gray-900">
            {link.label}
          </a>
        ))}
        <div className="py-2 px-6">
          <button 
            onClick={onLanguageToggle} 
            className="w-full border border-white text-white py-1 px-3 rounded hover:bg-white hover:text-black-custom transition-colors duration-300"
          >
            {currentLang === 'pt' ? 'EN' : 'PT-BR'}
          </button>
        </div>
      </div>
    </header>
  );
}