const Card = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`
        bg-white rounded-2xl p-6 shadow-lg border border-secondary-100 h-full select-none
        ${hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
