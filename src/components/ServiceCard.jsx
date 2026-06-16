import React from 'react'
import { motion } from 'framer-motion'

export default function ServiceCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      className="card-glow p-8 flex flex-col items-center text-center rounded-2xl bg-white border border-gray-200 h-full shadow-soft hover:shadow-soft-lg transition-all duration-300 w-full"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ translateY: -8 }}
    >
      <motion.div
        className="relative z-10 w-full flex flex-col items-center text-center"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: delay + 0.2 }}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-brand-red to-red-600 rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
          <Icon size={32} />
        </div>
        <h3 className="text-2xl font-bold text-brand-black mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </motion.div>
    </motion.div>
  )
}
