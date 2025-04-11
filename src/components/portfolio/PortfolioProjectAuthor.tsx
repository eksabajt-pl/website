import { UserIcon } from "lucide-react";

interface PortfolioProjectAuthor {
  author: string;
  showIcon?: boolean;
}

export function PortfolioProjectAuthor({
  author,
  showIcon = true,
}: PortfolioProjectAuthor) {
  return (
    <div className="flex flex-row gap-2">
      {showIcon && <UserIcon />}
      <p>{author} z eksabajt.pl</p>
    </div>
  );
}
