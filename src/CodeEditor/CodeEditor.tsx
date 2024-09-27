import React, { useState } from "react";
import MonacoEditor, { MonacoEditorProps } from "react-monaco-editor";

export const CodeEditor: React.FC = () => {
  const [code, setCode] = useState<string>("// Type your code here...");

  const onChange = (newValue: string) => {
    setCode(newValue);
  };

  const options: MonacoEditorProps["options"] = {
    selectOnLineNumbers: true,
    automaticLayout: true,
  };

  return (
    <MonacoEditor
      width="800"
      height="600"
      language="javascript"
      theme="vs-dark"
      value={code}
      onChange={onChange}
      options={options}
    />
  );
};
