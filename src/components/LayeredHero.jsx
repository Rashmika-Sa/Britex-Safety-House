import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function LayeredHero({ children }) {
  const reduce = useReducedMotion()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Layered background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white/72 via-white/66 to-gray-100/74" />

        <motion.div
          className="absolute -top-64 -right-64 w-[380px] h-[380px] bg-brand-red/10 rounded-full blur-3xl"
          animate={reduce ? {} : { x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        <motion.div
          className="absolute -bottom-64 -left-64 w-[380px] h-[380px] bg-brand-red/6 rounded-full blur-3xl"
          animate={reduce ? {} : { x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />

        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={reduce ? {} : { rotate: [0, 2, -2, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {children}
      </div>
    </section>
  )
}
