export default function initLessonsController(db) {
  const index = async (request, response) => {
    try {
      const lessons = await db.Lesson.findAll();
      const titles = [];
      lessons.forEach((lesson) => {
        titles.push(lesson.title);
      });
      response.send(titles);
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
    show,
  };
}
