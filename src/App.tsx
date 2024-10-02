import { Layout } from "./layout/Layout";
import { InterfaceInput } from "./components/interface-input/InterfaceInput";
import { useState } from "react";
import { InterfaceManagement } from "./components/interface-management/InterfaceManagement";
import { ParsedInterfaces } from "./utils/generatorUtils";
import { InterfaceGenerator } from "./components/interface-generator/InterfaceGenerator";
import { Welcome } from "./components/welcome-component/Welcome";

function App() {
  const [interfaceStringCode, setInterfaceStringCode] = useState("");
  const [managedInterface, setManagedInterface] = useState<
    ParsedInterfaces | undefined
  >();

  return (
    <Layout>
      <Welcome />
      <div className="flex flex-row gap-6 flex-wrap justify-center">
        <div className="basis-2/5">
          <InterfaceInput
            onCodeChange={(code) => setInterfaceStringCode(code)}
          />
        </div>
        <div className="basis-2/6">
          <InterfaceGenerator managedInterface={managedInterface} />
        </div>
      </div>
      <div className="basis-3/6 mt-16">
        <InterfaceManagement
          codeString={interfaceStringCode}
          onInterfaceManage={(generateInterfaceFrom) =>
            setManagedInterface(generateInterfaceFrom)
          }
        />
      </div>
    </Layout>
  );
}

export default App;
