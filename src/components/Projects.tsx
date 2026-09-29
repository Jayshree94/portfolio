import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Folder, TrendingUp, Target, Zap } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'Modular Java Automation Framework (UI + API + E2E)',
      icon: Folder,
      problem: 'A cloud-native microservices platform needed a unified automation framework to cover UI, API, and end-to-end testing without duplicating effort across teams',
      technologies: ['Selenium', 'Java', 'REST Assured', 'TestNG', 'Serenity BDD'],
      outcomes: [
        'Increased automated regression coverage by ~50%',
        'Established service-level quality gates across microservices',
        'Adopted Serenity BDD for living documentation and stakeholder visibility',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'REST API Test Suite for Microservices',
      icon: Target,
      problem: 'A distributed microservices architecture required rigorous API validation to prevent cross-system integration regressions',
      technologies: ['REST Assured', 'Postman', 'SoapUI', 'Contract Testing', 'Schema Validation'],
      outcomes: [
        'Designed CRUD, negative, schema, and contract validation suites',
        'Improved API test coverage by ~25%',
        'Validated cross-system payloads and data integrity across services',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Containerised, Kubernetes-Orchestrated Test Execution',
      icon: Zap,
      problem: 'Test environments needed to run consistently and in parallel across CI pipelines at scale',
      technologies: ['Docker', 'Kubernetes (EKS)', 'Jenkins', 'Maven', 'AWS S3'],
      outcomes: [
        'Enabled scalable, consistent parallel test runs on EKS',
        'Improved release reliability by ~40% via Jenkins CI/CD integration',
        'Centralised test execution reports on AWS S3 for long-term retention',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Selenium + Playwright UI Regression Suite',
      icon: TrendingUp,
      problem: 'Modern web UIs across release cycles needed stable, maintainable regression coverage',
      technologies: ['Selenium', 'Playwright', 'TestNG', 'Cucumber/Gherkin', 'Page Object Model'],
      outcomes: [
        'Built Page Object Model frameworks with BDD/Cucumber',
        'Developed Playwright E2E suites for modern web UIs',
        'Reduced defect resolution time via root-cause analysis and JIRA-tracked defect lifecycle',
      ],
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Featured <span className="text-primary-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-16" />

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-primary-500 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color}`}>
                    <project.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-primary-400 mb-2">Problem Statement</h4>
                    <p className="text-slate-300 text-sm">{project.problem}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-primary-400 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-primary-400 mb-2">Key Outcomes</h4>
                    <ul className="space-y-2">
                      {project.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                          <span className="text-primary-400 mt-0.5">▹</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
