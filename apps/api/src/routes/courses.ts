// apps/api/src/routes/courses.ts
import { FastifyPluginAsync } from 'fastify';
import { z } from 'zod';
import { CourseSchema } from '@exam-planner/core';

const coursesRoute: FastifyPluginAsync = async (fastify) => {
  fastify.get(
    '/courses',
    {
      schema: {
        response: {
          200: z.array(CourseSchema)
        }
      }
    },
    async (request, reply) => {
      // TODO: replace with real data lookup
      const dummyCourses = [
        { id: 'cs101', name: 'Intro to CS', instructor: 'Prof. X' }
      ];
      return dummyCourses;
    }
  );
};

export default coursesRoute;
