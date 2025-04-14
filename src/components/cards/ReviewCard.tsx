import { SelectProfile, SelectReview } from "@/db/types";
import { Card } from "../ui/card";
import ReviewStars from "../stars/ReviewStars";
import { twMerge } from "tailwind-merge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import {
  LucideBan,
  LucideHourglass,
  LucideMessageCircleQuestion,
  LucideVerified,
} from "lucide-react";

const ReviewVerifiedTooltip = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          {" "}
          <LucideVerified />
        </TooltipTrigger>
        <TooltipContent>
          Zatwierdzono treść jako zgodną z regulaminem
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const ReviewRejectedTooltip = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          {" "}
          <LucideBan />
        </TooltipTrigger>
        <TooltipContent>
          Treść odrzucona, niezgodna z regulaminem
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const ReviewNotVerifiedTooltip = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          {" "}
          <LucideHourglass />
        </TooltipTrigger>
        <TooltipContent>Oczekiwanie na zatwierdzenie treści</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

{
  /*<div className="flex-1 h-full min-w-[0rem] w-[85vw] max-w-lg   bg-neutral-200/20  dark:bg-neutral-800/40 backdrop-blur-sm border-1 dark:border-neutral-400/40 border-neutral-400/30 m-2 rounded-2xl p-4 sm:p-6 md:p-8  flex flex-col gap-1  ">
		</div>*/
}
export default function ReviewCard({
  className,
  profile,
  review,
}: {
  className?: string;
  profile: SelectProfile;
  review: SelectReview;
}) {
  const { content, stars, createdAt, status } = review;
  const { fullName, avatarUrl } = profile;
  return (
    <Card
      className={twMerge("flex flex-col p-4 gap-2 overflow-hidden ", className)}
    >
      <div className="flex flex-row justify-start sm:justify-between">
        <div className="font-bold w-[100%] max-w-md text-md gap-2 flex-wrap flex sm:text-lg md:xl items-center">
          {/*eslint-disable-next-line @next/next/no-img-element*/}
          <img
            src={avatarUrl}
            className="rounded-full hidden sm:flex w-8 h-8 aspect-square object-cover"
            alt={fullName + "'s profile picture"}
          />
          <span>{fullName}</span>
        </div>
        <ReviewStars count={stars} />
      </div>
      <div className="wrap-anywhere text-base sm:text-md md:text-lg overflow-hidden text-wrap flex-1 items-center flex ">
        {content}
      </div>
      <div className="flex flex-row gap-2 justify-between items-center">
        <p className="text-muted-foreground text-sm">
          {new Date(createdAt).toLocaleDateString()}
        </p>
        {status === "verified" ? (
          <ReviewVerifiedTooltip />
        ) : status === "pending" ? (
          <ReviewNotVerifiedTooltip />
        ) : status === "rejected" ? (
          <ReviewRejectedTooltip />
        ) : (
          <LucideMessageCircleQuestion />
        )}
      </div>
    </Card>
  );
}
