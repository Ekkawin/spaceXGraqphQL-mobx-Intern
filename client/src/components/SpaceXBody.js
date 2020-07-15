import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { ContentBlock } from './ContentBlock';

export const SpaceXBody = (props) => {
  const loadContent = () => {
    return setNumberOfFetchData(numberOfFetchData + 5);
  };
  const handScroll = (value) => {
    const window = value.innerHeight + value.pageYOffset;
    const clientscreen = document.getElementsByClassName(
      'spcaceXbackground w-screen h-full'
    );
    const clientHeight = clientscreen[0].clientHeight;
    console.log(window, clientHeight);
    if (window + 10 >= clientHeight) {
      console.log('loadconetent');
      return loadContent();
    }
  };
  console.log('new data');
  const { numberOfFetchData, setNumberOfFetchData, data } = props;
  console.log('INCOMMING DATA', data);
  useEffect(() => {
    const clientscreen = document.getElementsByClassName(
      'spcaceXbackground w-screen h-full'
    );
    const a = () => {
      handScroll(window);
    };
    window.addEventListener('scroll', a);
    // window.removeEventListener('scroll', (e) => {
    //   handScroll(window);
    // });
    return () => {
      window.removeEventListener('scroll', a);
    };
  }, [numberOfFetchData]);

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
        <Button
          onClick={() => {
            console.log('click');
            return loadContent();
          }}
        >
          load more
        </Button>
      </div>
    </div>
  );
};
