import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeInView from '../animations/FadeInView';
import GlowButton from '../animations/GlowButton';

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  googleMapsLink: string;
}

interface ContactProps {
  title: string;
  subtitle: string;
  contactMessage: string;
  businessInfo: ContactInfo;
  mapEmbedUrl: string;
}

export default function Contact({
  title,
  subtitle,
  contactMessage,
  businessInfo,
  mapEmbedUrl,
}: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', interest: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-cream-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-800/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brass-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeInView>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-walnut-900 mb-4">
              {title}
            </h2>
          </FadeInView>

          <FadeInView delay={0.1}>
            <p className="font-sans text-xl text-brass-600 mb-4">
              {subtitle}
            </p>
          </FadeInView>

          <FadeInView delay={0.2}>
            <p className="font-sans text-walnut-600 max-w-2xl mx-auto">
              {contactMessage}
            </p>
          </FadeInView>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <FadeInView direction="left" delay={0.3}>
            <div className="bg-cream-100 rounded-3xl p-8 md:p-10 shadow-card">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-emerald-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-walnut-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="font-sans text-walnut-600">
                    We'll be in touch within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-sans text-sm font-medium text-walnut-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cream-50 border border-cream-300 rounded-xl font-sans text-walnut-800 placeholder-walnut-400 focus:outline-none focus:ring-2 focus:ring-brass-400 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-sans text-sm font-medium text-walnut-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cream-50 border border-cream-300 rounded-xl font-sans text-walnut-800 placeholder-walnut-400 focus:outline-none focus:ring-2 focus:ring-brass-400 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block font-sans text-sm font-medium text-walnut-700 mb-2">
                      I'm Interested In
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cream-50 border border-cream-300 rounded-xl font-sans text-walnut-800 focus:outline-none focus:ring-2 focus:ring-brass-400 focus:border-transparent transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select an option</option>
                      <option value="day-pass">Day Pass</option>
                      <option value="hot-desk">Hot Desk Membership</option>
                      <option value="dedicated">Dedicated Desk</option>
                      <option value="virtual">Virtual Office</option>
                      <option value="private">Private Office</option>
                      <option value="tour">Just a Tour</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-sans text-sm font-medium text-walnut-700 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-cream-50 border border-cream-300 rounded-xl font-sans text-walnut-800 placeholder-walnut-400 focus:outline-none focus:ring-2 focus:ring-brass-400 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  <GlowButton className="w-full">
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Inquiry'
                    )}
                  </GlowButton>
                </form>
              )}
            </div>
          </FadeInView>

          {/* Contact Info & Map */}
          <FadeInView direction="right" delay={0.4}>
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <a
                  href={`tel:${businessInfo.phone.replace(/\s/g, '')}`}
                  className="group bg-cream-100 rounded-2xl p-6 hover:bg-cream-200 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-brass-500/20 rounded-xl flex items-center justify-center mb-4 text-brass-600 group-hover:bg-brass-500 group-hover:text-cream-50 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <p className="font-sans text-sm text-walnut-500 mb-1">Call us</p>
                  <p className="font-sans font-semibold text-walnut-900">{businessInfo.phone}</p>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="group bg-cream-100 rounded-2xl p-6 hover:bg-cream-200 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-brass-500/20 rounded-xl flex items-center justify-center mb-4 text-brass-600 group-hover:bg-brass-500 group-hover:text-cream-50 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="font-sans text-sm text-walnut-500 mb-1">Email us</p>
                  <p className="font-sans font-semibold text-walnut-900 break-all">{businessInfo.email}</p>
                </a>
              </div>

              {/* Address */}
              <a
                href={businessInfo.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-cream-100 rounded-2xl p-6 hover:bg-cream-200 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brass-500/20 rounded-xl flex items-center justify-center flex-shrink-0 text-brass-600 group-hover:bg-brass-500 group-hover:text-cream-50 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans text-sm text-walnut-500 mb-1">Visit us</p>
                    <p className="font-sans font-semibold text-walnut-900 mb-2">{businessInfo.address}</p>
                    <span className="inline-flex items-center gap-1 text-brass-600 font-sans text-sm group-hover:text-brass-700">
                      Get Directions
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-card h-64 md:h-80">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pattaya Space Location"
                />
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
