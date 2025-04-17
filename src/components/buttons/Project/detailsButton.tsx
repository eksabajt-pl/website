"use client";
import { ChevronDown } from "lucide-react";
import { useContext } from "react";
import FormEditProject from "@/components/forms/FormEditProject";
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
    <>
      {!isExpanded ? (
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <div className="font-bold text-lg">Settings</div>
            <button onClick={() => setExpand(ProjectId)}>
              <ChevronDown />
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <div className="font-bold text-lg">Settings</div>
              <button onClick={() => setExpand(ProjectId)}>
                <ChevronDown />
              </button>
            </div>
          </div>
          <FormEditProject ProjectId={ProjectId}></FormEditProject>
        </>
      )}
    </>
  );
};

export default DetailsButton;
