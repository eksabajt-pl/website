import BentoCard from "@/components/cards/BentoCard";
import ManageUserProfiles from "@/components/cards/ManageUserProfiles";

export default function Page() {
  return (
    <div className="grid auto-rows-[22rem] auto-cols-[15rem] max-w-4xl grid-cols-1 sm:grid-cols-2 gap-4 ">
      <BentoCard title="User management" className="row-span-2">
        <ManageUserProfiles />
      </BentoCard>
    </div>
  );
}
