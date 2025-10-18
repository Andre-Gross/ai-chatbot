"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type TeacherModeContextType = {
  isTeacherModeActive: boolean;
  toggleTeacherMode: () => void;
};

const TeacherModeContext = createContext<TeacherModeContextType | undefined>(undefined);

export function TeacherModeProvider({ children }: { children: ReactNode }) {
  const [isTeacherModeActive, setIsTeacherModeActive] = useState(false);

  const toggleTeacherMode = () => {
    setIsTeacherModeActive(!isTeacherModeActive);
  };

  return (
    <TeacherModeContext.Provider value={{ isTeacherModeActive, toggleTeacherMode }}>
      {children}
    </TeacherModeContext.Provider>
  );
}

export function useTeacherMode() {
  const context = useContext(TeacherModeContext);
  if (context === undefined) {
    throw new Error("useTeacherMode must be used within a TeacherModeProvider");
  }
  return context;
}