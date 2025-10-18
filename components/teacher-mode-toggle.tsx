"use client";

import { Button } from "./ui/button";
import { useTeacherMode } from "./teacher-mode-provider";

export function TeacherModeToggle() {
  const { isTeacherModeActive, toggleTeacherMode } = useTeacherMode();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTeacherMode}
      className={`size-8 rounded-full transition-colors duration-200 ${
        isTeacherModeActive ? "bg-primary text-primary-foreground" : ""
      }`}
      title={isTeacherModeActive ? "Teacher Mode Active" : "Teacher Mode Inactive"}
    >
      🧑‍🏫
    </Button>
  );
}