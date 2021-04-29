import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import testFunctions from "../tests.mjs";

const runCode = (codeString, functionName) => {
  try {
    const testFuncs = testFunctions();
    console.log(`captured result: ${codeString}`);
    const outcome = testFuncs[`${functionName}`](codeString);
    console.log(`captured outcome: ${outcome}`);
    return outcome;
  } catch (error) {
    console.log(error);
  }
};

export default function CodeEditor({ currentLesson }) {
  console.log(currentLesson.template);
  // const editorRef = useRef(null);
  const editorRef = useRef();
  const [output, setOutput] = useState(" ");
  const [wrongOutcome, setWrongOutcome] = useState(false);
  const [rightOutcome, setRightOutcome] = useState(false);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    editorRef.current.defaultValue = "earth to mars";
  };

  const getCode = () => {
    // alert(editorRef.current.getValue());
    const outcome = runCode(editorRef.current.getValue(), currentLesson.test);
    setOutput(outcome[1]);
    setWrongOutcome(!outcome[0]);
    setRightOutcome(outcome[0]);
    console.log(`This is the ${outcome[0]}`);
  };

  const someText = currentLesson.template;
  console.log(`someText: ${someText}`);
  return (
    <div>
      <Editor
        ref={editorRef}
        height="200px"
        defaultLanguage="javascript"
        defaultValue={someText}
        theme="vs-dark"
        loading="🤗  Loading... 🤗"
        onMount={handleEditorDidMount}
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
