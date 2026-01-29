import { ShieldCheck, Wrench, Home, UserCheck } from 'lucide-react';
import { SectionTitle } from '../common';

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
        <SectionTitle
          title="¿Por qué elegirnos?"
          subtitle="Soluciones técnicas confiables con trato cercano y profesional"
        />

        <div className="max-w-xl mx-auto flex flex-col gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex gap-5 items-center bg-white rounded-2xl p-5 shadow-lg border border-secondary-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[120px]"
            >
              <div className="flex-shrink-0 p-4 bg-primary-500 rounded-xl">
                <item.icon className="w-8 h-8 text-accent-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-1">{item.title}</h3>
                <p className="text-secondary-600 text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
