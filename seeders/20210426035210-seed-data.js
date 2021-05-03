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
        title: "Quick Maths",
        task:
          "In JavaScript, you can add two numbers together.\n In the console below, try inputting: 2 + 2",
        template: "",
        test: "4",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Joining Strings",
        task:
          "You can also join strings together. \n In the console below, try: \n 'Hello' + ' World!'",
        template: "",
        test: "Hello World!",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Data Types",
        task:
          "Try assigning the number 42 to the variable 'a' by typing: <br> a = 42",
        template: "",
        test: "datatypeA",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Arithmetic Operators",
        task:
          "You can use the + operator to add numbers together! Try adding 2 + 2.",
        template: "",
        test: "simpleAddition",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "String Concatenation",
        task:
          "When a + operator is used on two strings, it joins them together! <br> Try joining 'Hello' and 'World' together!",
        template: "",
        test: "stringConcat",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Functions",
        task:
          "A function does something to some input(s). In this case, add a and b together to complete the function!",
        template: "var myFunction = function(a, b) {return a + b;}",
        test: "addFunction",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Functions with strings",
        task: "use toUpperCase() to modify this string",
        template:
          "var myFunction = function(inputString) {return inputString;}",
        test: "addFunction",
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
