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
        task: "Print 'Hello World!'",
        expected_output: "Hello World!",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        task: "Print 'Goodbye World!'",
        expected_output: "Goodbye World!",
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
