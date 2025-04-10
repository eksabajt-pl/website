import { PropsWithChildren, useState } from "react";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface AsyncButtonProps extends PropsWithChildren {
  action: () => Promise<void>;
  className?: string;
}
export default function AsyncButton({
  action,
  children,
  className,
}: AsyncButtonProps) {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    setLoading(true);
    await action();
    setLoading(false);
  };

  return (
    <Button className={twMerge(className)} onClick={onClick}>
      {loading ? <Loader2 className="animate-spin" /> : children}
    </Button>
  );
}
