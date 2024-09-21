import { Aurora } from "@/components/layout/aurora"
import { AuroraBackground } from "@/components/layout/aurora-background"
import { MeteorsCard } from "@/components/layout/meteors-card"
import { MovingCards } from "@/components/layout/moving-cards"
import { ContactForm } from "@/components/layout/contact-form"
import { ContactAddress } from "@/components/layout/contact-address"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between gap-8">
      <Aurora
        className="mt-20"
        heading="Regenerační centrum Harmonie"
        subheading="Andrea Heckelová"
      />
      <MovingCards />
      <MeteorsCard />
      <ContactForm />
      <ContactAddress />
    </main>
  )
}
