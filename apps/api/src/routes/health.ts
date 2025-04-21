import { FastifyInstance } from "fastify";
export default function (app: FastifyInstance) {
  app.get("/api/health", () => ({ ok: true }));
}
