"use client";

import { Textarea } from "@/components/ui/textarea";

import { useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Loader2, MailIcon, Send } from "lucide-react";
import { Label } from "../ui/label";
import SectionHeading from "../text/SectionHeading";
import Section from "./Section";
import contactForm from "@/lib/user-actions";
import { ContactFormData } from "@/schemas/contactFormSchema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";


export default function Contact() {
  const form = useFormContext<ContactFormData>();
  const {
    formState: { isSubmitting },
  } = form;
  return (
    <>
      <Section id="contact">
        <div className="flex flex-col w-full gap-16 py-32 justify-center items-center">
          <SectionHeading
            normal="Potrzebujesz strony?"
            emphasis="Zgłoś się do nas"
            description="Nasz zespół odpowiada bardzo szybko na każde zapytanie, jeżeli masz jakiekolwiek pytania śmiało pisz poprzez formularz kontaktowy, lub email: kontakt@eksabajt.pl"
          />

          <div className="flex flex-col gap-4 w-64 sm:w-86 sm:w-96 md:w-120">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(async (data: ContactFormData) => {
                  await contactForm(data);
                  form.reset({});
                })}
                className="space-y-8"
              >
                {/* Username Field */}
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Imię</FormLabel>
                      <FormControl>
                        <Input
                          className="input-focus"
                          placeholder="Wpisz swoje imię"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          className="input-focus"
                          placeholder="jan.kowalski@eksabajt.pl"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Select Field */}
                <FormField
                  control={form.control}
                  name="tier"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Wybierz usługę</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Inne" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cheap">Cheap</SelectItem>
                            <SelectItem value="landing">Landing</SelectItem>
                            <SelectItem value="startup">Startup</SelectItem>
                            <SelectItem value="professional">
                              Professional
                            </SelectItem>
                            <SelectItem value="other">Inne</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Textarea Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Wiadomość</FormLabel>
                      <FormControl>
                        <Textarea
                          className="input-focus"
                          placeholder="Miejsce na twoją wiadomość..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col sm:flex-row gap-4 ">
                  <div className="flex  items-center justify-start flex-8/10">
                    <Label>
                      <MailIcon /> kontakt@eksabajt.pl
                    </Label>
                  </div>
                  <div className="flex items-center justify-end flex-2/10">
                    <Button className="flex-1 cursor-pointer" type="submit">
                      {!isSubmitting ? (
                        <>
                          <Send />
                          Wyślij
                        </>
                      ) : (
                        <Loader2 className="animate-spin" />
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </Section>
    </>
  );
}
