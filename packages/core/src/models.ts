// packages/core/src/models.ts
import { z } from "zod";

export const CourseSchema = z.object({
  id: z.string(),
  name: z.string(),
  instructor: z.string(),
  // …any other fields
});
export type Course = z.infer<typeof CourseSchema>;

export const ScheduleSchema = z.object({
  courseId: z.string(),
  date: z.string(),      // ISO date
  startTime: z.string(), // e.g. "14:00"
  endTime: z.string(),
});
export type Schedule = z.infer<typeof ScheduleSchema>;
