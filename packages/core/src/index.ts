// packages/core/src/index.ts
import { z } from "zod";

// --- Course schema/type
export const CourseSchema = z.object({
  id: z.string(),
  name: z.string(),
  instructor: z.string(),
});
export type Course = z.infer<typeof CourseSchema>;

// --- Schedule schema/type
export const ScheduleSchema = z.object({
  courseId: z.string(),
  date: z.string(),      // ISO date
  startTime: z.string(), // e.g. "14:00"
  endTime: z.string(),
});
export type Schedule = z.infer<typeof ScheduleSchema>;
