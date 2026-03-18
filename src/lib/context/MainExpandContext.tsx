"use client";

import { createContext, useContext, useState } from "react";

// types
import { TMainExpand } from "@/types";

interface IMainExpandContext {
  activeSection: TMainExpand;
  setActiveSection: (value: TMainExpand) => void;
}

const MainExpandContext = createContext<IMainExpandContext | null>(null);

export function MainExpandProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<TMainExpand>("none");

  return (
    <MainExpandContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </MainExpandContext.Provider>
  );
}

export function useMainExpand() {
  const context = useContext(MainExpandContext);
  if (!context) {
    throw new Error("useMainExpand must be used within MainExpandProvider");
  }
  return context;
}
