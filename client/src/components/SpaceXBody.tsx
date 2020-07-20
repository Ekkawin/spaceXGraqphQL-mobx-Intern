import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { ContentBlock } from './ContentBlock';
import { stores } from '../stores/dataStore';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import axios from 'axios';
export const SpaceXBody = observer((props) => {
  const { numberOfFetchData, setNumberOfFetchData, data } = props;
  const { launches } = stores;
  console.log('firstfetdatainbody', numberOfFetchData);

  const loadContent = () => {
    console.log('numberoffetchdata', numberOfFetchData);
    return setNumberOfFetchData(numberOfFetchData + 5);
  };

  const handScroll = (value) => {
    console.log('fetchData', numberOfFetchData);
    const window = value.innerHeight + value.pageYOffset;
    const clientscreen = document.getElementsByClassName(
      'spcaceXbackground w-screen h-auto'
    );
    const clientHeight = clientscreen[0].clientHeight;
    console.log(window, clientHeight);
    if (window >= clientHeight - 10) {
      console.log('loadconetent');
      return loadContent();
    }
  };
  console.log('new data');

  useEffect(() => {
    console.log('data', data);
    if (data) {
      stores.setLaunches(data);
    }
  }, [data]);
  const a = () => {
    console.log('call handlescroll');
    handScroll(window);
  };

  useEffect(() => {
    window.addEventListener('scroll', a);

    return () => {
      window.removeEventListener('scroll', a);
    };
  }, [numberOfFetchData]);

  return (
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
      {launches &&
        launches.map((e) => {
          return <ContentBlock data={toJS(e)} />;
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
  );
});
