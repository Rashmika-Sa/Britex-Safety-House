import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageSquare, Send } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Since no backend is required, just show a success message
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const locations = [
    {
      city: 'Galle Office',
      address: 'No.31 Awewalwala Road, Bataganwila, Galle',
      phone: '0912241405',
      coordinates: 'GPS: 6.0367° N, 80.2158° E',
    },
    {
      city: 'Colombo Office',
      address: '16, Deniya Road, Bollatha, Kandana',
      phone: '0702518581',
      coordinates: 'GPS: 6.9497° N, 80.3864° E',
    },
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['Galle: 0912241405', 'Colombo: 0702518581'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@britex.lk', 'support@britex.lk'],
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      details: ['0712768768 - Direct chat support'],
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-white/80">
              We're here to help with all your fire safety needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Contact Methods"
            subtitle="Reach out to us through your preferred channel"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 justify-items-center">
            {contactMethods.map((method, i) => (
              <motion.div
                key={i}
                className="bg-brand-light rounded-2xl p-8 border border-gray-200 hover:border-brand-red/30 transition-all text-center flex flex-col items-center w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red mx-auto mb-4">
                  <method.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-4">{method.title}</h3>
                {method.details.map((detail, j) => (
                  <p key={j} className="text-gray-600 mb-2">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 md:py-32 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-3xl p-10 shadow-soft">
                <h2 className="text-3xl font-bold text-brand-black mb-6">Send us a Message</h2>

                {submitted ? (
                  <motion.div
                    className="bg-green-50 border-2 border-green-400 rounded-xl p-6 text-center"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-green-700 font-semibold text-lg">
                      Thank you! We'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-brand-red transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-brand-red transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-brand-red transition-colors resize-none"
                        placeholder="Tell us about your fire safety needs..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full btn-primary flex items-center justify-center gap-2 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Send Message</span>
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Location Cards */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-brand-black">Our Locations</h2>

              {locations.map((location, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-3xl p-8 shadow-soft border-l-4 border-brand-red hover:shadow-glow-lg transition-all text-center flex flex-col items-center w-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-2xl font-bold text-brand-black mb-4">{location.city}</h3>

                  <div className="space-y-4 w-full max-w-lg">
                    <div className="flex flex-col items-center gap-3">
                      <MapPin size={26} className="text-brand-red" />
                      <div className="text-center">
                        <p className="font-semibold text-gray-900">{location.address}</p>
                        <p className="text-sm text-gray-600 mt-1">{location.coordinates}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 justify-center">
                      <Phone size={20} className="text-brand-red" />
                      <a
                        href={`tel:${location.phone}`}
                        className="font-semibold text-brand-red hover:text-red-700 transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  <motion.a
                    href={`https://wa.me/94${location.phone.replace(/\D/g, '').slice(-9)}`}
                    className="mt-4 inline-block px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    WhatsApp Us
                  </motion.a>
                </motion.div>
              ))}

              {/* WhatsApp Direct */}
              <motion.div
                className="bg-gradient-to-r from-green-400 to-green-600 rounded-3xl p-8 text-white shadow-glow-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold mb-2">Direct WhatsApp Support</h3>
                <p className="mb-4">Chat with us instantly on WhatsApp</p>
                <motion.a
                  href="https://wa.me/94712768768"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-green-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-50 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  +94 712 768 768 - Start Chat
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Emergency Support</h2>
            <p className="text-xl text-gray-300 mb-8">
              Available 24/7 for all fire safety emergencies and urgent inquiries
            </p>
            <a
              href="tel:0912241405"
              className="inline-block bg-brand-red text-white font-bold py-4 px-8 rounded-lg hover:bg-red-700 transition-all text-lg"
            >
              Call Now: 0912241405
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
