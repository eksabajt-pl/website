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
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { MailPlus } from "lucide-react";
import StarsBox from "../starsBox/StarsBox";
export default function FeedbackCard() {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState("");
	useEffect(() => {
		const starContainers = document.querySelectorAll<HTMLElement>(".flex-row");
		starContainers.forEach(container => {
			const stars = container.querySelectorAll<HTMLElement>(".star");
			const handleClick = (event: Event) => {
				const star = event.currentTarget as HTMLElement;
				const value = parseInt(star.getAttribute("values") || "0") || 5;
				stars.forEach((s, index) => {
					s.style.color = index < value ? "gold" : "white";
					s.style.fill = index < value ? "gold" : "";
				});
			};

			stars.forEach(star => {
				star.addEventListener("click", handleClick);
			});

			return () => {
				stars.forEach(star => {
					star.removeEventListener("click", handleClick);
				});
			};
		});
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
			<Card className="max-w-120 min-h-90 flex flex-col gap-4 m-4">
				<CardHeader>
					<CardTitle>Ocena produktu</CardTitle>
					<CardDescription>Oceń nasz produkt, obsługę i cenę</CardDescription>
				</CardHeader>
				<CardContent className="gap-4 flex flex-col items-center">
					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								role="combobox"
								aria-expanded={open}
								className="w-[200px] justify-between"
							>
								{value
									? frameworks.find(framework => framework.value === value)
											?.label
									: "Wybierz pakiet"}
								<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-[220px] p-0">
							<Command>
								<CommandInput placeholder="Szukaj..." />
								<CommandList>
									<CommandEmpty>No framework found.</CommandEmpty>
									<CommandGroup>
										{frameworks.map(framework => (
											<CommandItem
												key={framework.value}
												value={framework.value}
												onSelect={currentValue => {
													setValue(currentValue === value ? "" : currentValue);
													setOpen(false);
												}}
											>
												<Check
													className={cn(
														"mr-2 h-4 w-4",
														value === framework.value
															? "opacity-100"
															: "opacity-0"
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
					<div className="flex flex-col items-center text-center">
						<p className="m-2">Oceń jakość wykonania swojego projektu</p>
						<StarsBox />
						<hr className="m-2 w-60" />
						<p className="w-full m-2">
							W jakim stopniu cena była odpowiednia do jakości?
						</p>
						<StarsBox />
						<hr className="m-2 w-60" />
						<p className="m-2">Jak oceniasz całokształt naszej usługi?</p>
						<StarsBox />
					</div>
					<Textarea placeholder="Opisz swoje doświadczenia z naszą usługą..." />
				</CardContent>
				<CardFooter>
					<p className="text-stone-600 text-sm">
						Recenzje zostaną dodane na stronę główną, po sprawdzeniu czy są
						zgodne z regulaminem. Zapoznaj się z regulaminem na{" "}
						<b>eksabajt.pl/regulamin</b>
					</p>
					<div className="w-full h-10 flex items-center justify-end">
						<Button className="cursor-pointer">
							<MailPlus />
							Wyślij
						</Button>
					</div>
				</CardFooter>
			</Card>
		</>
	);
}
