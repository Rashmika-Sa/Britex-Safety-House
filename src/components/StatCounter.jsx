import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function StatCounter({ number, suffix = '', label, delay = 0 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const target = parseInt(number)
    const duration = 2000
    const increment = target / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [number])

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div className="text-4xl md:text-5xl font-bold text-brand-red mb-2">
        {count}
        {suffix}
      </motion.div>
      <p className="text-gray-600 font-medium">{label}</p>
    </motion.div>
  )
}
