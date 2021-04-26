// const { json } = require("sequelize/types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const userList = [
      {
        name: "yettie",
        password: "nsMAC8cgG",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "tybi",
        password: "tybipassword",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "kai",
        password: "kaipassword",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert("users", userList);

    const lessonList = [
      {
        title: "Console Logs",
        task: "Print 'Hello World!'",
        expected_output: "Hello World!",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Comments",
        task: "Use two slashes (/) to add a comment",
        expected_output: "Goodbye World!",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Data Types",
        task: "Try printing a number instead.",
        expected_output: "Goodbye World!",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Arithmetic Operators",
        task:
          "You can use the + operator to add numbers together! Try adding 2 + 2.",
        expected_output: "4",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "String Concatenation",
        task:
          "When a + operator is used on two strings, it joins them together! <br> Try joining 'Hello' and 'World' together!",
        expected_output: "4",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert("lessons", lessonList);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("lessons", null, {});
    await queryInterface.bulkDelete("users", null, {});
  },
};
