import { z } from "zod";

export const UserSchema = z.object({
    id: z.string(),
    username: z.string(),
    firstname: z.string(),
    lastname: z.string(),
    avatar: z.string()
});