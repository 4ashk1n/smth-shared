import { z } from "zod";
import {
  MarkAllNotificationsReadResponseSchema,
  MarkNotificationReadResponseSchema,
  NotificationListQuerySchema,
  NotificationListResponseSchema,
  NotificationPayloadSchema,
  NotificationResponseSchema,
  NotificationSchema,
  NotificationTypeSchema,
  UnreadNotificationsCountResponseSchema,
} from "../schemas/notification.schema";

export type NotificationType = z.infer<typeof NotificationTypeSchema>;
export type NotificationPayload = z.infer<typeof NotificationPayloadSchema>;
export type Notification = z.infer<typeof NotificationSchema>;
export type NotificationListQuery = z.infer<typeof NotificationListQuerySchema>;
export type NotificationResponse = z.infer<typeof NotificationResponseSchema>;
export type NotificationListResponse = z.infer<typeof NotificationListResponseSchema>;
export type MarkNotificationReadResponse = z.infer<typeof MarkNotificationReadResponseSchema>;
export type MarkAllNotificationsReadResponse = z.infer<typeof MarkAllNotificationsReadResponseSchema>;
export type UnreadNotificationsCountResponse = z.infer<typeof UnreadNotificationsCountResponseSchema>;
