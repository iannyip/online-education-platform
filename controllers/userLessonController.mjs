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
      const submission = await db.UserLesson.create();
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
