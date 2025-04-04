import TextGradient from "@/components/text/TextGradient";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { AtSignIcon, Link } from "lucide-react";
import { PropsWithChildren } from "react";
import Fade from "@/components/pearls/Fade";
import { TeamMemberType } from "../types/TeamMemberType";

interface TeamMemberFieldProps extends PropsWithChildren {
  href: string;
}

function TeamMemberField({ href, children }: TeamMemberFieldProps) {
  return (
    <a href={href} className="underline flex flex-row gap-2 items-center">
      {children}
    </a>
  );
}

export default function TeamMemberCard({
  name,
  title,
  website,
  motto,
  email,
  profilePicture,
}: TeamMemberType) {
  return (
    <>
      <Fade direction="up" triggerOnce>
        <div className="w-70 h-full p-4 hover:scale-110 duration-200">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex justify-center">
                <TextGradient>
                  <p className="text-2xl">{name}</p>
                </TextGradient>
              </CardTitle>
              <CardDescription className="flex justify-center">
                <p className="text-md pb-2">{title}</p>
              </CardDescription>
              <CardContent className="flex justify-center ">
                {/* tu bendom zdjecia :D */}
                <Image
                  width={160}
                  height={160}
                  alt={name + "'s profile picture"}
                  src={profilePicture || "/team/member.png"}
                  className="aspect-square object-contain p-0 bg-green-600/20 rounded-full "
                />
              </CardContent>
              <CardDescription className="flex flex-col items-center justify-center mt-2 gap-1">
                {motto && (
                  <q className="text-md pb-2 text-center text-md">{motto}</q>
                )}
                {email && (
                  <TeamMemberField href={"mailto:" + email}>
                    <AtSignIcon size={16} />
                    {email}
                  </TeamMemberField>
                )}
                {website && (
                  <TeamMemberField href={website}>
                    <Link size={16} />
                    {website.replace(/(^\w+:|^)\/\//, "")}
                  </TeamMemberField>
                )}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </Fade>
    </>
  );
}
