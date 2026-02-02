import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionTitle, AnimateOnScroll } from '../common';

const faqs = [
  {
    question: '¿En qué zonas ofrecen servicio a domicilio?',
    answer: 'Brindamos servicio a domicilio en Rosario y alrededores. Para zonas más alejadas, consultanos y evaluamos la posibilidad según el caso.',
  },
  {
    question: '¿Cuánto tarda una reparación?',
    answer: 'Depende del tipo de problema. Diagnósticos simples pueden resolverse en el momento, mientras que reparaciones más complejas o que requieran repuestos pueden tomar entre 24 y 72 horas. Siempre te mantenemos informado del estado de tu equipo.',
  },
  {
    question: '¿Ofrecen garantía por los trabajos realizados?',
    answer: 'Sí, todos nuestros trabajos tienen garantía. El período varía según el tipo de servicio: reparaciones de software tienen 30 días y reparaciones de hardware entre 30 y 90 días dependiendo del componente.',
  },
  {
    question: '¿Qué medios de pago aceptan?',
    answer: 'Aceptamos efectivo, transferencia bancaria, Mercado Pago y tarjetas de débito/crédito. Para los abonos mensuales, podemos coordinar débito automático.',
  },
  {
    question: '¿Trabajan con empresas y particulares?',
    answer: 'Sí, atendemos tanto a usuarios particulares como a empresas de todos los tamaños. Para empresas ofrecemos planes de abono mensual con soporte continuo y condiciones especiales.',
  },
  {
    question: '¿Cuál es la diferencia entre un servicio puntual y un abono mensual?',
    answer: 'El servicio puntual es ideal para problemas específicos que necesitás resolver una vez. El abono mensual te brinda soporte continuo, mantenimiento preventivo y atención prioritaria, pensado para quienes necesitan que sus equipos funcionen siempre.',
  },
  {
    question: '¿Cómo solicito un presupuesto?',
    answer: 'Podés contactarnos por WhatsApp, completar el formulario de contacto en esta página o enviarnos un email. Te respondemos a la brevedad con un presupuesto sin compromiso.',
  },
  {
    question: '¿Ofrecen soporte remoto?',
    answer: 'Sí, muchos problemas de software pueden resolverse de forma remota. Es más rápido y cómodo para vos. Si el problema requiere intervención física, coordinamos una visita.',
  },
];

const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <AnimateOnScroll animation="fade-up" delay={index * 50}>
      <div className="border-b border-secondary-200 last:border-b-0">
        <button
          onClick={onClick}
          className="w-full py-5 flex items-center justify-between text-left gap-4 cursor-pointer group"
        >
          <span className="font-semibold text-secondary-900 group-hover:text-primary-500 transition-colors duration-200">
            {question}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-secondary-400 flex-shrink-0 transition-transform duration-300 ${
              isOpen ? 'rotate-180 text-primary-500' : ''
            }`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 pb-5' : 'max-h-0'
          }`}
        >
          <p className="text-secondary-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </AnimateOnScroll>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-secondary-50">
      <div className="container-custom">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-2">
              Preguntas Frecuentes
            </h2>
            <p className="text-sm md:text-base text-secondary-400 uppercase font-mono">
              Respuestas a las dudas más comunes
            </p>
          </div>
        </AnimateOnScroll>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
