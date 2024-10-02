import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import { ErrorMessage } from "../error-message/ErrorMessage";

interface CodeEditorProps {
  onValueChange?: (value: string) => void;
  defaultEditorValue: string;
  language: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  onValueChange,
  defaultEditorValue,
  language,
}) => {
  const [errors, setErrors] = useState<string[]>([]);
  const editorRef = React.useRef<monaco.editor.IStandaloneCodeEditor>();

  function handleEditorDidMount(
    editor: monaco.editor.IStandaloneCodeEditor | undefined
  ) {
    editorRef.current = editor;
  }

  const handleEditorValidate = (markers: monaco.editor.IMarker[]) => {
    if (markers.length > 0) {
      const errorMessages = markers.map((marker) => {
        return `Error at line ${marker.startLineNumber}, column ${marker.startColumn}: ${marker.message}`;
      });
      setErrors(errorMessages);
    } else {
      setErrors([""]);
    }
  };

  const onValueChangeHandler = (value: string | undefined) => {
    if (editorRef.current) {
      editorRef!.current!.getAction("editor.action.formatDocument")!.run();
    }
    if (onValueChange) onValueChange(value || "");
  };

  return (
    <div className="flex flex-col justify-center gap-2">
      <Editor
        height="80dvh"
        width="600px"
        defaultLanguage={language}
        value={defaultEditorValue}
        theme="vs-dark"
        defaultValue={defaultEditorValue}
        onValidate={handleEditorValidate}
        onMount={handleEditorDidMount}
        onChange={onValueChangeHandler}
      />
      <ErrorMessage message={errors.join("\n")} />
    </div>
  );
};

export default CodeEditor;
