import React from 'react'
import { motion } from 'framer-motion'

export default function ProductCard({ icon: Icon, image, title, description, delay = 0 }) {
  return (
    <motion.div
      className="card-glow p-8 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      {image ? (
        <motion.img
          src={image}
          alt={title}
          className="w-32 h-32 object-contain mb-4 rounded-md"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
        />
      ) : (
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-brand-red to-red-600 rounded-xl flex items-center justify-center text-white mb-4"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Icon size={32} />
        </motion.div>
      )}

      <h3 className="text-xl font-bold text-brand-black mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  )
}
