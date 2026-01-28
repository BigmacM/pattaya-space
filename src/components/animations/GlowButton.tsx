import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import MagneticButton from './MagneticButton';

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export default function GlowButton({
  children,
  href,
  className = '',
  onClick,
}: GlowButtonProps) {
  const ButtonContent = (
    <motion.span
      className={`
        inline-flex items-center justify-center
        px-8 py-4 bg-brass-500 text-cream-50
        font-sans font-semibold text-lg rounded-xl
        relative overflow-hidden cursor-pointer
        ${className}
      `}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 0 40px rgba(184, 134, 11, 0.5)',
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Glow effect background */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-brass-400 to-brass-600 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      {/* Button text */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.span>
  );

  if (href) {
    return (
      <MagneticButton strength={0.2}>
        <a href={href}>{ButtonContent}</a>
      </MagneticButton>
    );
  }

  return (
    <MagneticButton strength={0.2}>
      <button onClick={onClick} type="button">
        {ButtonContent}
      </button>
    </MagneticButton>
  );
}
