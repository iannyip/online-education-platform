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

  // RETURN
  return {
    index,
  };
}
