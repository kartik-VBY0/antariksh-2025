import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  icon, 
  onClick, 
  className = '',
  ...props 
}) => {
  const variants = {
    primary: 'bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20',
    secondary: 'bg-blue-500/20 backdrop-blur-md border border-blue-400/50 text-blue-100 hover:bg-blue-500/30',
    outline: 'bg-transparent border-2 border-white/50 text-white hover:bg-white/10',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        px-8 py-3 rounded-full font-medium text-sm md:text-base
        transition-all duration-300 
        flex items-center space-x-2 justify-center
        shadow-lg hover:shadow-xl
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      <span>{children}</span>
      {icon && (
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          {icon}
        </motion.span>
      )}
    </motion.button>
  );
};

export default Button;