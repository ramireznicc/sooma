import { useState, useEffect } from 'react';
import { Menu, X, Settings, Users, Mail, Globe, HelpCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Servicios', href: '#servicios', icon: Settings },
    { name: 'Nosotros', href: '#nosotros', icon: Users },
    { name: 'FAQ', href: '#faq', icon: HelpCircle },
    { name: 'Contacto', href: '#contacto', icon: Mail },
    { name: 'Social', href: '#social', icon: Globe },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container-custom">
          <div className="flex items-center justify-center h-20">
            <nav className="flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 px-4 py-2 rounded-full text-secondary-600 font-medium transition-all duration-300 hover:bg-primary-50 hover:text-primary-600"
                >
                  <link.icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <span className="relative">
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu Button (floating) */}
      <button
        className="md:hidden fixed top-5 right-5 z-50 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg text-secondary-700"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-40 flex items-center justify-center transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col gap-6 items-center">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`group flex items-center gap-3 text-2xl text-secondary-700 hover:text-primary-600 font-medium transition-all duration-300 ${
                isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' }}
              onClick={() => setIsMenuOpen(false)}
            >
              <link.icon className="w-6 h-6 text-accent-500 transition-transform duration-300 group-hover:scale-110" />
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
