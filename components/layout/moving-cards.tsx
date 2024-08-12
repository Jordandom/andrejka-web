"use client"

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"

export function MovingCards() {
  return (
    <div className="rounded-md flex flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  )
}

const testimonials = [
  {
    quote: "Individuální terapie  Jeseník",
    name: "",
    title: "",
  },
  {
    quote: (
      <>
        Individuální terapie <br /> Praha
      </>
    ),
    name: "",
    title: "",
  },
  {
    quote: "Léčebné systémy",
    name: "",
    title: "",
  },
  {
    quote: "Celostní medicína",
    name: "",
    title: "",
  },
  {
    quote: "Duševní a mentální rovnováha",
    name: "",
    title: "",
  },
  {
    quote: "Homeopatie",
    name: "",
    title: "",
  },
]
