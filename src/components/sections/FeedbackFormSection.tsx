"use client";

import { Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Section from "./Section";
import SectionHeading from "../text/SectionHeading";
import React from "react";
import { Separator } from "@/components/ui/separator"


const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export default function PricingSection() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Section id="Pricing">
      <SectionHeading normal="Podoba ci się usługa?" emphasis="Oceń nas" />

      <div className="w-120 h-90 flex flex-col gap-4 items-center justify-center">
        <div className="w-full h-10 flex items-center justify-end">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <Input type="text" placeholder="Imię" />
        <Input type="text" placeholder="Nazwa firmy" />

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? frameworks.find((framework) => framework.value === value)?.label
                : "Select framework..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search framework..." />
              <CommandList>
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === framework.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {framework.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        
        <Separator />

        <div className="flex flex-row gap-4 justify-center">
          Słaba cena
          <RadioGroup defaultValue="option-one" className="flex flex-row">
            <div className="flex flex-col gap-2 items-center ">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">1</Label>
            </div>
            <div className="flex flex-col gap-2 items-center ">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">2</Label>
            </div>
            <div className="flex flex-col gap-2 items-center ">
              <RadioGroupItem value="option-three" id="option-three" />
              <Label htmlFor="option-two">3</Label>
            </div>
            <div className="flex flex-col gap-2 items-center ">
              <RadioGroupItem value="option-four" id="option-four" />
              <Label htmlFor="option-two">4</Label>
            </div>
            <div className="flex flex-col gap-2 items-center ">
              <RadioGroupItem value="option-five" id="option-five" />
              <Label htmlFor="option-two">5</Label>
            </div>
          </RadioGroup>
          Dobra cena
        </div>

        <Textarea />
        <div className="w-full h-10 flex items-center justify-end">
          <Button> Wyślij wiadomość </Button>
        </div>
      </div>
    </Section>
  );
}
