"use client";

import { useEffect, useState } from "react";
import { Input } from "../ui/input";

type Props = {
  ProjectId: number;
};
type ProjectData = {
  type: string;
  phase: string;
  price: number;
};

const FormEditProject: React.FC<Props> = ({ ProjectId }) => {
  const [data, setData] = useState<ProjectData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/get-project?id=${ProjectId}`);
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, [ProjectId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const updated = {
      id: ProjectId,
      type: formData.get("type"),
      phase: formData.get("phase"),
      price: Number(formData.get("price")),
    };

    const res = await fetch("/api/update-project", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });

    if (res.ok) {
      alert("sent");
    } else {
      alert("err");
    }
  };

  if (!data) return <div>Loading...</div>;

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <Input className="my-2 p-2" defaultValue={data.type || ""} name="type" />
      <Input
        className="my-2 p-2"
        defaultValue={data.phase || ""}
        name="phase"
      />
      <Input
        className="my-2 p-2"
        defaultValue={data.price || ""}
        name="price"
      />
      <Input className="my-2 p-2" type="submit" value="Zapisz zmiany" />
    </form>
  );
};

export default FormEditProject;
