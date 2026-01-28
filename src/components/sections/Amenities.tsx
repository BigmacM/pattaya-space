import { motion } from 'framer-motion';
import FadeInView from '../animations/FadeInView';
import StaggerContainer, { StaggerItem } from '../animations/StaggerContainer';

interface Amenity {
  icon: string;
  title: string;
  description: string;
}

interface AmenitiesProps {
  title: string;
  subtitle: string;
  items: Amenity[];
}

const IconMap: Record<string, JSX.Element> = {
  wifi: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
  ),
  clock: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  users: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  coffee: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 11h1a3 3 0 010 6h-1m-9-3a3 3 0 006 0" />
    </svg>
  ),
  chair: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  lightning: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
};

export default function Amenities({ title, subtitle, items }: AmenitiesProps) {
  return (
    <section id="amenities" className="section-padding bg-emerald-900 text-cream-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brass-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/20 rounded-full blur-3xl" />
      </div>

      {/* Wave divider top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 80V40C240 60 480 80 720 60C960 40 1200 0 1440 20V80H0Z" fill="#FAF0D4" />
        </svg>
      </div>

      <div className="container-custom relative pt-8">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeInView>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {title}
            </h2>
          </FadeInView>

          <FadeInView delay={0.1}>
            <p className="font-sans text-xl text-cream-200 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </FadeInView>
        </div>

        {/* Amenities Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="group relative bg-cream-50/5 backdrop-blur-sm border border-cream-100/10 rounded-2xl p-8 hover:bg-cream-50/10 transition-all duration-500"
                whileHover={{ y: -8 }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-brass-500/20 rounded-2xl flex items-center justify-center mb-6 text-brass-400 group-hover:bg-brass-500/30 group-hover:text-brass-300 transition-all duration-500">
                  {IconMap[item.icon] || IconMap.lightning}
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl font-semibold text-cream-50 mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-cream-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-brass-400/0 via-brass-400 to-brass-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Additional features */}
        <FadeInView delay={0.4} className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-4 md:gap-8">
            {['Air Conditioning', 'Lockers', 'Print & Scan', 'Phone Booths', 'Kitchen Access'].map((feature, index) => (
              <span
                key={index}
                className="flex items-center gap-2 text-cream-300 font-sans"
              >
                <svg className="w-4 h-4 text-brass-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </span>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
