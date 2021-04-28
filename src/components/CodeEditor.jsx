import React from "react";
import ReactDOM from "react-dom";

import Editor from "@monaco-editor/react";

export default function CodeEditor() {
  return (
    <Editor
      height="300px"
      defaultLanguage="javascript"
      defaultValue="// Write your code here"
      theme="vs-dark"
    />
  );
}
