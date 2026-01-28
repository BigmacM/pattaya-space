import { motion } from 'framer-motion';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

interface FeaturedPricingProps {
  title: string;
  subtitle: string;
  tiers: PricingTier[];
}

export default function FeaturedPricing({ title, subtitle, tiers }: FeaturedPricingProps) {
  return (
    <section className="section-padding bg-charcoal relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-sm text-cyan uppercase tracking-wider mb-4"
          >
            // MEMBERSHIPS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg text-silver mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="body-lg max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Pricing Cards - Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                glass-card p-8 relative group
                ${tier.highlighted ? 'border-cyan/50 md:scale-105' : ''}
              `}
            >
              {/* Popular badge */}
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-cyan text-charcoal font-mono text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier name */}
              <h3 className="font-sans text-xl font-semibold text-silver mb-2">
                {tier.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="font-mono text-4xl font-bold text-cyan">
                  ฿{tier.price}
                </span>
                <span className="text-silver-400 font-sans">/{tier.period}</span>
              </div>

              {/* Description */}
              <p className="text-silver-300 font-sans text-sm mb-6">
                {tier.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.slice(0, 4).map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-silver-200 font-sans text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="/contact"
                className={`
                  w-full inline-flex items-center justify-center py-3 rounded-lg font-sans font-semibold transition-all duration-300
                  ${tier.highlighted
                    ? 'bg-cyan text-charcoal hover:bg-cyan-400 hover:shadow-glow'
                    : 'bg-gunmetal text-silver hover:bg-gunmetal-400 border border-white/10'
                  }
                `}
              >
                Get Started
              </a>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="/pricing"
            className="inline-flex items-center gap-2 font-sans text-cyan hover:text-cyan-400 transition-colors"
          >
            View all membership options
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
