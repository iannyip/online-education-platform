export default function initUsersController(db) {
  const index = async (request, response) => {
    try {
      const users = await db.User.findAll();
      console.log(users);
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
