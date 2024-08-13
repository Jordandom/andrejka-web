import { Meteors } from "@/components/ui/meteors"
import React from "react"

const meteorsCardData = [
  {
    quotes: [
      "Věřím, že co zaséváme - to sklízíme.",
      "Věřím v dokonalost přírody.",
      "Věřím, že dokonalost je sdílení toho co máme.",
      "Věřím, že když vím kdo jsem - vím co mám dělat.",
      "Věřím, že naše cesta vede skrze nás.",
      "Věřím, že když najdu cestu - je snadné pak po ní jít.",
    ],
    meteorsNumber: 35,
  },
  {
    quotes: [
      "Věřím, že nejrychlejší cestou ke štěstí je vděčnost.",
      "Věřím, že štěstí je vlákno správných rozhodnutí.",
      "Věřím, že správná rozhodnutí vychází ze srdce.",
      "Věřím, že cestou k srdci je modlitba a meditace.",
    ],
    meteorsNumber: 25,
  },
  {
    quotes: [
      "Věřím, že Bůh je v každém z nás.",
      "Věřím, že náš Bůh je láska.",
      "Věřím, že láska není souhlas a souznění, ale soucit, laskavost a pochopení.",
      "Věřím, že svoboda je cestou k radosti.",
      "Věřím, že radost je cesta ke kreativitě.",
      "Věřím  ... proto jsem šťastná",
    ],
    meteorsNumber: 30,
  },
]

export function MeteorsCard() {
  return (
    <div className="flex justify-center mx-auto flex-wrap gap-4">
      {meteorsCardData.map((card, index) => (
        <div key={index} className="w-full relative max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div
            style={{
              background:
                "linear-gradient(180deg, var(--fuchsia-100), var(--fuchsia-200)",
            }}
            className="relative shadow-xl border px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col items-start"
          >
            {card.quotes.map((quote, idx) => (
              <h1
                key={idx}
                className="font-bold text-xl text-primary mb-4 relative z-10"
              >
                {quote}
              </h1>
            ))}
            <Meteors number={card.meteorsNumber} />
          </div>
        </div>
      ))}
    </div>
  )
}
