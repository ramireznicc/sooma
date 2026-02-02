import { ArrowRight } from 'lucide-react';
import logoLight from '../../assets/images/logo-light.svg';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient orbs - animated */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-secondary-600/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent-300/10 rounded-full blur-3xl animate-float-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container-custom relative z-10 w-full px-4">
        <div className="py-12 md:py-20 lg:py-24 flex flex-col items-center">
          {/* Logo Grande */}
          <div className="flex flex-col items-center mb-14 animate-hero-fade-in">
            <img
              src={logoLight}
              alt="Sooma"
              className="h-24 md:h-32 lg:h-40 w-auto animate-logo-glow"
            />
          </div>

          {/* Tagline + Descripción */}
          <div className="max-w-3xl mx-auto text-center mb-12 px-1 md:px-4 animate-hero-fade-in-delay-1">
            <p className="text-lg md:text-2xl lg:text-3xl text-secondary-200 mb-4 tracking-wide font-medium">
              Soporte<span className="mx-2 md:mx-3 text-accent-300">·</span>Mantenimiento<span className="mx-2 md:mx-3 text-accent-300">·</span>Soluciones
            </p>
            <div className="w-full max-w-80 md:max-w-96 lg:max-w-[30rem] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-secondary-300 mb-1">Tecnología que funciona.</p>
            <p className="text-base md:text-lg text-secondary-300">Soporte técnico profesional cuando lo necesitás.</p>
          </div>

          {/* Botones */}
          <div className="flex flex-col gap-4 justify-center items-center animate-hero-fade-in-delay-2">
            <a
              href="#contacto"
              className="btn bg-accent-300 text-secondary-900 hover:bg-accent-400 shadow-lg shadow-accent-300/10 inline-flex items-center justify-center gap-2 font-semibold cursor-pointer transition-all duration-200 hover:brightness-110"
            >
              Solicitar presupuesto
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#servicios"
              className="btn border border-white/20 text-white hover:bg-white/10 hover:border-white/40 inline-flex items-center justify-center backdrop-blur-sm cursor-pointer transition-all duration-200"
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
