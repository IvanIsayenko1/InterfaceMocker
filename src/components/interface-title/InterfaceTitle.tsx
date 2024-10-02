import React from "react";

export const PageTitle: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Interface Mocker
        </span>
      </h1>
    </div>
  );
};
