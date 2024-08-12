"use client"

import { motion } from "framer-motion"
import React from "react"

export function Aurora() {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative mt-48 flex flex-col gap-4 items-center justify-center w-full px-4"
    >
      <div className="flex flex-col">
        <div className="flex flex-col items-center gap-10">
          <div className="text-3xl text-ring md:text-7xl font-bold dark:text-white text-center">
            Regenerační centrum Harmonie
          </div>
          <div className="text-3xl text-ring md:text-7xl font-bold dark:text-white text-center w-[50%] border-b border-ring" />
          <div className="text-3xl text-ring md:text-7xl font-bold dark:text-white text-center">
            Andrea Heckelová
          </div>
        </div>
      </div>
    </motion.div>
  )
}
