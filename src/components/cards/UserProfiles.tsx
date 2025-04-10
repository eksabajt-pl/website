"use server";
import { getUserProfiles } from "@/db/profile/getUserProfiles";
import UserProfileCard from "./UserProfileCard";

export default async function UserProfiles() {
  const profiles = await getUserProfiles();
  return profiles.map((profile, index) => (
    <UserProfileCard key={index} profile={profile} />
  ));
}
