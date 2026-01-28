import FadeInView from '../animations/FadeInView';
import StaggerContainer, { StaggerItem } from '../animations/StaggerContainer';

interface Highlight {
  title: string;
  description: string;
}

interface AboutProps {
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: Highlight[];
}

export default function About({
  phase,
  title,
  subtitle,
  description,
  highlights,
}: AboutProps) {
  return (
    <section id="about" className="section-padding bg-cream-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brass-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <FadeInView>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-800/10 rounded-full text-emerald-800 text-sm font-sans font-medium mb-6">
              <span className="w-2 h-2 bg-brass-500 rounded-full" />
              {phase}
            </span>
          </FadeInView>

          <FadeInView delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-walnut-900 mb-4">
              {title}
            </h2>
          </FadeInView>

          <FadeInView delay={0.2}>
            <p className="font-serif text-xl md:text-2xl text-brass-600 mb-6">
              {subtitle}
            </p>
          </FadeInView>

          <FadeInView delay={0.3}>
            <p className="font-sans text-lg text-walnut-600 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </FadeInView>
        </div>

        {/* Highlights Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <StaggerItem key={index}>
              <div className="group relative bg-cream-100 rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2">
                {/* Accent corner */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brass-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:bg-brass-500/20 transition-colors duration-500" />
                </div>

                {/* Number */}
                <span className="inline-flex items-center justify-center w-12 h-12 bg-emerald-800 text-cream-50 font-serif text-xl font-bold rounded-xl mb-6">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Content */}
                <h3 className="font-serif text-2xl font-semibold text-walnut-900 mb-4">
                  {highlight.title}
                </h3>
                <p className="font-sans text-walnut-600 leading-relaxed">
                  {highlight.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-brass-400/0 via-brass-400 to-brass-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Feature image placeholder */}
        <FadeInView delay={0.4} className="mt-16 md:mt-20">
          <div className="relative rounded-3xl overflow-hidden shadow-card-hover">
            {/* Image placeholder */}
            <div
              className="aspect-[21/9] bg-walnut-800"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 500'%3E%3Crect fill='%232D221B' width='1200' height='500'/%3E%3Cg opacity='0.2'%3E%3Crect x='50' y='100' width='200' height='300' rx='10' fill='%23B8860B'/%3E%3Crect x='280' y='150' width='150' height='250' rx='10' fill='%23064E3B'/%3E%3Crect x='460' y='80' width='180' height='320' rx='10' fill='%23B8860B'/%3E%3Crect x='670' y='120' width='160' height='280' rx='10' fill='%23064E3B'/%3E%3Crect x='860' y='100' width='200' height='300' rx='10' fill='%23B8860B'/%3E%3C/g%3E%3Ctext x='600' y='260' text-anchor='middle' fill='%23FDF8E7' opacity='0.3' font-size='40' font-family='serif'%3EHigh Ceilings • Warm Lighting • Unique Layout%3C/text%3E%3C/svg%3E")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-walnut-900/60 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="font-sans text-cream-100 text-lg">
                <span className="text-brass-300">Former fine dining space</span> — now your workspace
              </p>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
