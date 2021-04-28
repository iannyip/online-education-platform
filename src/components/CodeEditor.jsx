import React, { useRef } from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditor() {
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const getValue = () => {
    alert(editorRef.current.getValue());
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
      <button onClick={getValue}>Show Value</button>
    </div>
  );
}
