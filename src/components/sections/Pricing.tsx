import { motion } from 'framer-motion';
import FadeInView from '../animations/FadeInView';
import StaggerContainer, { StaggerItem } from '../animations/StaggerContainer';

interface PricingTier {
  name: string;
  price: string;
  currency: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  startingAt?: boolean;
}

interface PricingProps {
  title: string;
  subtitle: string;
  tiers: PricingTier[];
}

export default function Pricing({ title, subtitle, tiers }: PricingProps) {
  return (
    <section id="pricing" className="section-padding bg-cream-100 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brass-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeInView>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brass-500/10 rounded-full text-brass-600 text-sm font-sans font-medium mb-6">
              <span className="w-2 h-2 bg-brass-500 rounded-full animate-pulse" />
              {subtitle}
            </span>
          </FadeInView>

          <FadeInView delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-walnut-900 mb-4">
              {title}
            </h2>
          </FadeInView>

          <FadeInView delay={0.2}>
            <p className="font-sans text-lg text-walnut-600 max-w-2xl mx-auto">
              Flexible plans for every work style. All memberships include our core amenities.
            </p>
          </FadeInView>
        </div>

        {/* Pricing Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, index) => (
            <StaggerItem key={index}>
              <motion.div
                className={`
                  relative h-full rounded-2xl p-8
                  ${tier.highlighted
                    ? 'bg-gradient-to-br from-emerald-800 to-emerald-900 text-cream-50 shadow-card-hover scale-[1.02] lg:scale-105'
                    : 'bg-cream-50 shadow-card'
                  }
                `}
                whileHover={{
                  scale: tier.highlighted ? 1.07 : 1.03,
                  boxShadow: '0 25px 80px rgba(0, 0, 0, 0.25)',
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Popular badge */}
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 bg-brass-500 text-cream-50 text-sm font-sans font-semibold rounded-full shadow-glow">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Tier name */}
                <h3 className={`font-serif text-2xl font-semibold mb-2 ${tier.highlighted ? 'text-cream-50' : 'text-walnut-900'}`}>
                  {tier.name}
                </h3>

                {/* Description */}
                <p className={`font-sans text-sm mb-6 ${tier.highlighted ? 'text-cream-200' : 'text-walnut-500'}`}>
                  {tier.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    {tier.startingAt && (
                      <span className={`text-sm ${tier.highlighted ? 'text-cream-300' : 'text-walnut-500'}`}>
                        Starting at
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className={`font-serif text-5xl font-bold ${tier.highlighted ? 'text-brass-300' : 'text-brass-500'}`}>
                      {tier.price}
                    </span>
                    <div className="flex flex-col">
                      <span className={`text-sm ${tier.highlighted ? 'text-cream-200' : 'text-walnut-600'}`}>
                        {tier.currency}
                      </span>
                      <span className={`text-sm ${tier.highlighted ? 'text-cream-300' : 'text-walnut-500'}`}>
                        /{tier.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${tier.highlighted ? 'text-brass-300' : 'text-emerald-600'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`font-sans text-sm ${tier.highlighted ? 'text-cream-100' : 'text-walnut-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`
                    block w-full py-4 px-6 text-center font-sans font-semibold rounded-xl
                    transition-all duration-300
                    ${tier.highlighted
                      ? 'bg-brass-500 text-cream-50 hover:bg-brass-400 hover:shadow-glow'
                      : 'bg-emerald-800 text-cream-50 hover:bg-emerald-700'
                    }
                  `}
                >
                  Get Started
                </a>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom note */}
        <FadeInView delay={0.5} className="text-center mt-12">
          <p className="font-sans text-walnut-500">
            All prices in Thai Baht (THB). Monthly memberships require minimum 1-month commitment.
          </p>
        </FadeInView>
      </div>
    </section>
  );
}
