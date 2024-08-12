"use client"

import { BackgroundGradient } from "@/components/ui/background-gradient"
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"
import Image from "next/image"

const cardData = [
  {
    title: "Andrea Heckelová",
    image: "/images/mandala.webp",
    phone: "+420 602 588 541",
    email: "email",
  },
  {
    title: "Meditárna",
    image: "/images/meditarna.webp",
    address: "Dukelská 456/13, 790 01 Jeseník",
  },
]

export const ContactAddress = () => {
  return (
    <div className="self-center gap-4 grid grid-cols-1 xl:grid-cols-3 mx-auto px-10 w-full">
      <BackgroundGradient
        containerClassName="w-full self-start"
        className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 flex gap-8 flex-col"
      >
        <div className="self-center font-bold text-base sm:text-3xl text-primary">
          Individuální terapie
        </div>
        <Image
          className="self-center rounded-full"
          src="/images/ordinace-poliklinika.webp"
          width={200}
          height={200}
          alt="Ordinace Poliklinika"
          objectFit="cover"
          objectPosition="50% 50%"
        />
        <div className="flex flex-col gap-2">
          <div className="text-base sm:text-xl items-center flex gap-2 text-primary">
            <MapPinIcon />
            <a href="https://maps.app.goo.gl/qQDRfG9KgYtwrn8W8" target="_blank">
              Jesenická poliklinika s.r.o. Dukelská 456/13 790 01 Jeseník
            </a>
          </div>
          <div className="text-base sm:text-xl flex gap-2 text-primary">
            <MailIcon />
            <a href="mailto:someone@example.com">someone@example.com</a>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.523137499083!2d17.197826676845413!3d50.22613100348954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711f20419506059%3A0x81f13a4d40b3cb66!2sDukelsk%C3%A1%20456%2F13%2C%20790%2001%20Jesen%C3%ADk%201!5e0!3m2!1scs!2scz!4v1723486986297!5m2!1scs!2scz"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </BackgroundGradient>
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
          <div className="text-base sm:text-xl items-center flex gap-2 text-primary">
            <PhoneIcon />
            <a href="tel:+420 602 588 541">+420 602 588 541</a>
          </div>
          <div className="text-base sm:text-xl flex gap-2 text-primary">
            <MailIcon />
            <a href="mailto:someone@example.com">someone@example.com</a>
          </div>
        </div>
      </BackgroundGradient>
      <BackgroundGradient
        containerClassName="w-full self-start"
        className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 flex gap-8 flex-col"
      >
        <div className="self-center font-bold text-base sm:text-3xl text-primary">
          Meditárna
        </div>
        <Image
          className="self-center rounded-full"
          src="/images/meditarna.webp"
          width={200}
          height={200}
          alt="Meditárna"
          objectFit="cover"
          objectPosition="50% 50%"
        />
        <div className="flex flex-col gap-2">
          <div className="text-base sm:text-xl items-center flex gap-2 text-primary">
            <MapPinIcon />
            <a href="https://maps.app.goo.gl/qQDRfG9KgYtwrn8W8" target="_blank">
              Hotel Koruna Revoluční 141/2 79001 Jeseník
            </a>
          </div>
          <div className="text-base sm:text-xl flex gap-2 text-primary">
            <MailIcon />
            <a href="mailto:someone@example.com">someone@example.com</a>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.3885052248215!2d17.201321476845514!3d50.228646503308966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711f207006a2d35%3A0xea97cd683f4fa1dc!2sHotel%20Koruna!5e0!3m2!1scs!2scz!4v1723489249616!5m2!1scs!2scz"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </BackgroundGradient>
    </div>
  )
}
