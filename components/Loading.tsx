import React from 'react';

// Define the props type for the Loading component
interface LoadingProps {
  message?: string;  // Optional message to display during loading
}

// Functional Loading component
const Loading: React.FC<LoadingProps> = () => {
  return (
    <div className="">
      <div className="animate-spin rounded-full h-5 w-5 border-t-4 border-blue-500 border-opacity-75"></div>

    </div>
  );
};

export default Loading;