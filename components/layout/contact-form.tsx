"use client"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { MailIcon } from "lucide-react"
import { useForm } from "react-hook-form"

const formSchema = z.object({
  access_key: z.string(),
  jmeno_prijmeni: z.string().min(5, {
    message: "Jméno a příjmení musí mít alespoň 5 znaků.",
  }),
  email: z.string().optional(),
  telefon: z.string().min(9, {
    message: "Telefon musí mít alespoň 9 znaků.",
  }),
  poznamka: z.string().optional(),
})

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      access_key: process.env.NEXT_PUBLIC_WEB3_FORM,
      jmeno_prijmeni: "",
      email: "",
      telefon: "",
      poznamka: "",
    },
  })

  const { reset } = form

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true)

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        const json = await response.json()
        if (json.success) {
          toast.success("Děkuji za zprávu!")
          reset()
        }
      })
      .catch((error) => {
        console.log(error)
        toast.error("Něco se nepovedlo. Zkuste to prosím znovu.")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div className="self-center w-full px-2 lg:max-w-[850px]">
      <div
        style={{
          background:
            "linear-gradient(180deg, var(--fuchsia-100), var(--fuchsia-200)",
        }}
        className="flex w-full flex-col items-center gap-8 relative p-10 rounded-xl"
      >
        <div className="text-primary font-bold text-3xl">
          Kontaktní formulář
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full flex-col items-stretch gap-8"
          >
            <div className="flex flex-col items-stretch gap-4">
              <FormField
                control={form.control}
                name="jmeno_prijmeni"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-start gap-4 rounded-md border border-primary p-4">
                    <FormLabel className="text-primary">
                      Jméno a příjmení
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="text-blue"
                        placeholder="Jméno a příjmení"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex border-primary flex-col items-start gap-4 rounded-md border p-4">
                    <FormLabel className="text-primary">Email</FormLabel>
                    <FormControl>
                      <Input
                        className="text-blue"
                        placeholder="Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="telefon"
                render={({ field }) => (
                  <FormItem className="flex border-primary flex-col items-start gap-4 rounded-md border p-4">
                    <FormLabel className="text-primary">Telefon</FormLabel>
                    <FormControl>
                      <Input
                        className="text-blue"
                        placeholder="Telefon"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="poznamka"
                render={({ field }) => (
                  <FormItem className="flex border-primary flex-col items-start gap-4 rounded-md border p-4">
                    <FormLabel className="text-primary">Poznámka</FormLabel>
                    <FormControl>
                      <Textarea
                        className="text-blue"
                        placeholder="Poznámka"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <Button className="text-2xl" variant="default" type="submit">
              {isLoading ? (
                <Spinner />
              ) : (
                <div className="flex text-white items-center gap-8">
                  Odeslat <MailIcon />
                </div>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
