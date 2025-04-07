"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useEffect } from "react";
import { RadioGroupForm } from "../RadioGroup/RadioGroupForm";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { Textarea } from "@/components/ui/textarea"
import { MailPlus } from "lucide-react";

export default function FeedbackCard() {
      const [open, setOpen] = React.useState(false);
      const [value, setValue] = React.useState("");
        useEffect(() => {
            const stars = document.querySelectorAll<HTMLElement>(".star");
            const handleClick = (event: Event) => {
            const star = event.currentTarget as HTMLElement;
            const value = parseInt(star.getAttribute("values") || "0") || 5;
            stars.forEach((s, index) => {
                s.style.color = index < value ? "gold" : "white";
            });
            };

            stars.forEach((star) => {
            star.addEventListener("click", handleClick);
            });

            return () => {
            stars.forEach((star) => {
                star.removeEventListener("click", handleClick);
            });
            };
        }, []);

        const frameworks = [
            {
              value: "Design",
              label: "Design - 0 PLN",
            },
            {
              value: "Landing Page",
              label: "Landing Page - 299 PLN",
            },
            {
              value: "Startup",
              label: "Startup - 699 PLN",
            },
            {
              value: "Professional",
              label: "Professional - 999 PLN",
            },
            
          ];
          
  return (
    <>
      
        <Card className="w-120 min-h-90 flex flex-col gap-4">
          <CardHeader>
            <CardTitle>Ocena produktu</CardTitle>
            <CardDescription>Oceń nasz produkt, obsługę i cenę</CardDescription>
          </CardHeader>
          <CardContent className="gap-4 flex flex-col items-center">
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
                : "Wybierz pakiet..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[220px] p-0">
            <Command>
              <CommandInput placeholder="Wyszukaj pakiet..." />
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
          <RadioGroupForm
            start={"Słaba cena"}
            end={"Dobra cena"}
          />
          <RadioGroupForm
            start={"Słaba jakość"}
            end={"Dobra jakość"}
            
          />
          <p>Jak oceniasz całokształt naszej usługi?</p>
            <div className="flex flex-row">  
              <Star className="star" values="1" />
              <Star className="star" values="2" />
              <Star className="star" values="3" />
              <Star className="star" values="4" />
              <Star className="star" values="5" />
            </div>
            
            <Textarea
            placeholder="Opisz swoje doświadczenia z naszą usługą..."
            />
          </CardContent>
          <CardFooter>
          <div className="w-full h-10 flex items-center justify-end">
            <Button className="cursor-pointer"><MailPlus />Wyślij</Button>
            </div>
          </CardFooter>
        </Card>
      
    </>
  );
}
