import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/language-context';

interface NavbarProps {
  currentPage?: 'home' | 'work' | 'about' | 'contact';
  onNavigate?: (page: 'home' | 'work' | 'about' | 'contact') => void;
}

export function Navbar({ currentPage = 'home', onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const handleNavClick = (page: 'home' | 'work' | 'about' | 'contact') => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: language === 'en' ? 'Home' : 'Beranda', page: 'home' as const },
    { name: language === 'en' ? 'Work' : 'Karya', page: 'work' as const },
    { name: language === 'en' ? 'About' : 'Tentang', page: 'about' as const },
    { name: language === 'en' ? 'Contact' : 'Kontak', page: 'contact' as const },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="font-bold text-xl tracking-tight hover:opacity-70 transition-opacity"
          >
            Panca
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => handleNavClick(link.page)}
                    className={`text-gray-700 hover:text-gray-900 transition-colors relative group ${
                      currentPage === link.page ? 'text-gray-900 font-medium' : ''
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gray-900 transition-all duration-300 ${
                        currentPage === link.page ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Language Toggle */}
            <div className="flex items-center gap-2 text-sm">
              <button
                onClick={() => setLanguage('en')}
                className={`transition-all ${
                  language === 'en' ? 'text-gray-900 font-semibold' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                EN
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => setLanguage('id')}
                className={`transition-all ${
                  language === 'id' ? 'text-gray-900 font-semibold' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                ID
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => handleNavClick(link.page)}
                    className={`block text-gray-700 hover:text-gray-900 transition-colors w-full text-left ${
                      currentPage === link.page ? 'text-gray-900 font-medium' : ''
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 text-sm mt-4 pt-4 border-t border-gray-100">
              <button
                onClick={() => {
                  setLanguage('en');
                  setIsMenuOpen(false);
                }}
                className={`transition-all ${
                  language === 'en' ? 'text-gray-900 font-semibold' : 'text-gray-400'
                }`}
              >
                EN
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => {
                  setLanguage('id');
                  setIsMenuOpen(false);
                }}
                className={`transition-all ${
                  language === 'id' ? 'text-gray-900 font-semibold' : 'text-gray-400'
                }`}
              >
                ID
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}