"use client"
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight"
import { motion } from "framer-motion"

export function BgDot() {
  return (
    <HeroHighlight>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <Highlight>Věřím, že co zaséváme - to sklízíme.</Highlight>
        <Highlight>Věřím v dokonalost přírody.</Highlight>
        <Highlight>Věřím, že dokonalost je sdílení toho co máme.</Highlight>
        <Highlight>Věřím, že když vím kdo jsem - vím co mám dělat.</Highlight>

        <Highlight className="text-black dark:text-white">
          {/* <div>Věřím, že co zaséváme - to sklízíme.</div>
          <div>Věřím v dokonalost přírody.</div>
          <div>Věřím, že dokonalost je sdílení toho co máme.</div> */}
          <div>Věřím, že když vím kdo jsem - vím co mám dělat.</div>
          <div>Věřím, že naše cesta vede skrze nás.</div>
          <div>Věřím, že když najdu cestu - je snadné pak po ní jít.</div>
        </Highlight>
      </motion.div>
    </HeroHighlight>
  )
}
