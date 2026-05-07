import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Flame,
  AlertCircle,
  Radio,
  Droplet,
  Zap,
  Users,
  ArrowRight,
} from 'lucide-react'
import ProductCard from '../components/ProductCard'
import StatCounter from '../components/StatCounter'
import SectionHeader from '../components/SectionHeader'
import LayeredHero from '../components/LayeredHero'
import productSample from '../assets/images/product-sample.svg'

export default function Home() {
  const products = [
    {
      icon: Flame,
      image: productSample,
      title: 'Fire Extinguishers',
      description: 'Multi-class extinguishing systems for all fire types and safety standards',
    },
    {
      icon: AlertCircle,
      title: 'Fire Alarms',
      description: 'Advanced detection and alert systems with real-time monitoring',
    },
    {
      icon: Radio,
      title: 'Detection Systems',
      description: 'Cutting-edge sensors for early fire detection and prevention',
    },
    {
      icon: Droplet,
      title: 'Hydrant Systems',
      description: 'Professional-grade hydrant solutions for large-scale protection',
    },
    {
      icon: Zap,
      title: 'Hose Reel Systems',
      description: 'Durable and reliable hose systems for quick emergency response',
    },
    {
      icon: Users,
      title: 'Training & PPE',
      description: 'Comprehensive training programs and protective equipment',
    },
  ]

  const stats = [
    { number: '1500', suffix: '+', label: 'Satisfied Clients' },
    { number: '35', suffix: '+', label: 'Years Experience' },
    { number: '100', suffix: '%', label: 'Safety Guarantee' },
  ]

  return (
    <div className="min-h-screen">
      {/* Layered Hero Section */}
      <LayeredHero>
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-brand-red/12 rounded-full text-brand-red font-semibold text-sm">
                Next-Gen Fire Safety Solutions
              </span>
            </div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold text-brand-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Advanced Fire Safety
              <span className="block text-brand-red">Solutions</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Protecting Lives & Property for Over 35 Years. Trusted by 1500+ clients worldwide with cutting-edge fire safety technology.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link to="/products" className="btn-primary">
                <span className="flex items-center gap-2">
                  Explore Products
                  <ArrowRight size={18} />
                </span>
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-gray-400 text-sm">Scroll to explore</div>
        </motion.div>
      </LayeredHero>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <StatCounter
                key={i}
                number={stat.number}
                suffix={stat.suffix}
                label={stat.label}
                delay={i * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products Overview Section */}
      <section className="py-20 md:py-32 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Products"
            subtitle="Comprehensive fire safety solutions for every need"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, i) => (
              <ProductCard
                key={i}
                icon={product.icon}
                image={product.image}
                title={product.title}
                description={product.description}
                delay={i * 0.1}
              />
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-brand-red font-semibold hover:gap-3 transition-all"
            >
              View All Products
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-brand-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Enhance Your Fire Safety?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our experts today and discover how Britex can protect your property.
            </p>
            <Link to="/contact" className="btn-primary bg-brand-red hover:bg-red-700">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
