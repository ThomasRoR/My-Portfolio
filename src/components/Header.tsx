import { useState, useRef } from 'react';
import { Menu } from 'react-feather';

interface LogoIconProps {
  color: string;
}

function LogoIcon({ color }: LogoIconProps) {
  return (
    <svg
      className="w-8 h-8 transition-colors duration-500 ease-out"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      focusable={false}
      style={{ color, transition: 'color 500ms ease-out' }}
    >
      <path
        d="M28.671 1.317c-.465 0-.903.077-1.342.258l-5.058 2.039A15.043 15.043 0 0 0 16.129 2.556c-2.116 0-4.181.361-6.142 1.058L4.929 1.575A3.6 3.6 0 0 0 3.587 1.317C1.6 1.317 0 2.917 0 4.904l.026 12.49v.284C.594 25.085 7.665 30.891 16.103 30.891c8.465 0 15.536-5.806 16.078-13.213v-.284l.025-12.516c.052-1.961-1.548-3.561-3.535-3.561Zm-.568 16.051c-.387 5.265-5.651 9.394-11.974 9.394-6.297 0-11.561-4.129-11.974-9.394L4.129 5.678l4.49 1.832a3.224 3.224 0 0 0 2.607-.348 13.95 13.95 0 0 1 4.877-.478 13.95 13.95 0 0 1 4.903.878 3.224 3.224 0 0 0 2.607-.348l4.49-1.832Z"
        fill="currentColor"
      />
      <path
        d="M8.335 17.678c0-1.425 1.156-2.58 2.581-2.58s2.581 1.155 2.581 2.58-1.156 2.581-2.581 2.581-2.581-1.156-2.581-2.581Z"
        fill="currentColor"
      />
      <path
        d="M18.761 17.678c0-1.425 1.156-2.58 2.581-2.58s2.581 1.155 2.581 2.58-1.156 2.581-2.581 2.581-2.581-1.156-2.581-2.581Z"
        fill="currentColor"
      />
    </svg>
  );
}

interface HeaderProps {
  content: {
    name: string;
    nav: string[];
  };
  currentLang: 'pt' | 'en';
  onLanguageToggle: () => void;
  accentColor: string;
}

export function Header({ content, currentLang, onLanguageToggle, accentColor }: HeaderProps) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const navLinks = [
    { href: '#sobre', label: content.nav[0], color: '#8A2BE2' },
    { href: '#ferramentas', label: content.nav[1], color: '#FF8A3D' },
    { href: '#experiencia', label: content.nav[2], color: '#2ED5C1' },
    { href: '#projetos', label: content.nav[3], color: '#FF9EDC' },
    { href: '#contato', label: content.nav[4], color: '#8A2BE2' },
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
        <a href="#" className="flex items-center gap-3 text-2xl font-bold text-white">
          <LogoIcon color={accentColor} />
          {content.name}
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={handleSmoothScroll} 
              className="text-white transition duration-300"
              onMouseEnter={(e) => e.currentTarget.style.color = link.color}
              onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
            >
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
          <a 
            key={link.href} 
            href={link.href} 
            onClick={handleSmoothScroll} 
            className="block py-2 px-6 text-white hover:bg-gray-900 transition"
            onMouseEnter={(e) => e.currentTarget.style.color = link.color}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
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