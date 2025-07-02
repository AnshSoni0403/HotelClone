"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plane } from "lucide-react"

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 4000) // Extended to 4 seconds for airplane animation

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0">
            {/* Clouds */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 100, opacity: 0.3 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="absolute top-20 left-10 w-32 h-16 bg-white rounded-full opacity-20"
            />
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 200, opacity: 0.2 }}
              transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-40 right-20 w-24 h-12 bg-white rounded-full opacity-15"
            />

            {/* Stars */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          {/* Airplane Animation */}
          <motion.div
            initial={{ x: -200, y: 50, rotate: -15 }}
            animate={{ x: 300, y: -30, rotate: 5 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/3 z-10"
          >
            <Plane className="w-12 h-12 text-amber-400 transform rotate-45" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: 2 }}
              className="absolute -right-8 top-2 w-16 h-1 bg-gradient-to-r from-amber-400 to-transparent"
            />
          </motion.div>

          {/* Tourist Destination Silhouette */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.4, y: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="absolute bottom-0 right-0 w-64 h-32"
          >
            <svg viewBox="0 0 200 100" className="w-full h-full text-amber-600 opacity-30">
              <path
                d="M0,100 L20,80 L40,85 L60,70 L80,75 L100,60 L120,65 L140,50 L160,55 L180,40 L200,45 L200,100 Z"
                fill="currentColor"
              />
            </svg>
          </motion.div>

          {/* Main Content */}
          <div className="text-center relative z-20">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-3xl font-bold text-white">FA</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              Freelance Axis
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-xl md:text-2xl text-amber-200 font-light mb-2"
            >
              Grand Hotel
            </motion.p>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-sm md:text-base text-blue-200 font-light"
            >
              Journey to Excellence
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1.5 }}
              className="w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-8"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
