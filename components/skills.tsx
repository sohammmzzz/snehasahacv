"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Database,
  BarChart4,
  BrainCircuit,
  LineChart,
  Search,
  PanelLeft,
  Layers,
  Lightbulb,
  Languages,
} from "lucide-react"
import { useState } from "react"

const skills = [
  {
    category: "Technical Skills",
    icon: <BarChart4 className="h-6 w-6" />,
    items: [
      { name: "Data Analysis", icon: <BarChart4 className="h-5 w-5" />, level: 90 },
      { name: "Statistical Modeling", icon: <LineChart className="h-5 w-5" />, level: 85 },
      { name: "Machine Learning", icon: <BrainCircuit className="h-5 w-5" />, level: 80 },
      { name: "Predictive Analytics", icon: <LineChart className="h-5 w-5" />, level: 85 },
      { name: "Exploratory Data Analysis (EDA)", icon: <Search className="h-5 w-5" />, level: 90 },
    ],
  },
  {
    category: "Tools & Technologies",
    icon: <Database className="h-6 w-6" />,
    items: [
      { name: "Python", icon: <PanelLeft className="h-5 w-5" />, level: 75 },
      { name: "Power BI", icon: <BarChart4 className="h-5 w-5" />, level: 75 },
      { name: "SQL", icon: <Database className="h-5 w-5" />, level: 75 },
      { name: "Azure Databricks", icon: <Layers className="h-5 w-5" />, level: 70 },
      { name: "Data Visualization", icon: <BarChart4 className="h-5 w-5" />, level: 85 },
    ],
  },
  {
    category: "Soft Skills",
    icon: <Lightbulb className="h-6 w-6" />,
    items: [
      { name: "Problem-Solving", icon: <Lightbulb className="h-5 w-5" />, level: 90 },
      { name: "Critical Thinking", icon: <BrainCircuit className="h-5 w-5" />, level: 85 },
      { name: "Decision-Making", icon: <Lightbulb className="h-5 w-5" />, level: 85 },
      {
        name: "Languages",
        icon: <Languages className="h-5 w-5" />,
        level: 90,
        description: "English (Fluent), Bengali (Fluent), Hindi (Working Knowledge)",
      },
    ],
  },
]

// Particle animation component
const ParticleAnimation = ({ color }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            backgroundColor: color,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * -100 - 50],
            x: [0, (Math.random() - 0.5) * 50],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}

// Skill card component with animations
const SkillCard = ({ skill, index, inView }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && <ParticleAnimation color={index % 2 === 0 ? "#14b8a6" : "#c084fc"} />}

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div
            className={`p-3 rounded-full ${index % 2 === 0 ? "bg-teal-500/10 text-teal-500" : "bg-purple-500/10 text-purple-500"}`}
          >
            {skill.icon}
          </div>
          <h3 className={`text-xl font-semibold ${index % 2 === 0 ? "text-teal-500" : "text-purple-500"}`}>
            {skill.category}
          </h3>
        </div>

        <div className="space-y-6">
          {skill.items.map((item, skillIndex) => (
            <div key={skillIndex}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <motion.div
                    className={`mr-2 ${index % 2 === 0 ? "text-purple-500" : "text-teal-500"}`}
                    animate={
                      isHovered
                        ? {
                            rotate: [0, 10, 0, -10, 0],
                            scale: [1, 1.1, 1],
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.5,
                      delay: skillIndex * 0.1,
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <span className="font-medium">{item.name}</span>
                </div>
                <span className="text-sm font-semibold">{item.level}%</span>
              </div>

              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${item.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.3 + skillIndex * 0.1 }}
                  className={`h-full rounded-full ${
                    index % 2 === 0
                      ? "bg-gradient-to-r from-teal-500 to-purple-600"
                      : "bg-gradient-to-r from-purple-600 to-teal-500"
                  }`}
                />
              </div>

              {item.description && (
                <motion.p
                  className="mt-1 text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + skillIndex * 0.1 }}
                >
                  {item.description}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-10"
        style={{
          background: `radial-gradient(circle, ${index % 2 === 0 ? "#14b8a6" : "#c084fc"} 0%, transparent 70%)`,
        }}
        animate={isHovered ? { scale: 1.5 } : { scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-background/90 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-5 bg-teal-500"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-5 bg-purple-500"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600 inline-block">
              Skills & Expertise
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <SkillCard key={groupIndex} skill={skillGroup} index={groupIndex} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

