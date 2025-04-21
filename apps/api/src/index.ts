import Fastify from "fastify";
import health from "./routes/health";
import coursesRoute from "./routes/courses";
import scheduleRoute from "./routes/schedule";

const app = Fastify();
app.register(health);
app.register(coursesRoute);
app.register(scheduleRoute);

app.listen({ host: "127.0.0.1", port: 3001 }).then(() => {
  console.log("API listening on http://localhost:3001");
});
