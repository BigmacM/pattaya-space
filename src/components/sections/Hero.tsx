import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal"
    >
      {/* Parallax Background with decorative elements */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/90 via-charcoal/80 to-charcoal z-10" />

        {/* Decorative grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 173, 181, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 173, 181, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Ambient glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-turquoise/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan/5 rounded-full blur-3xl" />
      </motion.div>

      {/* Broken Grid Content */}
      <motion.div
        className="relative z-20 container-custom px-4"
        style={{ y: textY, opacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Left side - Main content (offset positioning for broken grid) */}
          <div className="lg:col-span-7 lg:col-start-1 relative">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gunmetal/60 backdrop-blur-sm border border-cyan/20 rounded-full">
                <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
                <span className="font-mono text-xs text-cyan uppercase tracking-wider">Now Open</span>
              </span>
            </motion.div>

            {/* Headline - Editorial style */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-silver leading-[0.95] tracking-wide mb-8"
            >
              {headline.split(' ').map((word, i) => (
                <span key={i} className="inline-block">
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
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-sans text-xl md:text-2xl text-silver-300 max-w-xl leading-relaxed mb-10"
            >
              {subheadline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={ctaLink}
                className="btn-primary group"
              >
                {ctaText}
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="/pricing" className="btn-secondary">
                View Pricing
              </a>
            </motion.div>
          </div>

          {/* Right side - Decorative glass card (broken grid offset) */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 3 }}
            animate={{ opacity: 1, x: 0, rotate: 3 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="lg:col-span-5 lg:col-start-8 hidden lg:block relative"
          >
            <div className="glass-card p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-6">
                {/* Hours */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-silver-300 uppercase tracking-wider">Hours</p>
                    <p className="font-sans text-lg text-silver">8 AM - 2 AM Daily</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-silver-300 uppercase tracking-wider">Location</p>
                    <p className="font-sans text-lg text-silver">Central Pattaya</p>
                  </div>
                </div>

                {/* Starting price */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-silver-300 uppercase tracking-wider">Starting from</p>
                    <p className="font-mono text-2xl text-cyan font-bold">฿400/day</p>
                  </div>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -top-2 -right-2 w-16 h-16 border-t-2 border-r-2 border-cyan/30 rounded-tr-2xl" />
              <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-2 border-l-2 border-cyan/30 rounded-bl-2xl" />
            </div>
          </motion.div>
        </div>
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
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-silver-400 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-silver-400 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-cyan rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
