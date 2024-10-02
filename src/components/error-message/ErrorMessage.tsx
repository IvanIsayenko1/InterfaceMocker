import React from "react";

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div
      className="flex items-center justify-between p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg"
      role="alert"
    >
      <div className="flex items-center">
        <svg
          className="w-5 h-5 mr-2 text-red-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 1a9 9 0 100 18 9 9 0 000-18zm1 14h-2v-2h2v2zm0-4h-2V7h2v4z" />
        </svg>
        <div>{message}</div>
      </div>
    </div>
  );
};
