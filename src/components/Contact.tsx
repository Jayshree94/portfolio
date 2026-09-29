import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jayshreekharate16@gmail.com',
      href: 'mailto:jayshreekharate16@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8208752870',
      href: 'tel:+918208752870',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, India',
      href: null,
      color: 'from-purple-500 to-pink-500',
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jayshree-kharate-qa/',
      color: 'hover:text-blue-400',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Jayshree94',
      color: 'hover:text-slate-400',
    },
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Get In <span className="text-primary-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-8" />
          <p className="text-center text-slate-400 text-lg mb-16 max-w-2xl mx-auto">
            I'm currently open to new opportunities and open to relocation. Feel free to reach out if you'd like to
            discuss QA automation, test frameworks, or potential collaborations.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="block bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-primary-500 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 group"
                  >
                    <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${item.color} mb-4`}>
                      <item.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-400 mb-2">{item.label}</h3>
                    <p className="text-slate-100 font-medium group-hover:text-primary-400 transition-colors">
                      {item.value}
                    </p>
                  </a>
                ) : (
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
                    <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${item.color} mb-4`}>
                      <item.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-400 mb-2">{item.label}</h3>
                    <p className="text-slate-100 font-medium">{item.value}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center"
          >
            <p className="text-slate-400 mb-6">Connect with me on social media</p>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-primary-500 transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <footer className="mt-20 pt-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} Jayshree Kharate. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  )
}

export default Contact
