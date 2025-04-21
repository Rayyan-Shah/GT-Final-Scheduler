import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export default function scheduleRoute(app: FastifyInstance) {
  app.post<{
    Body: { crns: { crn: string }[] }
  }>("/api/schedule", async (req: FastifyRequest<{ Body: { crns: { crn: string }[] } }>, reply: FastifyReply) => {
    const { crns } = req.body;
    // TODO: for each CRN, lookup meeting via fetchSections, then lookupExamSlot
    const exams = crns.map(({ crn }) => ({
      crn,
      exam: { date: "2025-04-28", start: "08:00", end: "10:50" }
    }));
    return reply.send(exams);
  });
}
