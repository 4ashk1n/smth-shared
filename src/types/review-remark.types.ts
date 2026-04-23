import { z } from "zod";
import {
  ReviewRemarkListResponseSchema,
  ReviewRemarkListSchema,
  ReviewRemarkResponseSchema,
  ReviewRemarkSchema,
  ReviewRemarkUpsertSchema,
} from "../schemas/review-remark.schema";

export type ReviewRemark = z.infer<typeof ReviewRemarkSchema>;
export type ReviewRemarkUpsert = z.infer<typeof ReviewRemarkUpsertSchema>;
export type ReviewRemarkList = z.infer<typeof ReviewRemarkListSchema>;
export type ReviewRemarkResponse = z.infer<typeof ReviewRemarkResponseSchema>;
export type ReviewRemarkListResponse = z.infer<typeof ReviewRemarkListResponseSchema>;
