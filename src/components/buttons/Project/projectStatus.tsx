"use client";
import { useState } from "react";
type Items = {
  profile: {
    id: string;
    fullName: string | null;
    email: string;
    avatarUrl: string;
    userGroup: "admin" | "user" | null;
  };
  project: {
    id: number;
    created_at: Date | null;
    user_id: string | null;
    type: string | null;
    phase: string | null;
    link: string | null;
    price: number | null;
    email: string | null;
  };
};
const ProjectStatusButton = ({ item }: { item: Items }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen((val) => !val)}
        className="rounded-lg bg-background text-foreground p-2"
      >
        {open ? "Ukryj Status" : "Pokaż Status"}
      </button>
      <div>
        {open ? (
          <>
            <div>
              <strong>Project ID:</strong> {item.project.id}
            </div>
            <div>
              <strong>Created At:</strong>{" "}
              {item.project.created_at?.toString() || "Brak"}
            </div>
            <div>
              <strong>Type:</strong> {item.project.type || "Brak"}
            </div>
            <div>
              <strong>Phase:</strong> {item.project.phase || "Brak"}
            </div>
            <div>
              <strong>Link:</strong> {item.project.link || "Brak"}
            </div>
            <div>
              <strong>Price:</strong>{" "}
              {item.project.price !== null
                ? `${item.project.price} PLN`
                : "Brak"}
            </div>
            <div>
              <strong>Project Email:</strong> {item.project.email || "Brak"}
            </div>

            <div>
              <strong>Full Name:</strong> {item.profile.fullName || "Brak"}
            </div>
            <div>
              <strong>Email:</strong> {item.profile.email}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};
export default ProjectStatusButton;
