import { useState } from 'react';
import { Send, Mail, MapPin, MessageCircle } from 'lucide-react';
import { SectionTitle, Button } from '../common';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'e94be4d8-ebd0-433c-908f-649fe9ab9f4b',
          subject: `Nuevo contacto de ${formData.name} - ${formData.service}`,
          from_name: 'Sooma Web',
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ loading: false, success: true, error: false });
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus({ loading: false, success: false, error: true });
      }
    } catch {
      setStatus({ loading: false, success: false, error: true });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sooma.works@gmail.com',
      href: 'mailto:sooma.works@gmail.com',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+54 341 721-8169',
      href: 'https://wa.me/543417218169',
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Rosario, Santa Fe',
      href: '#',
    },
  ];

  return (
    <section id="contacto" className="section bg-secondary-50">
      <div className="container-custom">
        <SectionTitle
          title="Contactanos"
          subtitle="¿Tenés un problema con tu equipo? Contanos y te ayudamos a resolverlo"
        />

        <div className="max-w-3xl mx-auto">
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-3 px-4 py-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-2 bg-primary-100 rounded-lg">
                  <item.icon className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-xs text-secondary-500">{item.title}</p>
                  <p className="font-medium text-secondary-900 text-sm">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  placeholder="+54 11 1234-5678"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-2">
                  Servicio requerido
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                >
                  <option value="">Seleccionar servicio</option>
                  <option value="limpieza">Limpieza de Equipos</option>
                  <option value="software">Soluciones en Software</option>
                  <option value="instalacion">Instalación Limpia</option>
                  <option value="backup">Backup de Datos</option>
                  <option value="mantenimiento">Mantenimiento Preventivo</option>
                  <option value="reparacion">Reparación de Hardware</option>
                  <option value="redes">Configuración de Redes</option>
                  <option value="seguridad">Seguridad Informática</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                placeholder="Describí tu problema o consulta..."
              />
            </div>
            <div className="text-center">
              {status.success ? (
                <p className="text-accent-500 font-medium py-3">
                  ¡Gracias por contactarnos! Te responderemos pronto.
                </p>
              ) : status.error ? (
                <p className="text-red-500 font-medium py-3 mb-3">
                  Hubo un error al enviar. Por favor intentá de nuevo.
                </p>
              ) : null}
              <Button type="submit" variant="primary" size="lg" disabled={status.loading}>
                <Send className="w-5 h-5" />
                {status.loading ? 'Enviando...' : 'Enviar Mensaje'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
