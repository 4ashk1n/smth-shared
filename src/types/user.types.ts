import z from "zod";
import { UserSchema } from "../schemas/user.schema";

export type User = z.infer<typeof UserSchema>;
export type UserCreate = z.infer<typeof UserSchema>;
export type UserUpdate = z.infer<typeof UserSchema>;