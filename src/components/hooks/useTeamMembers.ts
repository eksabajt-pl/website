import { TeamMemberType } from "../types/TeamMemberType"

const teamMembers: TeamMemberType[] = [
    { name: "Robert", email:"dev@rplawski.pl", title: "Fullstack developer", website:"https://robertplawski.pl", motto: 'Nic w życiu jest niemożliwe', profilePicture:"/team/robert.webp"},
    { name: "Dawid", title: "---", motto:"Lorem ipsum dolor sit amet"},
    { name: "Karol", title: "Business manager", motto:"Lorem ipsum dolor sit amet" },
    { name: "Wojtek", title: "---", motto:"Lorem ipsum dolor sit amet" },
    { name: "Maciek", title: "---", motto:"Lorem ipsum dolor sit amet", website:"https://mpotrz.pl"},

]

export default function useTeamMembers() {
    return {teamMembers}
}