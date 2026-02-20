import z from "zod";
import { CreateUserSchema, UpdateUserSchema, UserSchema } from "../schemas/user.schema";

export type User = z.infer<typeof UserSchema>;
export type UserCreate = z.infer<typeof CreateUserSchema>;
export type UserUpdate = z.infer<typeof UpdateUserSchema>;
