"use client";

import { Button } from "./ui/button";
import { useState } from "react";
import { teacherPrompt } from "@/lib/ai/prompts";

export function TeacherModeToggle() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setIsActive(!isActive)}
      className={`size-8 rounded-full transition-colors duration-200 ${
        isActive ? "bg-primary text-primary-foreground" : ""
      }`}
      title={isActive ? "Teacher Mode Active" : "Teacher Mode Inactive"}
    >
      🧑‍🏫
    </Button>
  );
}