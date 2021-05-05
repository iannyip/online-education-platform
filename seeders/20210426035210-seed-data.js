// const { json } = require("sequelize/types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const userList = [
      {
        name: "admin",
        password: "adminpassword",
        created_at: new Date(),
        updated_at: new Date(),
      },
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
          "In JavaScript, you can add two numbers together.\nIn the console below, try inputting: \n2 + 2",
        template: "// Add 2 to 2 together using the '+' operator\n",
        test: "return answer == 4",
        premium: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Joining Strings",
        task:
          "You can also join strings together. For instance, joining the two strings \n 'I am' + ' brilliant!' \nwill output a single string \n'I am brilliant!'",
        template: "// Join two strings together to output: 'Hello World!'\n",
        test: "return answer == 'Hello World!'",
        premium: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Variables",
        task: `Try assigning the number 42 to the variable 'a' by typing: \n var a = 42`,
        template: "// Assign 42 to the variable below \nvar a = \n\na;",
        test: "return answer == 42",
        premium: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Functions",
        task: `A function does something to some input(s). 
          \nIn this case, add a and b together to complete the function!`,
        template:
          "var myFunction = function(a, b) {\n    var answer = // add a and b together; \n    return answer;\n} \n\n//Let's test our function! \nmyFunction(2,2);",
        test: "return answer == 4",
        premium: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Methods",
        task:
          "JavaScript methods help you do stuff. \nFor instance, the toUpperCase() method makes a string CAPITALISED",
        template:
          "var myFunction = function(myWord) {\n	return myWord.toUpperCase();\n}\n\n//You can change the word below to something else!\nmyFunction('helloo');",
        test: "return answer == answer.toUpperCase()",
        premium: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Conditions",
        task:
          "JavaScript can make decisions based on the outcome of a condition! Conditions can evaluate to be true or false.\n In the script below, complete the condition.",
        template:
          "var myVariable = 42\n\nif ( myVariable == // complete this! ) {\n    var myMessage = 'the value of myVariable is 42!';\n}\nmyMessage;",
        test: "return answer == 'the value of myVariable is 42!'",
        premium: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Arrays",
        task:
          "Sometimes, we need to store more than one thing in a variable. \nArrays allow you to store multiple things in one variable!",
        template:
          "// Fill up the array with three of your favourite things!\nvar myFavouriteThings = [];\n\nmyFavouriteThings;",
        test: "return answer.length == 3",
        premium: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Time Converter",
        task:
          "Complete the function below to show 150 minutes in hours and minutes.",
        template:
          "var convertMinToHours = function(num) {\n    var hours = // complete this!;\n    var minutes = // complete this!;\n    return `${hours} hours, ${minutes} minutes`;\n}\n\n// Let's convert 72 minutes to hours and minutes!\nconvertMinToHours(150);",
        test: "return answer = '2 hours, 30 minutes'",
        premium: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Loops",
        task:
          "If you find yourself repeating the same line of code, you can use a loop to save time! \nTry running the code below.",
        template:
          "var arr = ['a','b','c']; \nvar alphabet = ''; \nfor (let i = 0; i < arr.length; i += 1) { \n 	alphabet += // Complete this!;\n} \n\n//The first three alphabets are:\nalphabet;",
        test: "return answer = 'abc'",
        premium: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Recursion",
        task: "Recursion is fun!! \n\nComplete the function below",
        template:
          "var fibonacci = function (n) {\n   if (n == 2) {\n    return ;\n  } else if (n == 1) {\n	return ;\n  } else {\n   	return ; \n  }\n};\n\nfibonacci(10);",
        test: "return answer = 55",
        premium: 1,
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
