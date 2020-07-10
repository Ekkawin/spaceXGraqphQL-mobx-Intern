import React from 'react';
import '../styles/style.css';
import '../styles/tailwind.css';
import 'antd/dist/antd.css';

export const SpaceXBody = (prop) => {
  console.log(prop.data);
  return (
    <div className="spcaceXbackground w-screen h-screen">
      <div className="flex flex-col bg-transparent items-center">
        <div className="text-gray-900 bg-gray-900 w-9/12 h-40 mt-16">
          <div className="text-4xl text-white">Mission</div>
        </div>
        <div className="text-gray-900 bg-gray-900 w-9/12 mt-16 h-40">2</div>
        <div className="text-gray-900 bg-gray-900 w-9/12 h-40 mt-16">3</div>
      </div>
    </div>
  );
};
