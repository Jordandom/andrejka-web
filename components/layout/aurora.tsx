"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import React from "react"

export function Aurora({
  heading,
  subheading,
  className,
}: {
  heading: string
  subheading?: string
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className={
        (cn(
          "relative  flex flex-col gap-4 items-center justify-center w-full px-4"
        ),
        className)
      }
    >
      <div className="flex flex-col">
        <div className="flex flex-col items-center gap-10">
          <div className="text-3xl text-ring md:text-7xl font-bold dark:text-white text-center">
            {heading}
          </div>
          <div className="text-3xl text-ring md:text-7xl font-bold dark:text-white text-center w-[50%] border-b border-ring" />
          {subheading && (
            <div className="text-3xl text-ring md:text-7xl font-bold dark:text-white text-center">
              {subheading}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
