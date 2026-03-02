import { z } from 'zod';
import {
  CreateUserFeedSchema,
  UpdateUserFeedSchema,
  UserFeedSchema,
} from '../schemas/user-feed.schema';

export type UserFeed = z.infer<typeof UserFeedSchema>;
export type UserFeedCreate = z.infer<typeof CreateUserFeedSchema>;
export type UserFeedUpdate = z.infer<typeof UpdateUserFeedSchema>;
