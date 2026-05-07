import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="bg-brand-black text-white">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-fire rounded-lg flex items-center justify-center font-bold text-lg">
                B
              </div>
              <span className="font-bold text-xl">Britex</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Advanced fire safety solutions trusted by over 1500+ clients for 35+ years.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Products', path: '/products' },
                { name: 'Services', path: '/services' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-brand-red transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', path: '/about', id: 'about' },
                { name: 'Contact', path: '/contact', id: 'contact' },
                { name: 'Locations', path: '/contact', id: 'locations' },
              ].map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-brand-red transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="text-brand-red flex-shrink-0 mt-1" />
                <div className="text-sm text-gray-400">
                  <p>Galle & Colombo</p>
                  <p>Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} className="text-brand-red" />
                <a href="tel:0912241405" className="text-sm text-gray-400 hover:text-brand-red">
                  0912241405
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} className="text-brand-red" />
                <a href="mailto:info@britex.lk" className="text-sm text-gray-400 hover:text-brand-red">
                  info@britex.lk
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 mb-8" />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Britex Group of Companies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-brand-red transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-red transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-red transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
