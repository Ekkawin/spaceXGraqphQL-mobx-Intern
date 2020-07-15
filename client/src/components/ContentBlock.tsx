import React from 'react';
import { Button } from 'antd';
import { stores } from '../stores/dataStore';
import { toJS } from 'mobx';
import { LaunchButton } from 'components/LaunchButton';
import { Link } from 'react-router-dom';
export const ContentBlock = (props) => {
  const { data } = props;
  const date =
    data.launch_date_local.substring(0, 10) +
    data.launch_date_local.substring(11, 16);
  return (
    <div className="text-gray-900 bg-spacexitems w-9/12 h-40 mt-16 px-6">
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
          ;
        </div>
      </div>
      <div className="text-white">
        Date:<span>{date}</span>
      </div>
    </div>
  );
};
