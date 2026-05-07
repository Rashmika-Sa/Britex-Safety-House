import React from 'react'
import { motion } from 'framer-motion'
import { Wrench, BookOpen, Zap, Shield } from 'lucide-react'
import ServiceCard from '../components/ServiceCard'
import SectionHeader from '../components/SectionHeader'

export default function Services() {
  const services = [
    {
      icon: BookOpen,
      title: 'Fire Safety Training',
      description:
        'Comprehensive training programs for employees on fire prevention, evacuation procedures, and emergency response protocols. Certified instructors and hands-on practical sessions.',
    },
    {
      icon: Wrench,
      title: 'Installation Services',
      description:
        'Professional installation of all fire safety systems by certified technicians. Includes assessment, planning, setup, and compliance verification.',
    },
    {
      icon: Zap,
      title: 'Maintenance Services',
      description:
        'Regular maintenance and inspection of all fire safety equipment. Ensuring compliance with safety standards and optimal performance year-round.',
    },
    {
      icon: Shield,
      title: 'PPE Supply',
      description:
        'Protective equipment and personal safety gear. High-quality PPE sourced from trusted manufacturers with full documentation and certification.',
    },
  ]

  const timeline = [
    {
      step: 1,
      title: 'Assessment',
      description: 'We conduct a thorough evaluation of your property and fire safety needs',
    },
    {
      step: 2,
      title: 'Planning',
      description: 'Custom solution designed to meet all regulatory requirements and your specific needs',
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Professional installation and setup with minimal disruption to operations',
    },
    {
      step: 4,
      title: 'Support',
      description: 'Ongoing maintenance, training, and 24/7 support for your peace of mind',
    },
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-white/80">
              Complete fire safety solutions from installation to ongoing support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Service Offerings"
            subtitle="Comprehensive support for all your fire safety needs"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {services.map((service, i) => (
              <ServiceCard
                key={i}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={i * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Process Timeline */}
      <section className="py-20 md:py-32 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Service Process"
            subtitle="From initial consultation to ongoing support"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Timeline connector */}
                {i < timeline.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-12 w-full h-1 bg-gradient-to-r from-brand-red/50 to-transparent" />
                )}

                <div className="relative bg-white rounded-2xl p-8 shadow-soft border border-gray-200 hover:shadow-soft-lg transition-all">
                  <motion.div
                    className="w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center text-xl font-bold mb-4"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="text-xl font-bold text-brand-black mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Partner With Britex?"
            subtitle="Proven expertise and commitment to your safety"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '35+ Years Experience',
                description:
                  'Decades of expertise in fire safety solutions and industry best practices',
              },
              {
                title: '1500+ Happy Clients',
                description: 'Trusted by businesses and organizations across multiple sectors',
              },
              {
                title: '24/7 Support',
                description: 'Round-the-clock customer support and emergency response services',
              },
              {
                title: 'Certified Professionals',
                description: 'All technicians are certified and regularly trained on latest standards',
              },
              {
                title: 'Compliance Assured',
                description: 'We ensure all systems comply with local and international regulations',
              },
              {
                title: 'Quick Response',
                description: 'Fast turnaround on installations, maintenance, and emergency calls',
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-2xl bg-brand-light border border-gray-200 hover:border-brand-red/30 transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg font-bold text-brand-black mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
