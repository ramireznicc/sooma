import {
  Trash2,
  Code,
  Download,
  Database,
  Settings,
  Laptop,
  Wifi,
  ShieldCheck
} from 'lucide-react';
import { Card, SectionTitle } from '../common';

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

const Services = () => {
  return (
    <section id="servicios" className="section bg-secondary-50">
      <div className="container-custom">
        <SectionTitle
          title="Nuestros Servicios"
          subtitle="Soluciones completas para mantener tus equipos funcionando perfectamente"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index}>
              <div className="p-3 bg-primary-100 rounded-xl w-fit mb-4">
                <service.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                {service.title}
              </h3>
              <p className="text-secondary-600 text-sm">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
