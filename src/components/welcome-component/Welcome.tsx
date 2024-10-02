import SectionTitle from "../section-title/SectionTitle";

export const Welcome = () => {
  return (
    <div className="h-dvh flex flex-col justify-center gap-8">
      <SectionTitle
        title="Interface Mocker"
        subtitle="InterfaceMocker is a powerful TypeScript tool that generates mock
        objects from interfaces. It automates test data creation, speeds up
        development, and ensures type safety for unit testing and prototyping."
      />
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>Made with React</span>
        <a
          href="https://github.com/IvanIsayenko1/InterfaceMocker"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gray-300 transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-500"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          View on GitHub
        </a>
      </div>
    </div>
  );
};
