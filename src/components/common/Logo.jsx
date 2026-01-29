const Logo = ({ className = '', size = 'md', variant = 'dark' }) => {
  const sizes = {
    sm: 'text-3xl',
    md: 'text-4xl',
    lg: 'text-6xl',
    xl: 'text-8xl',
  };

  const iconSizes = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const textColor = variant === 'light' ? 'text-white' : 'text-secondary-900';

  return (
    <span className={`font-logo font-normal leading-none inline-flex items-center gap-0.5 ${sizes[size]} ${className}`}>
      {/* Isotipo */}
      <svg
        className={iconSizes[size]}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="80" r="45" fill="#3e8989" opacity="0.85"/>
        <circle cx="75" cy="130" r="45" fill="#2cda9d" opacity="0.85"/>
        <circle cx="125" cy="130" r="45" fill="#564d65" opacity="0.85"/>
      </svg>
      {/* Texto */}
      <span>
        <span className={textColor}>S</span>
        <span className="text-accent-300">o</span>
        <span className="text-primary-500">o</span>
        <span className={textColor}>ma</span>
      </span>
    </span>
  );
};

export default Logo;
