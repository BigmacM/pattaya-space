import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import GlowButton from '../animations/GlowButton';

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
}

export default function Hero({ headline, subheadline, ctaText, ctaLink }: HeroProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-walnut-900/80 via-walnut-900/60 to-emerald-900/90 z-10" />

        {/* Background image placeholder - moody restaurant interior */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect fill='%231C1410' width='1200' height='800'/%3E%3Cg opacity='0.3'%3E%3Ccircle cx='200' cy='200' r='100' fill='%23B8860B'/%3E%3Ccircle cx='600' cy='400' r='150' fill='%23B8860B'/%3E%3Ccircle cx='1000' cy='300' r='80' fill='%23B8860B'/%3E%3Ccircle cx='400' cy='600' r='120' fill='%23064E3B'/%3E%3Ccircle cx='900' cy='700' r='90' fill='%23064E3B'/%3E%3C/g%3E%3Ctext x='600' y='400' text-anchor='middle' fill='%23FDF8E7' opacity='0.1' font-size='60' font-family='serif'%3EMoody Interior%3C/text%3E%3C/svg%3E")`,
          }}
        />

        {/* Decorative warm light orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brass-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-brass-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-emerald-600/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-20 container-custom text-center px-4"
        style={{ y: textY, opacity }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-cream-100/10 backdrop-blur-sm border border-cream-100/20 rounded-full text-cream-100 text-sm font-sans">
            <span className="w-2 h-2 bg-brass-400 rounded-full animate-pulse" />
            Now Open in Pattaya
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cream-50 mb-6 leading-tight"
        >
          {headline.split(' ').map((word, i) => (
            <span key={i}>
              {word === 'Fine' || word === 'Dining' ? (
                <span className="text-gradient">{word}</span>
              ) : (
                word
              )}{' '}
            </span>
          ))}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-xl md:text-2xl text-cream-200 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {subheadline}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <GlowButton href={ctaLink}>
            {ctaText}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </GlowButton>
        </motion.div>

        {/* Hours badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 flex items-center justify-center gap-4 text-cream-300"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brass-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-sans text-sm">Open 8 AM - 2 AM Daily</span>
          </div>
          <span className="text-cream-400">•</span>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brass-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-sans text-sm">Central Pattaya</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-cream-300"
        >
          <span className="text-xs font-sans uppercase tracking-widest">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
