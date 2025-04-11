"use client";
import { createContext, useState, ReactNode } from "react";

interface ExpandContextType {
  expandState: { [key: number]: boolean };
  setExpand: (id: number) => void;
}

export const newContext = createContext<ExpandContextType | undefined>(
  undefined
);

const ExpandProvider = ({ children }: { children: ReactNode }) => {
  const [expandState, setExpandState] = useState<{ [key: number]: boolean }>(
    {}
  );

  const setExpand = (id: number) => {
    setExpandState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <newContext.Provider value={{ expandState, setExpand }}>
      {children}
    </newContext.Provider>
  );
};
export default ExpandProvider;
