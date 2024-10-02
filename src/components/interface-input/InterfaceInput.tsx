import React, { useEffect } from "react";
import SectionTitle from "../section-title/SectionTitle";
import CodeEditor from "../code-editor/CodeEditor";
import { DEFAULT_INTERFACE_CODE } from "../../constants/constants";

type InterfaceInputProps = {
  onCodeChange: (code: string) => void;
};

export const InterfaceInput: React.FC<InterfaceInputProps> = ({
  onCodeChange,
}) => {
  useEffect(() => {
    onCodeChange(DEFAULT_INTERFACE_CODE);
  }, []);

  const editorOnChangeHandler = (code: string) => {
    onCodeChange(code.replace(/[;,]/g, ""));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <SectionTitle
        title="Interface code"
        subtitle="Paste or write your interface code"
      />
      <CodeEditor
        onValueChange={editorOnChangeHandler}
        defaultEditorValue={DEFAULT_INTERFACE_CODE}
        language="typescript"
      />
    </div>
  );
};
