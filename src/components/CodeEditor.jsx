import React, { useRef, useState, useEffect } from "react";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

import testFunctions from "../tests.mjs";

const testString = "= (input) => {console.log(input);}";

// HELPER FUNCTION
const runCode = (codeString, functionName) => {
  try {
    let testFunc;
    console.log("running code...");
    console.log(`captured result: ${codeString}`);
    // const testy = testFunc(5); // new Function(testString);
    const answer = eval(codeString);
    console.log(`answer: ${answer}`);
    return answer;
    // const testFuncs = testFunctions();
    // console.log(`captured result: ${codeString}`);
    // const outcome = testFuncs[`${functionName}`](codeString);
    // console.log(`captured outcome: ${outcome}`);
    // return outcome;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

// THE COMPONENT
export default function CodeEditor({ currentLesson }) {
  const [editorVal, setEditorVal] = useState(currentLesson.template);
  const [output, setOutput] = useState(" ");
  const [wrongOutcome, setWrongOutcome] = useState(false);
  const [rightOutcome, setRightOutcome] = useState(false);

  useEffect(() => {
    console.log("the lesson has changed. changing template");
    setEditorVal(currentLesson.template);
    setOutput("");
    setWrongOutcome(false);
    setRightOutcome(false);
  }, [currentLesson]);

  const getCode = () => {
    const outcome = runCode(editorVal);
    setOutput(outcome);
    console.log(`the correct answer is: ${currentLesson.test}`);
    const compareCorrect = new Function("answer", currentLesson.test);

    if (compareCorrect(outcome)) {
      console.log("success!");
      setRightOutcome(true);
      setWrongOutcome(false);
    } else {
      setWrongOutcome(true);
      setRightOutcome(false);
    }
  };

  const handleOnBeforeChange = (editor, data, value) => {
    setEditorVal(value);
  };

  return (
    <div>
      <ControlledEditor
        onBeforeChange={handleOnBeforeChange}
        value={editorVal}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: "javascript",
          theme: "material",
          lineNumbers: true,
        }}
      />
      <div className="d-flex justify-content-md-end py-2">
        {wrongOutcome && (
          <div className="my-0 alert alert-danger w-100">
            {wrongOutcome && "Try Again!"}
          </div>
        )}
        {rightOutcome && (
          <div className="my-0 alert alert-success w-100">
            {rightOutcome && "Great job!"}
          </div>
        )}
        <button onClick={getCode} className="mx-2 btn btn-success mt-2">
          Run!
        </button>
      </div>
      <div className="console-style">{output}</div>
    </div>
  );
}
