import { resolve } from "path";
import db from "./models/index.mjs";
import initUsersController from "./controllers/userController.mjs";
import initLessonsController from "./controllers/lessonController.mjs";
import initUserLessonsController from "./controllers/userLessonController.mjs";

export default function routes(app) {
  const UserController = initUsersController(db);
  const LessonController = initLessonsController(db);
  const UserLessonController = initUserLessonsController(db);

  app.get("/", (request, response) => {
    response.redirect("/home");
  });

  app.get("/titleIndex", LessonController.index);
  app.get("/lessons/:id", LessonController.show);

  app.get("/test", UserController["index"]);
  app.post("/login", UserController.login);
  app.post("/register", UserController.createUser);

  app.post("/attempts", UserLessonController.create);
  app.get("/progress/:userId", UserLessonController.index);
  app.get("/pastsubmission/:userId/:lessonId", UserLessonController.show);

  // special JS page. Include the webpack index.html file
  app.get("/home", (request, response) => {
    response.sendFile(resolve("dist", "main.html"));
  });
}
