export default function initUserLessonsController(db) {
  const index = async (request, response) => {
    try {
      const attempts = await db.UserLesson.findAll();
      response.send(attempts);
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
        console.log(submission);
        response.sendStatus(200);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const show = async (request, response) => {
    try {
      const lessonId = request.params.id;
      console.log(`lessonId: ${lessonId}`);
      const lesson = await db.Lesson.findOne({ where: { id: lessonId } });
      console.log(lesson);
      response.send(lesson);
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
