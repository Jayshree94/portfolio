import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, MapPin, Calendar } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      company: 'Lightbeam.ai',
      location: 'Pune, India',
      role: 'Senior QA Automation Engineer / SDET',
      duration: 'July 2024 – May 2026',
      achievements: [
        'Architected a modular Java automation framework covering UI, API, and E2E testing using Selenium, REST Assured, and TestNG; increased automated regression coverage by ~50%',
        'Designed comprehensive REST API test suites (CRUD, negative, schema, and contract validation) using REST Assured and Postman; established service-level quality gates across microservices',
        'Containerised test environments using Docker and orchestrated parallel test execution on Kubernetes (EKS), enabling scalable, consistent runs across CI pipelines',
        'Integrated automated tests into Jenkins CI/CD pipelines with Maven, improving release reliability by ~40%',
        'Validated cross-system payloads, API contracts, and data integrity across distributed microservices — preventing integration regressions in a cloud-native architecture',
        'Stored and managed test execution reports on AWS S3, enabling centralised access, long-term retention, and easy sharing across distributed teams',
        'Implemented Serenity BDD framework for living documentation and enhanced test reporting, improving visibility of test coverage for stakeholders',
        'Managed test cases and tracked coverage using XRAY integrated with JIRA, providing real-time quality metrics across sprints',
        'Championed testability during design phases; mentored team members on automation best practices and BDD/Cucumber adoption in Agile/Scrum ceremonies',
      ],
    },
    {
      company: 'ITC Infotech',
      location: 'Pune, India',
      role: 'QA Automation Engineer',
      duration: 'January 2022 – July 2024',
      achievements: [
        'Built and maintained Selenium + Java + TestNG + BDD/Cucumber frameworks with Page Object Model; developed Playwright E2E test suites for modern web UIs — ensuring stable regression coverage across release cycles',
        'Developed REST Assured and SoapUI API suites covering functional, negative, and edge-case scenarios; improved API test coverage by ~25% across backend microservices',
        'Managed and organised test cases in TestRail; tracked execution results and reported test progress to stakeholders across release cycles',
        'Integrated test pipelines into GitHub Actions; led test planning, effort estimation, and risk analysis in Agile/Scrum delivery',
        'Managed defect lifecycle in JIRA — triaging, prioritising, and root-cause analysis — reducing resolution time and improving release quality',
      ],
    },
    {
      company: 'Ignitiv Technologies',
      location: 'Pune, India',
      role: 'QA Automation Engineer',
      duration: 'October 2017 – December 2021',
      achievements: [
        'Designed Selenium (Java) UI automation suites from scratch using XPath strategies, reusable functions, and data-driven patterns to minimise maintenance overhead',
        'Planned and executed regression, functional, smoke, and integration testing; contributed to framework-level upgrades as project complexity grew',
        'Conducted peer reviews of test cases and defect reports; root-cause analysis to reduce defect resolution time and improve product stability',
        'Performed manual testing on iOS and Android mobile applications — covering functional, usability, and regression scenarios across multiple device configurations',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Professional <span className="text-primary-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-16" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-primary-500 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-2">
                      {exp.company}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-400 mb-2">
                      <Briefcase size={18} />
                      <span className="text-lg font-semibold text-slate-300">{exp.role}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-4 md:mt-0 md:text-right">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar size={18} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <MapPin size={18} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300">
                      <span className="text-primary-400 mt-1.5 flex-shrink-0">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
