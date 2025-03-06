"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float, Text } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

function DataParticles() {
  const particlesRef = useRef()
  const [hovered, setHovered] = useState(false)

  // Create particles for data flow visualization
  const particleCount = 200
  const positions = new Float32Array(particleCount * 3)
  const colors = new Float32Array(particleCount * 3)
  const sizes = new Float32Array(particleCount)

  // Set up particles in a circular pattern
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3
    const radius = 5 + Math.random() * 5
    const theta = Math.random() * Math.PI * 2
    const phi = Math.random() * Math.PI

    // Position in spherical coordinates
    positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[i3 + 2] = radius * Math.cos(phi)

    // Colors - teal to purple gradient
    const mixFactor = Math.random()
    colors[i3] = mixFactor * 0.05 + (1 - mixFactor) * 0.58 // R: mix between teal and purple
    colors[i3 + 1] = mixFactor * 0.78 + (1 - mixFactor) * 0.21 // G: mix between teal and purple
    colors[i3 + 2] = mixFactor * 0.74 + (1 - mixFactor) * 0.93 // B: mix between teal and purple

    // Random sizes
    sizes[i] = Math.random() * 0.5 + 0.1
  }

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <group
        ref={particlesRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        position={[0, 0, -10]} // Position behind the content
      >
        {/* Data flow lines */}
        {Array.from({ length: 30 }).map((_, i) => {
          const startRadius = 3 + Math.random() * 3
          const endRadius = 3 + Math.random() * 3
          const startTheta = Math.random() * Math.PI * 2
          const endTheta = Math.random() * Math.PI * 2
          const startPhi = Math.random() * Math.PI
          const endPhi = Math.random() * Math.PI

          const start = [
            startRadius * Math.sin(startPhi) * Math.cos(startTheta),
            startRadius * Math.sin(startPhi) * Math.sin(startTheta),
            startRadius * Math.cos(startPhi),
          ]

          const end = [
            endRadius * Math.sin(endPhi) * Math.cos(endTheta),
            endRadius * Math.sin(endPhi) * Math.sin(endTheta),
            endRadius * Math.cos(endPhi),
          ]

          return (
            <line key={i}>
              <bufferGeometry attach="geometry">
                <bufferAttribute
                  attachObject={["attributes", "position"]}
                  count={2}
                  array={new Float32Array([...start, ...end])}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial
                attach="material"
                color={hovered ? "#c084fc" : "#14b8a6"}
                linewidth={1}
                opacity={0.4}
                transparent
              />
            </line>
          )
        })}

        {/* Data particles */}
        <points>
          <bufferGeometry>
            <bufferAttribute
              attachObject={["attributes", "position"]}
              count={particleCount}
              array={positions}
              itemSize={3}
            />
            <bufferAttribute attachObject={["attributes", "color"]} count={particleCount} array={colors} itemSize={3} />
            <bufferAttribute attachObject={["attributes", "size"]} count={particleCount} array={sizes} itemSize={1} />
          </bufferGeometry>
          <pointsMaterial size={0.15} vertexColors transparent opacity={0.8} sizeAttenuation />
        </points>

        {/* Floating text elements - arranged in a spherical pattern */}
        <group>
          {/* Core Skills */}
          <Text
            position={[-3, 2, 0]}
            fontSize={0.5}
            color="#14b8a6"
            anchorX="center"
            anchorY="middle"
            font="/fonts/Geist-Regular.ttf"
          >
            Data Science
          </Text>

          <Text
            position={[3, -2, 1]}
            fontSize={0.5}
            color="#c084fc"
            anchorX="center"
            anchorY="middle"
            font="/fonts/Geist-Regular.ttf"
          >
            Analytics
          </Text>

          <Text
            position={[0, 3, -2]}
            fontSize={0.5}
            color="#14b8a6"
            anchorX="center"
            anchorY="middle"
            font="/fonts/Geist-Regular.ttf"
          >
            Machine Learning
          </Text>

          {/* Models & Tools */}
          <Text
            position={[-4, -1, 2]}
            fontSize={0.4}
            color="#c084fc"
            anchorX="center"
            anchorY="middle"
            font="/fonts/Geist-Regular.ttf"
            rotation={[0, 0.2, 0]}
          >
            Prophet
          </Text>

          <Text
            position={[4, 1, -1]}
            fontSize={0.4}
            color="#14b8a6"
            anchorX="center"
            anchorY="middle"
            font="/fonts/Geist-Regular.ttf"
            rotation={[0, -0.2, 0]}
          >
            XGBoost
          </Text>

          <Text
            position={[-2, -3, -1]}
            fontSize={0.4}
            color="#c084fc"
            anchorX="center"
            anchorY="middle"
            font="/fonts/Geist-Regular.ttf"
            rotation={[0.1, 0, 0]}
          >
            SARIMAX
          </Text>

          {/* Technical Skills */}
          <Text
            position={[2, 3, 1]}
            fontSize={0.4}
            color="#14b8a6"
            anchorX="center"
            anchorY="middle"
            font="/fonts/Geist-Regular.ttf"
            rotation={[-0.1, 0, 0]}
          >
            Time Series
          </Text>

          <Text
            position={[-3, 0, -2]}
            fontSize={0.4}
            color="#c084fc"
            anchorX="center"
            anchorY="middle"
            font="/fonts/Geist-Regular.ttf"
          >
            Python
          </Text>

          <Text
            position={[3, -1, -3]}
            fontSize={0.4}
            color="#14b8a6"
            anchorX="center"
            anchorY="middle"
            font="/fonts/Geist-Regular.ttf"
          >
            Power BI
          </Text>

          {/* Additional Skills */}
          <Text
            position={[0, -2, 2]}
            fontSize={0.4}
            color="#c084fc"
            anchorX="center"
            anchorY="middle"
            font="/fonts/Geist-Regular.ttf"
          >
            Statistical Modeling
          </Text>

          <Text
            position={[-2, 1, 3]}
            fontSize={0.4}
            color="#14b8a6"
            anchorX="center"
            anchorY="middle"
            font="/fonts/Geist-Regular.ttf"
          >
            Databricks
          </Text>

          <Text
            position={[1, -3, -2]}
            fontSize={0.4}
            color="#c084fc"
            anchorX="center"
            anchorY="middle"
            font="/fonts/Geist-Regular.ttf"
          >
            SQL
          </Text>
        </group>
      </group>
    </Float>
  )
}

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* 3D Data Visualization Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <DataParticles />
          <Environment preset="city" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      {/* Content with backdrop filter for better readability */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 backdrop-blur-sm bg-background/30 p-4 rounded-full inline-block"
        >
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-teal-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">
              SS
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="backdrop-blur-sm bg-background/30 p-6 rounded-xl max-w-2xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600"
          >
            Sneha Saha
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl mb-8 text-foreground"
          >
            Decision Scientist | Data Analytics Expert
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700"
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Explore My Work <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          opacity: scrollY > 100 ? 0 : 1,
        }}
        transition={{
          y: { repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" },
          opacity: { duration: 0.3 },
        }}
      >
        <ArrowDown className="h-6 w-6 text-foreground" />
      </motion.div>
    </section>
  )
}

