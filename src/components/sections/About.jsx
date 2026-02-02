import { ShieldCheck, Wrench, Home, UserCheck } from 'lucide-react';
import { SectionTitle, AnimateOnScroll } from '../common';

const items = [
  {
    icon: ShieldCheck,
    title: 'Servicio Integral',
    text: 'Cubrimos todas tus necesidades tecnológicas: desde reparación de hardware hasta configuración de software y soporte continuo.',
  },
  {
    icon: Wrench,
    title: 'Soluciones Completas',
    text: 'Diagnóstico, reparación, mantenimiento y upgrades. Todo lo que tu equipo necesita en un solo lugar.',
  },
  {
    icon: Home,
    title: 'A Domicilio',
    text: 'Nos acercamos a tu casa u oficina en Rosario. Vos no te movés, nosotros nos encargamos.',
  },
  {
    icon: UserCheck,
    title: 'Trato Personalizado',
    text: 'Escuchamos tus necesidades y te explicamos cada paso. Sin tecnicismos, con soluciones claras.',
  },
];

const About = () => {
  return (
    <section id="nosotros" className="section bg-white">
      <div className="container-custom">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-2">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-sm md:text-base text-secondary-400 uppercase font-mono">
              Soluciones técnicas confiables con trato cercano
            </p>
          </div>
        </AnimateOnScroll>

        <div className="max-w-xl mx-auto flex flex-col gap-4">
          {items.map((item, index) => (
            <AnimateOnScroll
              key={index}
              animation={index % 2 === 0 ? 'fade-left' : 'fade-right'}
              delay={index * 100}
            >
              <div className="group flex gap-5 items-center bg-white rounded-2xl p-5 shadow-lg border border-secondary-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[120px] select-none">
                <div className="flex-shrink-0 p-4 bg-primary-500 rounded-xl group-hover:bg-accent-300 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-accent-300 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-1">{item.title}</h3>
                  <p className="text-secondary-600 text-sm">{item.text}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
