"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { LineChart, BarChart4, Database, BrainCircuit, ChevronRight, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

const projects = [
  {
    title: "Demand Forecasting Pipeline",
    description:
      "Comprehensive demand forecasting model refresh and validation pipeline using advanced time series algorithms.",
    icon: <LineChart className="h-6 w-6" />,
    technologies: ["Prophet", "Holt-Winters", "SARIMAX", "Optuna", "Python"],
    details: {
      challenge:
        "Develop a scalable and accurate forecasting system for international shipping demand across multiple regions.",
      solution:
        "Created a sophisticated pipeline leveraging multiple time series algorithms to forecast demand with high accuracy. Implemented automated validation checks and hyperparameter optimization to ensure model robustness.",
      results:
        "Successfully managed 1175 models with improved forecast accuracy. Reduced manual intervention by 40% through automation and provided reliable 3-6 month forecasts for business planning.",
    },
  },
  {
    title: "Enterprise Planning Analytics",
    description: "Machine learning experiments to optimize demand forecasting for airport-to-airport shipments.",
    icon: <BarChart4 className="h-6 w-6" />,
    technologies: ["XGBoost", "Ensemble Methods", "Spark", "Power BI", "Python"],
    details: {
      challenge:
        "Improve forecasting accuracy for complex airport-to-airport shipping routes while handling large-scale data processing requirements.",
      solution:
        "Developed and tested multiple machine learning models to identify optimal forecasting approaches. Leveraged Spark's distributed computing capabilities to process large datasets efficiently.",
      results:
        "Created an interactive Power BI dashboard for stakeholders to benchmark performance across regions. Reduced computation time by 60% while improving forecast accuracy by 15%.",
    },
  },
  {
    title: "Missing Data Analysis Framework",
    description: "Dynamic and modularized notebook for missing data analysis across airport and country levels.",
    icon: <Database className="h-6 w-6" />,
    technologies: ["Python", "Spark", "UDFs", "Time Series Analysis"],
    details: {
      challenge:
        "Address data quality issues affecting forecasting accuracy across multiple geographic levels and business units.",
      solution:
        "Designed a scalable framework for identifying, analyzing, and addressing missing data patterns. Implemented efficient algorithms using Spark UDFs to process data at scale.",
      results:
        "Reduced computational power consumption by 30%. Improved data completeness by identifying and addressing systematic gaps. Enhanced decision-making through better data quality.",
    },
  },
  {
    title: "CoreML Performance Benchmarking",
    description: "Enhanced orchestration of model refreshes and performance benchmarking of CoreML modules.",
    icon: <BrainCircuit className="h-6 w-6" />,
    technologies: ["Python", "Time Series Libraries", "Spark UDFs", "Load Testing"],
    details: {
      challenge:
        "Develop a system to continuously evaluate and improve machine learning model performance with incremental data.",
      solution:
        "Created optimized classes and methods for streamlined model refresh orchestration. Implemented comprehensive benchmarking to track performance improvements over time.",
      results:
        "Established a reliable system for month-over-month performance tracking. Identified and communicated critical issues to the CoreML team, leading to significant improvements in model reliability.",
    },
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedProject, setSelectedProject] = useState(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const openProjectDetails = (project) => {
    setSelectedProject(project)
    setIsDialogOpen(true)
  }

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">
            Data Science Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-teal-500/50 transition-all group relative"
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => openProjectDetails(project)}
                    className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="p-3 rounded-full bg-gradient-to-r from-teal-500/20 to-purple-600/20 w-fit mb-4">
                  {project.icon}
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-teal-500 transition-colors">{project.title}</h3>

                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-500">
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  variant="link"
                  className="p-0 h-auto text-teal-500 group-hover:text-teal-400 transition-colors flex items-center"
                  onClick={() => openProjectDetails(project)}
                >
                  View Details
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedProject && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center gap-2">
                <span className="text-teal-500">{selectedProject.icon}</span>
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription>{selectedProject.description}</DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-teal-500">Challenge</h4>
                <p>{selectedProject.details.challenge}</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-teal-500">Solution</h4>
                <p>{selectedProject.details.solution}</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-teal-500">Results</h4>
                <p>{selectedProject.details.results}</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-teal-500">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-500">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  )
}

