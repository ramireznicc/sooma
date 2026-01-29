import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="py-12 md:py-20 lg:py-24">
          {/* Logo Grande (Isotipo + Sooma) */}
          <div className="flex flex-col items-center mb-14">
            <svg
              className="w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 -mb-10"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="100" cy="80" r="45" fill="#3e8989" opacity="0.85"/>
              <circle cx="75" cy="130" r="45" fill="#2cda9d" opacity="0.85"/>
              <circle cx="125" cy="130" r="45" fill="#564d65" opacity="0.85"/>
            </svg>
            <span className="font-logo text-8xl md:text-[10rem] lg:text-[11rem] leading-none">
              <span className="text-white">S</span>
              <span className="text-accent-300">o</span>
              <span className="text-primary-300">o</span>
              <span className="text-white">ma</span>
            </span>
          </div>

          {/* Tagline + Descripción */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xl md:text-2xl lg:text-3xl text-primary-100 mb-4 tracking-wide font-medium">
              Soporte<span className="mx-3 text-accent-300">·</span>Mantenimiento<span className="mx-3 text-accent-300">·</span>Soluciones
            </p>
            <div className="w-80 md:w-96 lg:w-[30rem] h-px bg-white/30 mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-primary-200 mb-1">Tecnología que funciona.</p>
            <p className="text-base md:text-lg text-primary-200">Soporte técnico profesional cuando lo necesitás.</p>
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="btn bg-accent-300 text-primary-900 hover:bg-accent-400 shadow-xl inline-flex items-center justify-center gap-2 font-semibold"
            >
              Solicitar presupuesto
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#servicios"
              className="btn border-2 border-white/30 text-white hover:bg-white/10 inline-flex items-center justify-center"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
