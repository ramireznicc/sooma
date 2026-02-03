import logoLight from '../../assets/images/logo-light-1.svg';
import logoDark from '../../assets/images/logo-dark-1.svg';

const Logo = ({ className = '', size = 'md', variant = 'dark' }) => {
  const heights = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14',
    xl: 'h-20',
  };

  const logo = variant === 'light' ? logoLight : logoDark;

  return (
    <img
      src={logo}
      alt="Sooma"
      className={`${heights[size]} w-auto ${className}`}
    />
  );
};

export default Logo;
