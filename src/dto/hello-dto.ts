import { z } from "express-zod-api";

export const HelloRequestSchema = z.object({
  name: z.string(),
});

export type HelloRequest = z.infer<typeof HelloRequestSchema>;

export const HelloResponseSchema = z.object({
  greetings: z.string(),
});

export type HelloResponse = z.infer<typeof HelloResponseSchema>;
