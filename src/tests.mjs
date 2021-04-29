export default function tests() {
  const test = (inputString) => {
    console.log(`From inside test: ${inputString}`);
    return inputString;
  };

  const consolelog = (inputString) => {
    try {
      let message = "check again!";
      let success = false;
      let cleanedString = inputString;
      const stuffToClean = ["console.log(", ")", ";", "'", '"'];

      console.log(`CHecking... ${inputString}`);
      console.log(`CHecking... ${inputString.includes("console.log(*)*")}`);
      if (inputString.includes("console.log(")) {
        console.log("condition met");
        stuffToClean.forEach((item) => {
          while (cleanedString.includes(item)) {
            cleanedString = cleanedString.replace(item, "");
          }
        });
      }
      if (cleanedString === "Hello World!") {
        success = true;
      }
      message = cleanedString;
      return [success, message];
    } catch (error) {
      console.log(error);
    }
  };

  return {
    test,
    consolelog,
  };
}

// eval(codeString);
// const output = eval(codeString);
// oldLog = console.log;
// console.log = (message) => {
//   alert(message);
// };
// const output = new Function(codeString)();
