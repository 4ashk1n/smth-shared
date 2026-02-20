import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  avatar: z.string(),
  email: z.string().nullable(),
  provider: z.string().nullable(),
});

export const CreateUserSchema = z.object({
  username: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  avatar: z.string(),
  email: z.string().optional(),
  googleId: z.string().optional(),
  provider: z.string().default("local"),
});

export const UpdateUserSchema = z.object({
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  avatar: z.string().optional(),
});
