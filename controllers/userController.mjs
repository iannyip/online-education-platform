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

  const login = async (request, response) => {
    try {
      console.log(request.body);
      const authedUser = await db.User.findOne({ where: request.body });
      if (authedUser !== null) {
        response.send("valid user");
      } else {
        response.send("invalid user");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // RETURN
  return {
    index,
    login,
  };
}
