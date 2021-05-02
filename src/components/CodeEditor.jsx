import React, { useRef, useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { basicSetup } from "@codemirror/basic-setup";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

import testFunctions from "../tests.mjs";

// HELPER FUNCTION
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

// THE COMPONENT
export default function CodeEditor({ currentLesson }) {
  console.log(currentLesson.template);
  const editor = useRef();
  const [editorVal, setEditorVal] = useState(currentLesson.template);
  const [output, setOutput] = useState(" ");
  const [wrongOutcome, setWrongOutcome] = useState(false);
  const [rightOutcome, setRightOutcome] = useState(false);

  const editorUpdate = (event) => {};

  // USE EFFECT TO SET UP CODE MIRROR
  useEffect(() => {
    const log = (event) => console.log(event);
    // editor.current.addEventListener("input", log);

    const templateBlank = `console.log("hellooee");`;

    const state = EditorState.create({
      doc: "//Write your code here!",
      extensions: [basicSetup, javascript(), oneDark],
    });
    const view = new EditorView({
      state,
      parent: editor.current,
      // extensions: {EditorView.viewport: { from: 1, to: 10 }},
    });

    // This is for unloading of component
    return () => {
      view.destroy();
      // editor.current.removeEventListener("input", log);
    };
  }, []);

  const getCode = () => {
    // alert(editorRef.current.getValue());
    const outcome = runCode(editor.current.getValue(), currentLesson.test);
  };

  return (
    <div>
      <div ref={editor}>fgf</div>
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
