import { z } from 'zod';
import { SuccessResponseSchema } from './response.schema';

export const UserRoleSchema = z.enum([
  'user',
  'moderator',
  'admin',
]);

export const UserMetaSchema = z.object({
  id: z.uuid(),
  username: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  avatar: z.string(),
})

export const UserSchema = UserMetaSchema.extend({
  role: UserRoleSchema,
  email: z.email().nullable(),
  googleId: z.string().nullable(),
  refreshTokenHash: z.string().nullable(),
  provider: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const CreateUserSchema = z.object({
  username: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  avatar: z.string().default(''),
  role: UserRoleSchema.default('user'),
  email: z.string().email().nullable().optional(),
  googleId: z.string().nullable().optional(),
  refreshTokenHash: z.string().nullable().optional(),
  provider: z.string().nullable().default('local'),
});

export const UpdateUserSchema = CreateUserSchema.partial();

export const UserListSchema = z.array(UserSchema);

export const UserResponseSchema = SuccessResponseSchema(UserSchema);
export const UserListResponseSchema = SuccessResponseSchema(UserListSchema);
export const UpdateUserResponseSchema = SuccessResponseSchema(UserSchema);

export const UserMetricsSchema = z.object({
  articles: z.number().int().min(0),
  followers: z.number().int().min(0),
  following: z.number().int().min(0),
});
export const UserMetricsResponseSchema = SuccessResponseSchema(UserMetricsSchema);