"use client"

import { BackgroundGradient } from "@/components/ui/background-gradient"
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"
import Image from "next/image"

const locations = [
  {
    title: "Individuální terapie",
    subtitle: "Jeseník",
    imageSrc: "/images/poliklinika-ordinace.webp",
    imageAlt: "Ordinace Poliklinika",
    address: "Jesenická poliklinika s.r.o. Dukelská 456/13 790 01 Jeseník",
    mapLink: "https://maps.app.goo.gl/qQDRfG9KgYtwrn8W8",
    mapEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.523137499083!2d17.197826676845413!3d50.22613100348954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711f20419506059%3A0x81f13a4d40b3cb66!2sDukelsk%C3%A1%20456%2F13%2C%20790%2001%20Jesen%C3%ADk%201!5e0!3m2!1scs!2scz!4v1723486986297!5m2!1scs!2scz",
  },
  {
    title: "Individuální terapie",
    subtitle: "Praha",
    imageSrc: "/images/ordinace-poliklinika.webp",
    imageAlt: "Ordinace Poliklinika",
    address: "Nušlova 2258/2, 158 00 Praha 13-Stodůlky",
    mapLink: "https://maps.app.goo.gl/2w1ETtWURDSLS2Ri7",
    mapEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.835909896849!2d14.346424412404415!3d50.05190511586063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b95e90c87af07%3A0x6aeb29f12d7f2d31!2sNu%C5%A1lova%202258%2F2%2C%20158%2000%20Praha%2013-Stod%C5%AFlky!5e0!3m2!1scs!2scz!4v1723649330203!5m2!1scs!2scz",
  },
  {
    title: "Meditárna",
    subtitle: "Jeseník",
    imageSrc: "/images/meditarna.webp",
    imageAlt: "Meditárna",
    address: "Hotel Koruna Revoluční 141/2 79001 Jeseník",
    mapLink: "https://maps.app.goo.gl/fApcgjqqxZJppNW4A",
    mapEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.3885052248215!2d17.201321476845514!3d50.228646503308966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711f207006a2d35%3A0xea97cd683f4fa1dc!2sHotel%20Koruna!5e0!3m2!1scs!2scz!4v1723489249616!5m2!1scs!2scz",
  },
]

export const ContactAddress = () => {
  return (
    <div className="mx-auto px-10 flex flex-col gap-4">
      <BackgroundGradient
        containerClassName="w-full self-start"
        className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 flex gap-8 flex-col"
      >
        <div className="self-center font-bold text-base sm:text-3xl text-primary">
          Andrea Heckelová
        </div>
        <Image
          className="self-center"
          src="/images/mandala.webp"
          width={200}
          height={200}
          alt="Mandala"
          objectFit="cover"
          objectPosition="50% 50%"
        />
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-primary">
            <PhoneIcon />
            <a className="text-xl" href="tel:+420 602 588 541">
              +420 602 588 541
            </a>
          </div>
          <div className="flex items-center gap-2 text-primary">
            <MailIcon />
            <a className="text-xl" href="mailto:andrea.heckelova@email.cz">
              andrea.heckelova@email.cz
            </a>
          </div>
        </div>
      </BackgroundGradient>
      <div className="self-center gap-4 grid grid-cols-1 xl:grid-cols-3 w-full">
        {locations.map((location, index) => (
          <BackgroundGradient
            key={index}
            containerClassName="w-full self-start"
            className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 flex gap-8 flex-col"
          >
            <div className="self-center flex flex-col items-center font-bold text-base sm:text-3xl text-primary">
              <div>{location.title}</div>
              <div>{location.subtitle}</div>
            </div>
            <Image
              className="self-center rounded-full"
              src={location.imageSrc}
              width={200}
              height={200}
              alt={location.imageAlt}
              objectFit="cover"
              objectPosition="50% 50%"
            />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-primary">
                <MapPinIcon />
                <a className="text-xl" href={location.mapLink} target="_blank">
                  {location.address}
                </a>
              </div>
            </div>
            <iframe
              src={location.mapEmbedSrc}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </BackgroundGradient>
        ))}
      </div>
    </div>
  )
}
