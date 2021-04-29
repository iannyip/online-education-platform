import React, { useRef } from "react";
import Editor from "@monaco-editor/react";
import testFunctions from "../tests.mjs";

const runCode = (codeString) => {
  try {
    const testFuncs = testFunctions();
    // oldLog = console.log;
    // console.log = (message) => {
    //   alert(message);
    // };
    // const output = new Function(codeString)();

    console.log(codeString);
    // eval(codeString);
    // const output = eval(codeString);

    console.log(`captured result: ${codeString}`);
    const outcome = testFuncs["consolelog"](codeString);
    console.log(`captured outcome: ${outcome[1]}`);

    // console.log(`captured result: ${oldLog}`);
  } catch (error) {
    console.log(error);
  }
};

export default function CodeEditor({ testFunctions }) {
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const getCode = () => {
    alert(editorRef.current.getValue());
    runCode(editorRef.current.getValue());
  };

  return (
    <div>
      <Editor
        height="300px"
        defaultLanguage="javascript"
        defaultValue="// Write your code here"
        theme="vs-dark"
        loading="🤗  Loading... 🤗"
        onMount={handleEditorDidMount}
      />
      <button onClick={getCode} className="btn btn-success mt-2">
        Show Value
      </button>
      <div className="console-style">Output</div>
    </div>
  );
}
