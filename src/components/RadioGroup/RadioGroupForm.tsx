import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-label";



export function RadioGroupForm({start, end}: {start: string, end: string}) {
    return(
<div className="flex flex-row gap-4 justify-center">
          <p>{start}</p>
          <RadioGroup  className="flex flex-row">
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
          <p>{end}</p>
        </div>
        );
}