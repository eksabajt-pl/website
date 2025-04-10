import { MailPlus } from "lucide-react";
import HeaderButton from "./HeaderButton";

type ContactIconProps = {
  className?: string;
};

export default function ContactIconButton({ className }: ContactIconProps) {
  return (
    <a href="#contact" aria-label="Contact us link">
      <HeaderButton aria-label="Contact us button" className={className}>
        <MailPlus />
      </HeaderButton>
    </a>
  );
}
