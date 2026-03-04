import { z } from 'zod';
import { SuccessResponseSchema } from './response.schema';
import { UserSchema } from './user.schema';

export const OkPayloadSchema = z.object({
  success: z.literal(true),
});

export const AuthMeResponseSchema = SuccessResponseSchema(UserSchema);
export const AuthRefreshResponseSchema = SuccessResponseSchema(UserSchema);
export const AuthLogoutResponseSchema = SuccessResponseSchema(OkPayloadSchema);
export const AuthGoogleCallbackResponseSchema =
  SuccessResponseSchema(UserSchema);
