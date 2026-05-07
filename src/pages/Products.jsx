import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Flame, Droplet, Wind, Cloud, Waves, AlertCircle } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import SectionHeader from '../components/SectionHeader'

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('extinguishers')

  const fireExtinguishers = [
    {
      icon: Droplet,
      title: 'Water Extinguishers',
      description: 'Effective for Class A fires. Ideal for wood, paper, and fabric fires in commercial and residential settings.',
    },
    {
      icon: Cloud,
      title: 'Foam Extinguishers',
      description: 'Suitable for Class A and B fires. Perfect for flammable liquid and foam-related emergencies.',
    },
    {
      icon: Wind,
      title: 'CO2 Extinguishers',
      description: 'Non-corrosive solution for Class B and C fires. Ideal for electrical equipment and server rooms.',
    },
    {
      icon: AlertCircle,
      title: 'Dry Powder Extinguishers',
      description: 'Versatile multi-purpose extinguishers for Class A, B, and C fires with broad applicability.',
    },
  ]

  const otherProducts = [
    {
      icon: AlertCircle,
      title: 'Fire Alarm Systems',
      description: 'Advanced detection and alert systems with real-time monitoring and integration capabilities.',
    },
    {
      icon: Flame,
      title: 'Fire Detection Systems',
      description: 'Cutting-edge sensors for early fire detection, prevention, and smart building integration.',
    },
    {
      icon: Droplet,
      title: 'Hydrant Systems',
      description: 'Professional-grade hydrant solutions with high-flow capacity for large-scale protection.',
    },
    {
      icon: Waves,
      title: 'Hose Reel Systems',
      description: 'Durable and reliable hose systems for quick emergency response and easy deployment.',
    },
  ]

  const categories = [
    { id: 'extinguishers', name: 'Fire Extinguishers' },
    { id: 'other', name: 'Other Products' },
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Products</h1>
            <p className="text-xl text-white/80">
              Comprehensive range of fire safety equipment and systems
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-brand-red text-white shadow-glow'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.name}
              </motion.button>
            ))}
          </div>

          {/* Fire Extinguishers Category */}
          <AnimatePresence mode="wait">
            {selectedCategory === 'extinguishers' && (
              <motion.div
                key="extinguishers"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <SectionHeader
                  title="Fire Extinguishers"
                  subtitle="Choose from our range of specialized extinguishing systems"
                  centered={true}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {fireExtinguishers.map((product, i) => (
                    <ProductCard
                      key={i}
                      icon={product.icon}
                      title={product.title}
                      description={product.description}
                      delay={i * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Other Products Category */}
            {selectedCategory === 'other' && (
              <motion.div
                key="other"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <SectionHeader
                  title="Other Products"
                  subtitle="Complete fire safety ecosystem beyond extinguishers"
                  centered={true}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {otherProducts.map((product, i) => (
                    <ProductCard
                      key={i}
                      icon={product.icon}
                      title={product.title}
                      description={product.description}
                      delay={i * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Feature Comparison Section */}
          <motion.div
            className="mt-20 pt-20 border-t-2 border-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <SectionHeader
              title="Why Choose Britex?"
              subtitle="Industry-leading fire safety solutions with proven reliability"
              centered={true}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'ISO Certified',
                  desc: 'All products meet international safety standards and certifications',
                },
                {
                  title: 'Expert Installation',
                  desc: 'Professional installation services with comprehensive technical support',
                },
                {
                  title: 'Maintenance Plans',
                  desc: 'Regular maintenance and compliance verification for peace of mind',
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  className="text-center p-8 rounded-xl bg-brand-light border border-gray-200"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <h3 className="text-xl font-bold mb-3 text-brand-black">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
