import { LucideLogOut } from "lucide-react";
import HeaderButton from "./HeaderButton";

export default function LogOutButton() {
  return (
    <HeaderButton>
      <a href="/signout" aria-label="Log out button">
        <LucideLogOut />
      </a>
    </HeaderButton>
  );
}
