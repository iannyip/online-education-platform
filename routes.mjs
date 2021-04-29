import { resolve } from "path";
import db from "./models/index.mjs";
import initUsersController from "./controllers/userController.mjs";
import initLessonsController from "./controllers/lessonController.mjs";

export default function routes(app) {
  const UserController = initUsersController(db);
  const LessonController = initLessonsController(db);

  app.get("/", (request, response) => {
    response.redirect("/home");
  });

  app.get("/test", UserController["index"]);
  app.get("/titleIndex", LessonController.index);
  app.get("/lessons/:id", LessonController.show);

  // special JS page. Include the webpack index.html file
  app.get("/home", (request, response) => {
    response.sendFile(resolve("dist", "main.html"));
  });
}
