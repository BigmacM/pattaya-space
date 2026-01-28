import { motion } from 'framer-motion';

const stats = [
  { value: '18', label: 'Hours Daily', suffix: 'hrs' },
  { value: '100', label: 'Mbps Internet', suffix: '+' },
  { value: '50', label: 'Workspaces', suffix: '+' },
  { value: '24/7', label: 'Access Available', suffix: '' },
];

export default function StatsBar() {
  return (
    <section className="bg-turquoise py-12 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 45%, rgba(0,173,181,0.3) 45%, rgba(0,173,181,0.3) 55%, transparent 55%),
            linear-gradient(-45deg, transparent 45%, rgba(0,173,181,0.3) 45%, rgba(0,173,181,0.3) 55%, transparent 55%)
          `,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="container-custom relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-mono text-4xl md:text-5xl font-bold text-silver mb-2">
                {stat.value}
                <span className="text-cyan">{stat.suffix}</span>
              </div>
              <div className="font-sans text-silver-300 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
