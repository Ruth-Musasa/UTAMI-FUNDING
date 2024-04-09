import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-8 border-gray-200 border-t-8 border-b-8 rounded-full w-24 h-24 animate-spin"></div>
    </div>
  );
};

export default Loading;
