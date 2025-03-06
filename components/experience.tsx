"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, Building2, ChevronRight, LineChart, BarChart4, Database } from "lucide-react"

const experiences = [
  {
    title: "Decision Scientist – Associate",
    company: "FedEx Express",
    period: "May 2023 - Present",
    projects: [
      {
        name: "Short term Weekly International Forecasting (SWIIFT)",
        description:
          "Conducted monthly comprehensive demand forecasting model refresh and validation pipeline leveraging advanced time series algorithms including Prophet, Holt-Winters, and Sarimax.",
        achievements: [
          "Utilized Optuna for hyperparameter optimization and rolling cross-validation",
          "Forecasted 3 months of demand for country-to-country/airport-to-airport models",
          "Forecasted 6 months for inter-continental models",
          "Managed 1175 models and transferred knowledge to new team members",
        ],
        icon: <LineChart className="h-5 w-5" />,
      },
      {
        name: "Enterprise Planning",
        description:
          "Conducted machine learning experiments to optimize demand forecasting for airport-to-airport shipments using libraries such as XGBoost, Holt-Winters, Theta, SARIMAX, Prophet, and ensemble methods.",
        achievements: [
          "Explored diverse methodologies to achieve the lowest Mean Absolute Percentage Error (MAPE)",
          "Developed a robust pipeline for preprocessing forecasts and calculating metrics",
          "Leveraged Spark's distributed structure to reduce computation time",
          "Led development of an interactive Power BI dashboard for performance benchmarking",
        ],
        icon: <BarChart4 className="h-5 w-5" />,
      },
      {
        name: "Data Analytics Pod",
        description:
          "Spearheaded the development of a dynamic and modularized notebook for missing data analysis across airport and country levels.",
        achievements: [
          "Conducted rigorous testing across various regions for scalability",
          "Implemented efficient algorithms and UDFs to reduce computational power by 30%",
          "Structured notebook to cater to diverse business use cases",
          "Enhanced data-driven decision-making processes within the organization",
        ],
        icon: <Database className="h-5 w-5" />,
      },
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">
            Professional Experience
          </h2>

          <div className="max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="mb-12"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-teal-500/10 text-teal-500 mr-4">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{experience.title}</h3>
                    <div className="flex items-center text-muted-foreground">
                      <span>{experience.company}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{experience.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8 pl-16">
                  {experience.projects.map((project, projectIndex) => (
                    <motion.div
                      key={projectIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.8, delay: 0.2 + projectIndex * 0.1 }}
                      className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border"
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-full bg-purple-500/10 text-purple-500 mr-3">{project.icon}</div>
                        <h4 className="text-xl font-semibold">{project.name}</h4>
                      </div>

                      <p className="mb-4 text-muted-foreground">{project.description}</p>

                      <h5 className="font-semibold mb-2 text-teal-500">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-purple-500 mr-2 shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
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

