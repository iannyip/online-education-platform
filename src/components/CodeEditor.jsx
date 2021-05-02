import React, { useRef, useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { basicSetup } from "@codemirror/basic-setup";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";

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
  const editor = useRef();
  const [editorVal, setEditorVal] = useState(currentLesson.template);
  const [output, setOutput] = useState(" ");
  const [wrongOutcome, setWrongOutcome] = useState(false);
  const [rightOutcome, setRightOutcome] = useState(false);

  // USE EFFECT TO SET UP CODE MIRROR
  useEffect(() => {
    const log = (event) => console.log(event);
    // editor.current.addEventListener("input", log);

    const templateBlank = `console.log("hellooee");`;

    const state = EditorState.create({
      doc: "A",
      extensions: [basicSetup, javascript()],
    });
    const view = new EditorView({
      state,
      parent: editor.current,
    });

    // This is for unloading of component
    return () => {
      view.destroy();
      // editor.current.removeEventListener("input", log);
    };
  }, []);

  const getCode = () => {
    // alert(editorRef.current.getValue());
    const outcome = runCode(editorRef.current.getValue(), currentLesson.test);
    setOutput(outcome[1]);
    setWrongOutcome(!outcome[0]);
    setRightOutcome(outcome[0]);
    console.log(`This is the ${outcome[0]}`);
  };

  return (
    <div>
      <div ref={editor}></div>
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
