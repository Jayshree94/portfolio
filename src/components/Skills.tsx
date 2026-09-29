import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Cpu, Cloud, Wrench, Layers, GitBranch, ShieldCheck } from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Languages & UI Testing',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: ['Java', 'Selenium WebDriver', 'Playwright'],
    },
    {
      title: 'API Testing',
      icon: Cpu,
      color: 'from-purple-500 to-pink-500',
      skills: ['REST Assured', 'Postman', 'SoapUI', 'Contract Testing', 'Schema Validation'],
    },
    {
      title: 'BDD & Frameworks',
      icon: Layers,
      color: 'from-pink-500 to-rose-500',
      skills: ['Cucumber/Gherkin', 'Serenity BDD', 'TestNG', 'JUnit', 'Page Object Model (POM)'],
    },
    {
      title: 'CI/CD & SCM',
      icon: GitBranch,
      color: 'from-green-500 to-emerald-500',
      skills: ['Jenkins', 'GitHub Actions', 'Maven', 'Git'],
    },
    {
      title: 'Cloud & Infra',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      skills: ['Docker', 'Kubernetes (EKS)', 'AWS S3', 'GCP', 'Linux'],
    },
    {
      title: 'Test Management',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      skills: ['XRAY', 'TestRail', 'JIRA'],
    },
    {
      title: 'Testing Types',
      icon: ShieldCheck,
      color: 'from-yellow-500 to-orange-500',
      skills: ['Functional', 'Regression', 'Integration', 'E2E', 'Performance', 'Security'],
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Technical <span className="text-primary-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-16" />

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-primary-500 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <category.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.15 + idx * 0.05, duration: 0.3 }}
                      className="px-4 py-2 bg-slate-700/50 text-slate-200 rounded-lg text-sm font-medium hover:bg-slate-600/50 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
