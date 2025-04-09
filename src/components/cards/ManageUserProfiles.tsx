"use server";
import { getUserProfiles } from "@/db/profile/getUserProfiles";
import UserProfileCard from "./UserProfileCard";
import { ManageUserProfileCardDecorator } from "./ManageUserProfileCardDecorator";

export default async function ManageUserProfiles() {
  const profiles = await getUserProfiles();
  return profiles.map((profile, index) => (
    <ManageUserProfileCardDecorator key={index} profile={profile}>
      <UserProfileCard className="border-0" profile={profile} />
    </ManageUserProfileCardDecorator>
  ));
}
