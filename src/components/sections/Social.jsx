import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { SectionTitle, AnimateOnScroll } from '../common';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/sooma.works' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'TikTok', icon: null, isFontAwesome: true, href: '#' },
];

const Social = () => {
  return (
    <section id="social" className="section bg-secondary-50">
      <div className="container-custom">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-2">
              Seguinos en redes
            </h2>
            <p className="text-sm md:text-base text-secondary-400 uppercase font-mono">
              Consejos, novedades y contenido tech
            </p>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((social, index) => (
            <AnimateOnScroll
              key={index}
              animation="scale"
              delay={index * 100}
            >
              <a
                href={social.href}
                className="flex flex-col items-center gap-3 w-40 p-8 bg-white rounded-2xl shadow-md border border-secondary-100 transition-all duration-300 hover:bg-accent-500 hover:text-white hover:scale-105 hover:shadow-xl hover:border-accent-500"
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
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;
