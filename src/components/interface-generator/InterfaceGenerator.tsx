import { useEffect, useState } from "react";
import {
  generateJsonFromInterfaces,
  ParsedInterfaces,
} from "../../utils/generatorUtils";
import SectionTitle from "../section-title/SectionTitle";
import CodeEditor from "../code-editor/CodeEditor";

type InterfaceGeneratorProps = {
  managedInterface: ParsedInterfaces | undefined;
};

export const InterfaceGenerator = ({
  managedInterface,
}: InterfaceGeneratorProps) => {
  const [generatedInterface, setGeneratedInterface] = useState<string>("");

  useEffect(() => {
    if (managedInterface) {
      console.log("managedInterface", managedInterface);
      setGeneratedInterface(
        JSON.stringify(generateJsonFromInterfaces(managedInterface), null, 2)
      );
    }
  }, [managedInterface]);

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <SectionTitle
        title="Result"
        subtitle="JSON will be generated automatically"
      />
      <CodeEditor defaultEditorValue={generatedInterface} language="json" />
    </div>
  );
};
