export default function initLessonsController(db) {
  const index = async (request, response) => {
    try {
      const lessons = await db.Lesson.findAll();
      console.log(lessons);
      response.send("yay");
    } catch (error) {
      console.log(error);
    }
  };

  // RETURN
  return {
    index,
  };
}
