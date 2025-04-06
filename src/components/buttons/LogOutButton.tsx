import { LucideLogOut } from "lucide-react";
import HeaderButton from "./HeaderButton";
import { signout } from "@/lib/auth-actions";
export default function LogOutButton() {
  return (
    <HeaderButton onClick={signout} aria-label="Log out button">
      <LucideLogOut />
    </HeaderButton>
  );
}
