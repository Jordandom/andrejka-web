import { Aurora } from "@/components/layout/aurora"
import { AuroraBackground } from "@/components/layout/aurora-background"
import { MeteorsCard } from "@/components/layout/meteors-card"
import { MovingCards } from "@/components/layout/moving-cards"
import { ContactForm } from "@/components/layout/contact-form"
import { ContactAddress } from "@/components/layout/contact-address"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <AuroraBackground>
        {/* TODO: */}
        {/* <Navbar /> */}
        <Aurora />
        <MovingCards />
        <MeteorsCard />
        <ContactForm />
        <ContactAddress />
      </AuroraBackground>
    </main>
  )
}
