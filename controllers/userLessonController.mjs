export default function initUserLessonsController(db) {
  const index = async (request, response) => {
    try {
      const { userId } = request.params;
      const attempts = await db.UserLesson.findAll({
        where: {
          userId,
        },
        attributes: ["lessonId"],
      });
      const attemptArray = [];
      attempts.forEach((item) => {
        attemptArray.push(item.lessonId);
      });
      response.send(attemptArray);
    } catch (error) {
      console.log(error);
    }
  };

  const create = async (request, response) => {
    try {
      console.log(request.body);
      const search = await db.UserLesson.findOne({
        where: {
          userId: request.body.userId,
          lessonId: request.body.currentLessonNo,
        },
      });

      if (search) {
        const updatedSubmission = await db.UserLesson.update(
          { savedCode: request.body.editorValue },
          {
            where: {
              userId: request.body.userId,
              lessonId: request.body.currentLessonNo,
            },
          }
        );
        response.sendStatus(200);
      } else {
        const submission = await db.UserLesson.create({
          userId: request.body.userId,
          lessonId: request.body.currentLessonNo,
          savedCode: request.body.editorValue,
        });
        response.sendStatus(200);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const show = async (request, response) => {
    try {
      const prevAttempt = await db.UserLesson.findOne({
        where: request.params,
      });
      if (prevAttempt !== null) {
        response.send(prevAttempt.savedCode);
      } else {
        response.send(200);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // RETURN
  return {
    index,
    create,
    show,
  };
}
