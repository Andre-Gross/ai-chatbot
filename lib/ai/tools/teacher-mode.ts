import { tool } from "ai";
import { z } from "zod";
import { teacherPrompt } from "../prompts";

export const teacherModeTool = tool({
  description: "Antwortet wie ein Lehrer (ELI5-Stil)",
  inputSchema: z.object({
    userInput: z.string(),
  }),
  execute: async ({ userInput }) => {
    return {
      role: "system",
      content: `${teacherPrompt}\n\nNutzerfrage: ${userInput}`,
    };
  },
});
