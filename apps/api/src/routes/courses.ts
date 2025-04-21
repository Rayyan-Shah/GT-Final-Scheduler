import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export default function coursesRoute(app: FastifyInstance) {
  app.get<{
    Querystring: { term: string; code: string }
  }>("/api/courses", async (req: FastifyRequest<{ Querystring: { term: string; code: string } }>, reply: FastifyReply) => {
    const { term, code } = req.query;
    // TODO: replace with real fetchSections(term, code) call
    const sections = [
      { crn: "12345", section: "A", meeting: { days: "MWF", start: "10:00", end: "10:50" } },
      { crn: "67890", section: "B", meeting: { days: "TR", start: "14:00", end: "15:15" } },
    ];
    return reply.send(sections);
  });
}
