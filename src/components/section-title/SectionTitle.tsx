import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 pb-8">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
        <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          {title}
        </span>
      </h2>
      <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;
