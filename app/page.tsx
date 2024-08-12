import { Aurora } from "@/components/layout/aurora"
import { MovingCards } from "@/components/layout/moving-cards"
import { Navbar } from "@/components/layout/navbar"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { ContactForm } from "@/components/ui/contact-form"
import { MeteorsCard } from "@/components/ui/meteors-card"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <AuroraBackground>
        <Navbar />
        <Aurora />
        <MovingCards />
        <MeteorsCard />
        <ContactForm />
      </AuroraBackground>
    </main>
  )
}
