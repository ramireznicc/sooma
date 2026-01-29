import { Mail, MessageCircle, MapPin } from 'lucide-react';
import { Logo } from '../common';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-10 md:py-12">
        {/* Main Content */}
        <div className="flex flex-col items-center text-center mb-8">
          <a href="#inicio" className="inline-block mb-4">
            <Logo size="lg" variant="light" />
          </a>
          <p className="text-secondary-300 mb-1">Tecnología que funciona.</p>
          <p className="text-secondary-300 mb-6">Soporte técnico profesional cuando lo necesitás.</p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-secondary-300">
            <a href="mailto:sooma.works@gmail.com" className="flex items-center gap-2 hover:text-accent-300 transition-colors">
              <Mail className="w-4 h-4 text-accent-300" />
              <span>sooma.works@gmail.com</span>
            </a>
            <a href="https://wa.me/543417218169" className="flex items-center gap-2 hover:text-accent-300 transition-colors">
              <MessageCircle className="w-4 h-4 text-accent-300" />
              <span>+54 341 721-8169</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent-300" />
              <span>Rosario, Santa Fe</span>
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 pt-6 text-center text-secondary-400 text-sm">
          <p>&copy; {currentYear} Sooma. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
