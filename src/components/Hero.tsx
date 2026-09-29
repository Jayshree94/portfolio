import { motion } from 'framer-motion'
import { ChevronDown, Linkedin, Github, Eye, Download } from 'lucide-react'
import { useState } from 'react'

const Hero = () => {
  const [showResumeModal, setShowResumeModal] = useState(false)

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-purple-900/20" />
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-slate-100">Jayshree</span>{' '}
            <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
              Kharate
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Senior QA Automation Engineer / SDET
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Driving quality through Java-based UI & API automation, CI/CD integration, and scalable test frameworks
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <a
                href="https://www.linkedin.com/in/jayshree-kharate-qa/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/50 flex items-center gap-2"
              >
                <Linkedin size={20} />
                View LinkedIn
              </a>
              <a
                href="https://github.com/Jayshree94"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-semibold transition-all duration-300 border border-slate-600 hover:border-slate-500 flex items-center gap-2"
              >
                <Github size={20} />
                View GitHub
              </a>
              <button
                onClick={() => setShowResumeModal(true)}
                className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/50 flex items-center gap-2"
              >
                <Eye size={20} />
                View Resume
              </button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, repeat: Infinity, duration: 1.5, repeatType: 'reverse' }}
        >
          <a href="#about" className="text-slate-400 hover:text-primary-400 transition-colors">
            <ChevronDown size={32} />
          </a>
        </motion.div>
      </div>

      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowResumeModal(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-slate-900 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <h3 className="text-2xl font-bold text-slate-100">Resume - Jayshree Kharate</h3>
              <div className="flex items-center gap-3">
                <a
                  href={`${import.meta.env.BASE_URL}Jayshree_Kharate_Senior_SDET.pdf`}
                  download
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
                >
                  <Download size={18} />
                  Download
                </a>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="text-slate-400 hover:text-slate-100 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="overflow-auto" style={{ height: 'calc(90vh - 88px)' }}>
              <iframe
                src={`${import.meta.env.BASE_URL}Jayshree_Kharate_Senior_SDET.pdf`}
                className="w-full h-full"
                style={{ minHeight: '600px' }}
                title="Resume PDF"
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

export default Hero
