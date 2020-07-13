import React, { useEffect } from 'react';
import { Button } from 'antd';
import { ContentBlock } from './ContentBlock';
const handleScroll = (input) => {
  console.log(input);
};

export const SpaceXBody = (prop) => {
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      handleScroll(window);
    });
    return () => {
      window.removeEventListener('scroll', (e) => {
        handleScroll(window);
      });
    };
  }, []);
  console.log(window);
  const data = prop.data;

  return (
    <div className="spcaceXbackground w-screen h-full">
      <div className="flex flex-col bg-transparent items-center">
        <div className="text-gray-900 bg-transparent w-9/12 h-40 mt-16">
          <div className="text-white text-6xl font-normal">Launches</div>
          <div className="text-white text-gray-600 mb-3">
            <span className="bg-green-600 px-4 py-0 mr-2" />= Sucess
          </div>
          <div className="text-white text-gray-600">
            <span className="bg-red-600 px-4 py-0 mr-2" />= Fail
          </div>
        </div>
        {data.map((e) => {
          return <ContentBlock data={e} />;
        })}
      </div>
    </div>
  );
};
