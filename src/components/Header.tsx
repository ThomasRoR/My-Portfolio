import { useState, useRef } from 'react';
import { Menu } from 'react-feather';

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#ferramentas', label: 'Ferramentas' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
];

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

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
        <a href="#" className="text-2xl font-bold text-white">Thomas Oliveira</a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={handleSmoothScroll} className="text-white hover:text-purple-custom transition duration-300">
              {link.label}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white focus:outline-none">
          <Menu />
        </button>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        {navLinks.map(link => (
          <a key={link.href} href={link.href} onClick={handleSmoothScroll} className="block py-2 px-6 text-white hover:bg-gray-900">
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}