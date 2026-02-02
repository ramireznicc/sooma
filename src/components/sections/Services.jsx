import {
  Trash2,
  Code,
  Download,
  Database,
  Settings,
  Laptop,
  Wifi,
  ShieldCheck,
  Check,
  Star,
  Mail
} from 'lucide-react';
import { Card, SectionTitle, AnimateOnScroll } from '../common';

const services = [
  {
    icon: Trash2,
    title: 'Limpieza de Equipos',
    description: 'Limpieza profunda de hardware y software. Eliminamos archivos temporales, malware y optimizamos el rendimiento.',
  },
  {
    icon: Code,
    title: 'Soluciones en Software',
    description: 'Desarrollo de software a medida para cubrir las necesidades específicas de tu empresa o negocio.',
  },
  {
    icon: Download,
    title: 'Instalaciones Limpias',
    description: 'Instalación de sistemas operativos desde cero. Windows, Linux o macOS configurados a tu medida.',
  },
  {
    icon: Database,
    title: 'Backup de Datos',
    description: 'Respaldo seguro de toda tu información importante. Protegemos tus archivos, fotos y documentos.',
  },
  {
    icon: Settings,
    title: 'Mantenimiento Preventivo',
    description: 'Servicio regular para mantener tus equipos en óptimas condiciones y prevenir problemas futuros.',
  },
  {
    icon: Laptop,
    title: 'Reparación de Hardware',
    description: 'Diagnóstico y reparación de componentes. Memorias, discos, fuentes de poder y más.',
  },
  {
    icon: Wifi,
    title: 'Configuración de Redes',
    description: 'Instalación y configuración de redes domésticas y empresariales. WiFi, routers y conectividad.',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad Informática',
    description: 'Instalación de antivirus, firewalls y configuración de seguridad para proteger tus datos.',
  },
];

const plans = [
  {
    name: 'Esencial',
    description: 'Para pequeñas empresas o emprendimientos',
    users: '1-10 usuarios',
    featured: false,
    features: [
      '2 horas de soporte remoto mensual',
      '1 visita presencial al mes (hasta 2hs)',
      'Soporte por email/WhatsApp (24-48hs)',
      'Limpieza y mantenimiento preventivo',
      'Asesoramiento general',
    ],
  },
  {
    name: 'Profesional',
    description: 'Para empresas medianas',
    users: '10-30 usuarios',
    featured: true,
    features: [
      '6 horas de soporte remoto mensual',
      '2 visitas presenciales al mes (hasta 3hs c/u)',
      'Soporte prioritario (12-24hs)',
      'Limpieza y mantenimiento preventivo',
      'Gestión de cuentas corporativas',
      'Backup mensual de datos críticos',
      'Capacitación para usuarios',
    ],
  },
  {
    name: 'Empresarial',
    description: 'Para empresas con alta demanda',
    users: '30+ usuarios',
    featured: false,
    features: [
      '15 horas de soporte remoto mensual',
      '4 visitas presenciales al mes (sin límite)',
      'Soporte prioritario 24/7 (4-6hs)',
      'Limpieza y mantenimiento preventivo',
      'Gestión completa de infraestructura IT',
      'Backup semanal automatizado',
      'Monitoreo proactivo de sistemas',
      'Auditoría de seguridad',
      'Capacitación para usuarios',
      'Descuento en equipamiento adicional',
    ],
  },
];

const Services = () => {
  return (
    <section id="servicios" className="section bg-secondary-50">
      <div className="container-custom">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-2">
              Nuestros Servicios
            </h2>
            <p className="text-sm md:text-base text-secondary-400 uppercase font-mono">
              Soluciones completas para tus equipos
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {services.map((service, index) => (
            <AnimateOnScroll
              key={index}
              animation="fade-up"
              delay={index * 100}
              threshold={0.05}
              className="h-full"
            >
              <Card hover={false} className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="p-3 bg-primary-100 rounded-xl w-fit mb-4 group-hover:bg-accent-300 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-secondary-600 text-sm">
                  {service.description}
                </p>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Abonos Mensuales */}
        <div className="mt-20">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-2">
                Abonos Mensuales
              </h2>
              <p className="text-sm md:text-base text-secondary-400 uppercase font-mono">
                Plan de soporte continuo para tu empresa
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 max-w-6xl mx-auto mt-12 lg:pt-6">
            {plans.map((plan, index) => (
              <AnimateOnScroll
                key={index}
                animation="fade-up"
                delay={index * 150}
                threshold={0.05}
                className="h-full"
              >
                <div
                  className={`relative h-full rounded-2xl p-6 md:p-8 transition-all duration-300 select-none flex flex-col ${
                    plan.featured
                      ? 'bg-primary-500 text-white shadow-2xl lg:scale-105 lg:-my-4'
                      : 'bg-white shadow-lg border border-secondary-100 hover:shadow-xl'
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 bg-accent-300 text-secondary-900 text-xs font-bold px-3 py-1 rounded-full">
                        <Star className="w-3 h-3 fill-current" />
                        Más popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-secondary-900'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm mb-1 ${plan.featured ? 'text-primary-100' : 'text-secondary-500'}`}>
                      {plan.description}
                    </p>
                    <p className={`text-sm font-medium ${plan.featured ? 'text-accent-300' : 'text-accent-500'}`}>
                      {plan.users}
                    </p>
                  </div>

                  <ul className="space-y-3 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.featured ? 'text-accent-300' : 'text-accent-500'}`} />
                        <span className={`text-sm ${plan.featured ? 'text-primary-100' : 'text-secondary-600'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <p className={`text-xs text-center mb-3 ${plan.featured ? 'text-primary-200' : 'text-secondary-400'}`}>
                      Solicitá más información
                    </p>
                    <div className="flex gap-3">
                      <a
                        href={`https://wa.me/543417218169?text=${encodeURIComponent(`Hola! Quiero más información sobre el abono ${plan.name}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all duration-200 cursor-pointer bg-[#25D366] text-white hover:bg-[#20BD5A]"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        <span className="hidden sm:inline">WhatsApp</span>
                      </a>
                      <a
                        href={`#contacto?abono=${encodeURIComponent(plan.name)}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const event = new CustomEvent('prefillAbono', { detail: plan.name });
                          window.dispatchEvent(event);
                          document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all duration-200 cursor-pointer ${
                          plan.featured
                            ? 'bg-accent-300 text-secondary-900 hover:bg-accent-400'
                            : 'bg-primary-500 text-white hover:bg-primary-600'
                        }`}
                      >
                        <Mail className="w-4 h-4" />
                        <span className="hidden sm:inline">Email</span>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
