"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg">
                I'm a <span className="font-semibold text-teal-500">Decision Scientist</span> at FedEx Express with
                expertise in advanced forecasting, machine learning, and data analytics.
              </p>
              <p>
                With a background in Population Studies, Health Economics, and Economics, I bring a unique perspective
                to data science challenges, combining statistical rigor with business acumen.
              </p>
              <p>
                My work focuses on developing sophisticated forecasting models, optimizing machine learning pipelines,
                and creating interactive dashboards that drive strategic decision-making.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-900/20 to-purple-900/20 p-6 rounded-lg border border-teal-500/20">
              <h3 className="text-xl font-semibold mb-4 text-teal-500">Professional Mission</h3>
              <p className="italic">
                "To leverage data science and machine learning to solve complex business challenges and drive innovation
                through actionable insights."
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
                  <span>Advanced Time Series Forecasting</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                  <span>Machine Learning Optimization</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
                  <span>Data-Driven Decision Making</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                  <span>Business Intelligence & Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

