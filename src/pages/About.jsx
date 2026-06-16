import React from 'react'
import { motion } from 'framer-motion'
import { Award, Target, Users, Zap } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Unwavering commitment to the highest standards of safety and quality',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Continuous improvement and adoption of cutting-edge fire safety technologies',
    },
    {
      icon: Users,
      title: 'Trust',
      description: 'Building lasting relationships based on reliability and professional integrity',
    },
    {
      icon: Zap,
      title: 'Efficiency',
      description: 'Quick response times and streamlined processes for maximum effectiveness',
    },
  ]

  const timeline = [
    { year: '1989', event: 'Britex Group founded with vision for advanced fire safety' },
    { year: '1995', event: 'First franchise established, expanded to multiple locations' },
    { year: '2005', event: 'ISO certification achieved, industry recognition begins' },
    { year: '2015', event: 'Reached 1000+ clients milestone, major expansion' },
    { year: '2024', event: 'Serving 1500+ clients with latest digital fire safety solutions' },
  ]

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-fire text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Britex</h1>
            <p className="text-xl text-white/80">
              35+ Years of Excellence in Fire Safety Solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-6">Our Story</h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Britex Group of Companies was founded in 1989 with a singular mission: to revolutionize fire safety in Sri Lanka and beyond. What began as a small operation has grown into a trusted name in the industry, serving over 1,500 satisfied clients across diverse sectors.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our journey has been marked by consistent innovation, unwavering quality standards, and an obsessive dedication to protecting lives and property. We didn't just sell fire safety products—we built relationships, earned trust, and became true partners in our clients' safety journey.
            </p>

            <h2 className="text-3xl font-bold text-brand-black mb-4 mt-12">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              To provide advanced, reliable, and innovative fire safety solutions that protect lives, properties, and communities. We strive to be the most trusted fire safety partner by combining cutting-edge technology with exceptional service.
            </p>

            <h2 className="text-3xl font-bold text-brand-black mb-4 mt-12">Our Vision</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              To create a safer world where advanced fire prevention and response systems are accessible to everyone. We envision a future where fire incidents are prevented through smart technology and rapid emergency response.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 md:py-32 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Core Values"
            subtitle="Principles that guide every decision we make"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="card-glow p-8 flex flex-col items-center text-center rounded-2xl bg-white border border-gray-200 shadow-soft hover:shadow-glow-lg transition-all w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-14 h-14 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red mb-4 mx-auto"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <value.icon size={28} />
                </motion.div>
                <h3 className="text-xl font-bold text-brand-black mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Journey"
            subtitle="Key milestones in our 35+ year history"
            centered={true}
          />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-8 items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center font-bold text-lg"
                    whileHover={{ scale: 1.2 }}
                  >
                    {i + 1}
                  </motion.div>
                  {i < timeline.length - 1 && (
                    <div className="w-1 h-20 bg-brand-red/30 mt-2" />
                  )}
                </div>
                <div className="pt-2">
                  <p className="font-bold text-brand-red text-lg">{item.year}</p>
                  <p className="text-gray-700">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-brand-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: '35+', label: 'Years in Business' },
              { number: '1500+', label: 'Satisfied Clients' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <p className="text-5xl font-bold text-brand-red mb-2">{stat.number}</p>
                <p className="text-xl text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Choose Britex?"
            subtitle="What sets us apart from the competition"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ul className="space-y-4">
                {[
                  'ISO certified products and services',
                  'Expert installation and support teams',
                  'Comprehensive maintenance programs',
                  'Advanced digital fire safety solutions',
                  'Quick emergency response times',
                  'Industry-leading customer service',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-brand-red font-bold text-2xl">✓</span>
                    <span className="text-lg text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-fire rounded-3xl p-12 text-white text-center shadow-glow-lg">
                <h3 className="text-3xl font-bold mb-4">Fire Safety You Can Trust</h3>
                <p className="text-lg mb-6">
                  With 35+ years of experience and 1500+ satisfied clients, Britex is your partner in safety.
                </p>
                <button className="bg-white text-brand-red font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all">
                  Get Started Today
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
