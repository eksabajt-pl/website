import { TeamMemberType } from "../types/TeamMemberType";

const teamMembers: TeamMemberType[] = [
  {
    name: "Robert",
    email: "dev@rplawski.pl",
    title: "Fullstack developer",
    website: "https://robertplawski.pl",
    motto: "Nic w życiu jest niemożliwe",
    profilePicture: "/team/robert.webp",
  },
  {
    name: "Dawid",
    email: "sudnickidawid@gmail.com",
    title: "Fullstack developer",
    website: "https://panwor.vercel.app",
    motto: "Lorem ipsum dolor sit amet",
    profilePicture: "/team/dawid.png",
  },
  {
    name: "Karol",
    email: "synowieckikarol7@gmail.com",
    title: "Business manager",
    website: "https://github.com/Syneczek",
    motto: "Nie mam problemu z kawą, mam problem bez niej",
    profilePicture: "/team/karol.png",
  },
  {
    profilePicture: "/team/wojciech.png",
    name: "Wojciech",
    title: "Senior prompt engineer",
    motto: "Lorem ipsum dolor sit amet",
    website: "https://w0jtases.github.io/",
    email: "wjtases@gmail.com",
  },
  {
    name: "Maciej",
    email: "maciekp371@gmail.com",
    title: "Product-focused developer",
    website: "https://mpotrz.pl",
    motto: "Lorem ipsum dolor sit amet",
    profilePicture: "/team/maciej.png",
  },
  {
    name: "Axel",
    email: "axel.kontakt.eksabajt@wp.pl",
    title: "Customer service manager",
    motto: "Mylisz niebo z gwiazdami odbitymi nocą na powierzchni stawu",
    profilePicture: "/team/axel.png",
  },
];

export default function useTeamMembers() {
  return { teamMembers };
}
