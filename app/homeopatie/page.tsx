import { Aurora } from "@/components/layout/aurora"
import { WobbleCard } from "@/components/ui/wobble-card"
import Image from "next/image"

export default function Page() {
  return (
    <div className="p-8 flex flex-col gap-16">
      <div className="flex flex-col gap-16">
        <Aurora className="mt-20" heading="Homeopatie" />
        <div className="text-[#FA7299] text-2xl font-bold text-center">
          Homeopatický lék nese léčivou energii, která postupně nastolí
          rovnováhu a harmonii na psychické, emocionální i fyzické úrovni.
          Homeopatie odstraňuje vnitřní sklon člověka k nemoci, a proto úspěšně
          léčí nemoci, s kterými si klasická medicína neví rady nebo je pouze
          potlačuje, např. alergie, sníženou imunitu, astma, ekzémy, migrény,
          psychické potíže, deprese, syndrom chronické únavy, chronické a
          opakované záněty, funkční neplodnost žen, chronické gynekologické
          potíže, a další.
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-[#F3407A] min-h-[500px] lg:min-h-[300px]"
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col justify-center gap-4 items-center lg:items-start">
            <div className="w-full lg:max-w-xs">
              <h2 className="text-center lg:text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
                Dějiny homeopatie
              </h2>
              <p className="mt-4 text-center lg:text-left text-xl text-neutral-200">
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
              className="block lg:absolute -right-4 lg:-right-[30%] xl:-right-[10%] grayscale filter -bottom-10 object-contain rounded-2xl"
            />
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 bg-[#F3407A] min-h-[300px]">
          <h2 className="text-center lg:text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
            Účinky homeopatie
          </h2>
          <div className="mt-4 max-w-[26rem] text-left text-xl text-neutral-200">
            Uzdravení s homeopatií je:
            <ul className="ml-4 list-disc list-inside text-white">
              <li>vždy jemné</li>
              <li>často rychlé</li>
              <li>ve většině případů úplné</li>
            </ul>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#E01E66] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="flex flex-col justify-center gap-4 items-center lg:items-start">
            <div className="max-w-sm md:max-w-lg">
              <h2 className="max-w-sm md:max-w-lg text-center lg:text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
                Výhody homeopatie
              </h2>
              <p className="mt-4 max-w-[26rem] text-center lg:text-left text-xl text-neutral-200">
                Výhody homeopatie Možnosti a výhody homeopatie Homeopatie je
                diagnostická a léčebná metoda, která je ověřená více než 220
                lety praxe. Zároveň skýtá obrovský vývojový potenciál. Je
                schopna nejen obstát v konkurenci s nejmodernějšími odvětvími
                medicíny, ale také je velmi dobře doplňuje.
              </p>
            </div>
            <Image
              src="/images/mandala.webp"
              width={500}
              height={500}
              alt="linear demo image"
              className="block md:absolute -right-10 md:-right-[40%] lg:-right-[5%] -bottom-10 object-contain rounded-2xl"
            />
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#E01E66] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="flex flex-col justify-center gap-4 items-center lg:items-start">
            <div className="max-w-sm md:max-w-lg">
              <h2 className="max-w-sm md:max-w-lg text-center lg:text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
                Homeopatie
              </h2>
              <p className="mt-4 max-w-[26rem] text-center lg:text-left text-xl text-neutral-200">
                Homeopatie Výraz Homeopatie je odvozený od dvou řeckých slov:
                homoios (stejný, podobný) a pathos (nemoc, bolest, vášeň).
              </p>
            </div>
            <Image
              src="/images/homeopaticka-lecba.webp"
              width={500}
              height={500}
              alt="linear demo image"
              className="block lg:absolute -right-10 md:-right-[40%] lg:-right-[5%] -bottom-10 object-contain rounded-2xl"
            />
          </div>
        </WobbleCard>
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-[#F3407A] min-h-[500px] lg:min-h-[300px]"
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col justify-center gap-4 items-center lg:items-start">
            <div className="w-full lg:max-w-xs">
              <h2 className="text-center lg:text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
                Historie AKH
              </h2>
              <p className="mt-4 text-center lg:text-left text-xl text-neutral-200">
                1991 Zrodila se myšlenka o srozumitelné a snadno použitelné
                homeopatii. Provedli jsme první zkoušky homeopatických léků s
                nestandardní potencí. Během následného výzkumu, který probíhal
                za asistence řady lékařů, lékárníků a veterinářů, se potvrdila
                jejich vysoká účinnost.
              </p>
            </div>
            <Image
              src="/images/akh.webp"
              width={400}
              height={400}
              alt="Hippocrates Rubens"
              className="block  lg:absolute -right-4 lg:-right-[20%] xl:right-[5%] object-contain rounded-2xl"
            />
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 bg-[#F3407A] min-h-[300px]">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="max-w-80 text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
              Zakladatel AKH
            </h2>
            <Image
              className="self-center h-[250px] w-[250px] rounded-full"
              src="/images/zakladatel-akh.webp"
              width={250}
              height={250}
              alt="AKH Homeopatika"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </div>
        </WobbleCard>
      </div>
    </div>
  )
}
