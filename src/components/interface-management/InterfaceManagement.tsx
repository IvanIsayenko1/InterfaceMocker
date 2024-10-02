import { useEffect, useState } from "react";
import SectionTitle from "../section-title/SectionTitle";
import {
  hasArrayInKey,
  hasArrayProperties,
  ParsedInterfaces,
  ParsedProperty,
  parseInterface,
} from "../../utils/generatorUtils";
import ParagraphTitle from "../paragraph-title/ParagraphTitle";
import Input from "../input/Input";

type InterfaceGeneratorProps = {
  codeString: string;
  onInterfaceManage: (generateInterfaceFrom: ParsedInterfaces) => void;
};

export const InterfaceManagement = ({
  codeString,
  onInterfaceManage,
}: InterfaceGeneratorProps) => {
  const [parsedInterface, setParsedInterface] = useState<
    ParsedInterfaces | undefined
  >();

  useEffect(() => {
    const parsed = parseInterface(codeString);
    setParsedInterface(parsed);

    // for defualt object
    onInterfaceManage(parsed!);

    console.log(parsed);
  }, [codeString]);

  const onInputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: ParsedProperty
  ) => {
    item.arrayLength = parseInt(e.target.value);
    const clonedObject = JSON.parse(JSON.stringify(parsedInterface!));
    onInterfaceManage(clonedObject);
  };

  return (
    parsedInterface &&
    hasArrayProperties(parsedInterface) && (
      <div className="flex flex-col justify-center">
        <SectionTitle
          title="Manage"
          subtitle="Indicate the length of the array properties below"
        />
        <br />
        <div className="flex flex-row flex-wrap gap-4">
          {Object.keys(parsedInterface || {}).map(
            (key) =>
              hasArrayInKey(parsedInterface!, key) && (
                <div className="flex flex-col" key={key}>
                  <ParagraphTitle title={key} />
                  <div className="flex flex-col">
                    {parsedInterface![key].map(
                      (item) =>
                        item.isArray && (
                          <Input
                            key={item.id}
                            label={item.key}
                            value={item.arrayLength?.toString()!}
                            type="number"
                            onChange={(e) => onInputChangeHandler(e, item)}
                          />
                        )
                    )}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    )
  );
};
