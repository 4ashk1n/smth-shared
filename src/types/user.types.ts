import { z } from 'zod';
import {
  CreateUserSchema,
  UpdateUserProfileResponseSchema,
  UpdateUserProfileSchema,
  UpdateUserResponseSchema,
  UpdateUserSchema,
  UserListResponseSchema,
  UserListSchema,
  UserMetaSchema,
  UserMetricsResponseSchema,
  UserMetricsSchema,
  UserResponseSchema,
  UserRoleSchema,
  UserSchema,
} from '../schemas/user.schema';

export type UserMeta = z.infer<typeof UserMetaSchema>;
export type User = z.infer<typeof UserSchema>;
export type UserRole = z.infer<typeof UserRoleSchema>;
export type UserCreate = z.infer<typeof CreateUserSchema>;
export type UserUpdate = z.infer<typeof UpdateUserSchema>;
export type UserProfileUpdate = z.infer<typeof UpdateUserProfileSchema>;
export type UserList = z.infer<typeof UserListSchema>;
export type UserResponse = z.infer<typeof UserResponseSchema>;
export type UserListResponse = z.infer<typeof UserListResponseSchema>;
export type UpdateUserResponse = z.infer<typeof UpdateUserResponseSchema>;
export type UpdateUserProfileResponse = z.infer<typeof UpdateUserProfileResponseSchema>;
export type UserMetricsResponse = z.infer<typeof UserMetricsResponseSchema>;
export type UserMetrics = z.infer<typeof UserMetricsSchema>;
