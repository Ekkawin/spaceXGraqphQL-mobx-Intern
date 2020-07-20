import React, { useEffect } from 'react';
import { Button } from 'antd';
import { stores } from '../stores/dataStore';
import { toJS } from 'mobx';
import { LaunchButton } from './LaunchButton';
import { Link } from 'react-router-dom';
import axios from 'axios';
export const ContentBlock = (props) => {
  const { data } = props;

  const date =
    data.launch_date_local.substring(0, 10) +
    data.launch_date_local.substring(11, 16);
  return (
    <div className="text-gray-900 bg-spacexitems w-9/12 h-40 mt-8 px-6">
      <div className="grid grid-cols-2 h-20">
        <div className="flex items-center">
          <div className="text-4xl text-white">
            Mission:{' '}
            <span
              className={
                data.launch_success ? 'text-green-600' : 'text-red-600'
              }
            >
              {data.mission_name}
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Link to={`/LaunchButton/${data.flight_number}`}>
            <Button className="launchdetailbutton">Launch Detail</Button>
          </Link>
        </div>
      </div>
      <div className="text-white">
        Date:<span>{date}</span>
      </div>
    </div>
  );
};

// const sendData = async () => {
//   const res = await axios.post('http://localhost:5000/getdata', {
//     flight_number: data.flight_number,
//     mission_name: data.mission_name,
//     launch_year: data.launch_year,
//     launch_date_local: data.launch_data_local,
//     launch_success: data.launch_success,
//   });
//   console.log('send data from front end');
// };
// useEffect(() => {
//   sendData();
// }, []);
