import { z } from 'zod';
import {
  AuthGoogleCallbackResponseSchema,
  AuthLogoutResponseSchema,
  AuthMeResponseSchema,
  AuthRefreshResponseSchema,
  OkPayloadSchema,
} from '../schemas/auth.schema';

export type OkPayload = z.infer<typeof OkPayloadSchema>;
export type AuthMeResponse = z.infer<typeof AuthMeResponseSchema>;
export type AuthRefreshResponse = z.infer<typeof AuthRefreshResponseSchema>;
export type AuthLogoutResponse = z.infer<typeof AuthLogoutResponseSchema>;
export type AuthGoogleCallbackResponse = z.infer<
  typeof AuthGoogleCallbackResponseSchema
>;
