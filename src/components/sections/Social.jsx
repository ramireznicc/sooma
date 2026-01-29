import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { SectionTitle } from '../common';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'TikTok', icon: null, isFontAwesome: true, href: '#' },
];

const Social = () => {
  return (
    <section id="social" className="section bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Seguinos en nuestras redes sociales"
          subtitle="Mantenete al día con consejos, novedades y contenido sobre tecnología"
        />

        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="flex flex-col items-center gap-3 w-40 p-8 bg-secondary-50 rounded-2xl transition-all duration-300 hover:bg-accent-500 hover:text-white hover:scale-105 hover:shadow-xl"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                {social.isFontAwesome ? (
                  <FontAwesomeIcon icon={faTiktok} className="text-5xl" />
                ) : (
                  <social.icon className="w-12 h-12" />
                )}
              </div>
              <span className="font-semibold text-lg">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;
