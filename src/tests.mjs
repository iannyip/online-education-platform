export default function tests() {
  const test = (inputString) => {
    console.log(`From inside test: ${inputString}`);
    return inputString;
  };
  const consolelog = (inputString) => {
    try {
      let message;
      let success = false;
      let cleanedString = inputString;
      const stuffToClean = ["console.log(", ")", ";", "'", '"'];

      if (inputString.includes("console.log")) {
        stuffToClean.forEach((item) => {
          while (cleanedString.includes(item)) {
            cleanedString = cleanedString.replace(item, "");
          }
        });
      }
      if (cleanedString === "Hello World!") {
        success = true;
        message = cleanedString;
      }

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
