import React from 'react';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import { stores } from '../stores/dataStore';
import { useParams } from 'react-router-dom';

export const LaunchButton = observer((props) => {
  const { launches } = stores;
  const { id } = useParams();
  const launchesData = toJS(launches)[id - 1];

  console.log('launchesData', launchesData);

  return (
    <div>
      <h1>
        Mission: <span>{launchesData.mission_name}</span>
      </h1>
      <div>Launch Detail</div>
      <div className="flex flex-col">
        {[1, 3, 4].map((e) => {
          return <div>hi</div>;
        })}
      </div>
    </div>
  );
});
