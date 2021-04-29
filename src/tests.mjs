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

  const comment = () => {
    try {
      let message = "This test is incomplete";
      let success = false;
      console.log("inside comment");
      return [success, message];
    } catch (error) {
      console.log(error);
    }
  };
  const datatypeA = () => {
    try {
      let message = "This test is incomplete";
      let success = false;
      console.log("inside datatypeA");
      return [success, message];
    } catch (error) {
      console.log(error);
    }
  };
  const simpleAddition = () => {
    try {
      let message = "This test is incomplete";
      let success = false;
      console.log("inside simpleAddition");
      return [success, message];
    } catch (error) {
      console.log(error);
    }
  };
  const stringConcat = () => {
    try {
      let message = "This test is incomplete";
      let success = false;
      console.log("inside stringConcat");
      return [success, message];
    } catch (error) {
      console.log(error);
    }
  };
  const addFunction = () => {
    try {
      let message = "This test is incomplete";
      let success = false;
      console.log("inside addFunction");
      return [success, message];
    } catch (error) {
      console.log(error);
    }
  };
  const toUpperFunction = () => {
    try {
      let message = "This test is incomplete";
      let success = false;
      console.log("inside toUpperFunction");
      return [success, message];
    } catch (error) {
      console.log(error);
    }
  };

  return {
    test,
    consolelog,
    comment,
    datatypeA,
    simpleAddition,
    stringConcat,
    addFunction,
    toUpperFunction,
  };
}

// eval(codeString);
// const output = eval(codeString);
// oldLog = console.log;
// console.log = (message) => {
//   alert(message);
// };
// const output = new Function(codeString)();
