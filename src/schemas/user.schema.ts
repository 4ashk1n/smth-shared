import { z } from "zod";

export const UserSchema = z.object({
    id: z.string(),
    username: z.string(),
    firstname: z.string(),
    lastname: z.string(),
    avatar: z.string()
});

export const CreateUserSchema = z.object({
  username: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  avatar: z.string(),
});

export const UpdateUserSchema = z.object({
  username: z.string().optional(),
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  avatar: z.string().optional(),
});
