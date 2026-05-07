import React from 'react'
import { motion } from 'framer-motion'

export default function ServiceCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-8 h-full shadow-soft hover:shadow-soft-lg transition-all duration-300"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ translateY: -8 }}
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-full blur-3xl" />

      <motion.div
        className="relative z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: delay + 0.2 }}
      >
        <div className="w-14 h-14 bg-brand-red/20 rounded-xl flex items-center justify-center text-brand-red mb-4">
          <Icon size={28} />
        </div>
        <h3 className="text-2xl font-bold text-brand-black mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
      </motion.div>
    </motion.div>
  )
}
