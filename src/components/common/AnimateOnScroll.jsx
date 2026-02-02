import { useScrollAnimation } from '../../hooks';

const AnimateOnScroll = ({
  children,
  animation = 'fade-up',
  className = '',
  delay = 0,
  threshold = 0.1
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold });

  const animationClasses = {
    'fade-up': 'animate-fade-up',
    'fade-left': 'animate-fade-left',
    'fade-right': 'animate-fade-right',
    'scale': 'animate-scale',
    'default': 'animate-on-scroll',
    'stagger': 'stagger-children',
  };

  const animationClass = animationClasses[animation] || animationClasses.default;

  return (
    <div
      ref={ref}
      className={`${animationClass} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
