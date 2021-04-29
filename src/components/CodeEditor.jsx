import React, { useRef } from "react";
import Editor from "@monaco-editor/react";

const runCode = (codeString) => {
  try {
    const output = new Function(codeString)();

    let oldLog;
    (function () {
      oldLog = console.log;
      console.log = function (message) {
        // DO MESSAGE HERE.
        // console.log(`the message is: ${message}`);
        oldLog.apply(console, arguments);
      };
    })();

    console.log(`captured result: ${oldLog}`);
  } catch (error) {
    console.log(error);
  }
};

export default function CodeEditor() {
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
    </div>
  );
}
