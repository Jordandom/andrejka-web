import { Aurora } from "@/components/layout/aurora"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { WobbleCard } from "@/components/ui/wobble-card"
import Image from "next/image"

const words = `Homeopatický lék nese léčivou energii, která postupně nastolí rovnováhu a harmonii na psychické, emocionální i fyzické úrovni. Homeopatie odstraňuje vnitřní sklon člověka k nemoci, a proto úspěšně léčí nemoci, s kterými si klasická medicína neví rady nebo je pouze potlačuje, např. alergie, sníženou imunitu, astma, ekzémy, migrény, psychické potíže, deprese, syndrom chronické únavy, chronické a opakované záněty, funkční neplodnost žen, chronické gynekologické potíže, a další.
`

export default function Page() {
  return (
    <div className="p-4 flex flex-col gap-16">
      <div className="flex flex-col gap-16">
        <Aurora className="mt-20" heading="Homeopatie" />
        <TextGenerateEffect words={words} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className="flex flex-col gap-4"
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Dějiny homeopatie
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Kořeny homeopatické léčby sahají hluboko do minulosti. Jedna z
              osobností osobností, jejichž dílo mělo zásadní vliv na utváření
              moderní homeopatie. 460−377 př. n. l., Hippokratés
            </p>
          </div>
          <Image
            src="/images/hippocrates_rubens.webp"
            width={500}
            height={500}
            alt="Hippocrates Rubens"
            className="block lg:absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Účinky homeopatie
          </h2>
          <div className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Uzdravení s homeopatií je:
            <ul className="ml-4 list-disc list-inside text-white">
              <li>vždy jemné</li>
              <li>často rychlé</li>
              <li>ve většině případů úplné</li>
            </ul>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Homeopatie
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Homeopatie Výraz Homeopatie je odvozený od dvou řeckých slov:
              homoios (stejný, podobný) a pathos (nemoc, bolest, vášeň).
            </p>
          </div>
          <Image
            src="/images/mandala.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </div>
  )
}
