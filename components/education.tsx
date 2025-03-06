"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react"
import { useRef } from "react"

const education = [
  {
    degree: "MSc Population Studies and Health Economics",
    institute: "Gokhale Institute of Politics and Economics (Deemed to be University), Pune",
    year: "2023",
    score: "7.95/10",
    icon: <GraduationCap className="h-6 w-6" />,
    color: "from-teal-500 to-teal-300",
  },
  {
    degree: "BA (H) Economics",
    institute: "St. Xavier's University, Kolkata",
    year: "2021",
    score: "7.44/10",
    icon: <BookOpen className="h-6 w-6" />,
    color: "from-purple-500 to-purple-300",
  },
  {
    degree: "ISC",
    institute: "Our Lady Queen of the Missions School, Salt Lake",
    year: "2018",
    score: "91.25%",
    icon: <GraduationCap className="h-6 w-6" />,
    color: "from-teal-500 to-teal-300",
  },
  {
    degree: "ICSE",
    institute: "Our Lady Queen of the Missions School, Salt Lake",
    year: "2016",
    score: "90.60%",
    icon: <BookOpen className="h-6 w-6" />,
    color: "from-purple-500 to-purple-300",
  },
]

// Timeline item component with scroll animations
const TimelineItem = ({ edu, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  const itemRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3])
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [-20, 0, -20])

  return (
    <motion.div ref={itemRef} style={{ scale, opacity, x }} className="mb-16 relative">
      {/* Timeline dot with animated glow */}
      <motion.div
        className="absolute -left-12 p-2 rounded-full bg-gradient-to-r from-teal-500 to-purple-600 z-10"
        initial={{ boxShadow: "0 0 0 rgba(20, 184, 166, 0)" }}
        animate={
          inView
            ? {
                boxShadow: [
                  "0 0 0 rgba(20, 184, 166, 0)",
                  "0 0 20px rgba(20, 184, 166, 0.7)",
                  "0 0 0 rgba(20, 184, 166, 0)",
                ],
              }
            : {}
        }
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        {edu.icon}
      </motion.div>

      {/* Card with hover effects */}
      <motion.div
        ref={ref}
        className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border ml-4 relative overflow-hidden group hover:border-teal-500/50 transition-colors"
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        {/* Decorative background gradient */}
        <motion.div
          className={`absolute -right-20 -bottom-20 w-40 h-40 rounded-full bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        />

        <motion.h3
          className="text-xl font-bold mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {edu.degree}
        </motion.h3>

        <motion.p
          className="text-muted-foreground mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {edu.institute}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <motion.div
            className="flex items-center text-sm bg-teal-500/10 text-teal-500 px-3 py-1 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <Calendar className="h-4 w-4 mr-1" />
            <span>{edu.year}</span>
          </motion.div>

          <motion.div
            className="flex items-center text-sm bg-purple-500/10 text-purple-500 px-3 py-1 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <Award className="h-4 w-4 mr-1" />
            <span>{edu.score}</span>
          </motion.div>
        </motion.div>

        {/* Animated line connecting to next item */}
        {index < education.length - 1 && (
          <motion.div
            className="absolute h-16 w-0.5 bg-gradient-to-b from-teal-500 to-purple-600 -bottom-16 left-[-29px]"
            initial={{ height: 0, opacity: 0 }}
            animate={inView ? { height: 64, opacity: [0, 1, 1] } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        )}
      </motion.div>
    </motion.div>
  )
}

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-background to-background/90 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 left-20 w-72 h-72 rounded-full bg-teal-500/5"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-purple-500/5"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="container mx-auto px-4">
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
              Education
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-3xl mx-auto" ref={containerRef}>
            <div className="relative border-l-2 border-teal-500/50 pl-8 ml-4">
              {education.map((edu, index) => (
                <TimelineItem key={index} edu={edu} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-purple-500/50 transition-all group relative overflow-hidden"
            >
              {/* Decorative background gradient */}
              <motion.div className="absolute -left-20 -bottom-20 w-40 h-40 rounded-full bg-gradient-to-r from-purple-500 to-purple-300 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

              <h3 className="text-xl font-bold mb-4 text-teal-500 flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Leadership Experience
              </h3>
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-purple-500/10 text-purple-500 mr-3">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Head of Drama Society</h4>
                  <p className="text-muted-foreground">St. Xavier's University, Kolkata</p>
                  <p className="mt-2">
                    Led the dramatics team, managed operations, and handled logistical responsibilities during college
                    fests.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

