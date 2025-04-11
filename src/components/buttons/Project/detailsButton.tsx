"use client";
import { ChevronDown } from "lucide-react";
import { useContext } from "react";
import { newContext } from "@/components/providers/ExpandProvider";

type ProjectType = {
  ProjectId: number;
};

const DetailsButton = ({ ProjectId }: ProjectType) => {
  const context = useContext(newContext);

  if (!context) {
    return null;
  }

  const { expandState, setExpand } = context;

  const isExpanded = expandState[ProjectId] ?? false; // sprawdź, czy projekt jest rozwinięty

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center">
        <div className="font-bold text-lg">Settings</div>

        <button onClick={() => setExpand(ProjectId)}>
          <ChevronDown />
        </button>
      </div>
      {isExpanded && (
        <>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </>
      )}
    </div>
  );
};

export default DetailsButton;
