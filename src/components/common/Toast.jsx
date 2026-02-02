import { useEffect } from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';

const Toast = ({ message, type = 'success', isVisible, onClose, duration = 4000 }) => {
  useEffect(() => {
    if (isVisible && duration) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const styles = {
    success: {
      bg: 'bg-secondary-900',
      border: 'border-accent-300/30',
      icon: CheckCircle,
      iconColor: 'text-accent-300',
    },
    error: {
      bg: 'bg-secondary-900',
      border: 'border-red-500/30',
      icon: AlertCircle,
      iconColor: 'text-red-400',
    },
  };

  const style = styles[type];
  const Icon = style.icon;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
      <div className={`${style.bg} ${style.border} border rounded-xl shadow-2xl px-5 py-4 flex items-center gap-3 max-w-sm`}>
        <Icon className={`w-5 h-5 ${style.iconColor} flex-shrink-0`} />
        <p className="text-white text-sm font-medium whitespace-pre-line">{message}</p>
        <button
          onClick={onClose}
          className="text-secondary-400 hover:text-white transition-colors ml-2"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
