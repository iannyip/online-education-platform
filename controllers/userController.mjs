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
        response.cookie("UserId", authedUser.id);
        response.send({ message: "valid user", UserId: authedUser.id });
      } else {
        response.send({ message: "invalid user" });
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
