import React from "react";

export const AppDescription: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 mt-4">
      <p className="text-xl text-gray-500 max-w-2xl text-center leading-relaxed">
        InterfaceMocker is a powerful TypeScript tool that generates mock
        objects from interfaces. It automates test data creation, speeds up
        development, and ensures type safety for unit testing and prototyping.
      </p>
    </div>
  );
};
