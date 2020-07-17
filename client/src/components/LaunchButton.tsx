import React from 'react';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import { stores } from '../stores/dataStore';
import { useParams, useHistory } from 'react-router-dom';
import { LeftSquareFilled } from '@ant-design/icons';
import { Input, Button } from 'antd';
import { gql } from 'apollo-boost';
const UPDATE_LAUNCHESDATA = gql`
  mutation UpdateLaunches($flight: Int) {
    launches(flight: $flight) {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
      rockets {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export const LaunchButton = observer((props) => {
  const { launches } = stores;
  const { id } = useParams();
  const launchesData = toJS(launches)[id - 1];
  const history = useHistory();

  console.log('launchesData', launchesData);
  console.log(launchesData.launch_success);

  if (launchesData == undefined) return history.push('/');
  else {
    return (
      <div className="h-full">
        <div className="spcaceXbackground w-screen h-full pt-32">
          <div className="w-9/12  m-auto">
            <div className="text-gray-500 bg-transparent text-5xl ">
              Mission: <span>{launchesData.mission_name}</span>
            </div>
            <div className="text-white text-2xl">Launch Details</div>
            <div className="flex flex-col border text-gray-600 border-gray-900 rounded justify-center">
              <div className="bg-gray-900 h-12  border-b border-gray-800 border-opacity-25">
                Flight Number:{' '}
                <span>
                  <input
                    className="inputbackground"
                    type="text"
                    defaultValue={launchesData.flight_number}
                  />
                </span>
              </div>
              <div className="bg-gray-900 h-12 border-b border-gray-800 border-opacity-25">
                Launch Year:
                <span>
                  <input
                    className="inputbackground"
                    type="text"
                    defaultValue={launchesData.launch_year}
                  />
                </span>
              </div>
              <div className="bg-gray-900 h-12">
                Launch Successful:
                <span
                  className={`${
                    launchesData.launch_success
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  <input
                    className="inputbackground"
                    type="text"
                    defaultValue={`${
                      launchesData.launch_success ? 'Yes' : 'No'
                    }`}
                  />
                </span>
              </div>
              {/* {[1, 3, 4].map((e: any) => {
                console.log(e);
                return (
                  <div
                    className={`${
                      e == 4
                        ? 'bg-gray-900 h-12'
                        : 'bg-gray-900 h-12  border-b border-gray-800 border-opacity-25'
                    }`}
                  >
                    hi
                  </div>
                );
              })} */}
            </div>

            <div className="text-white text-2xl">Launch Details</div>
            <div className="flex flex-col text-gray-600 border border-gray-900 rounded justify-center">
              <div className="bg-gray-900 h-12  border-b border-gray-800 border-opacity-25">
                Rocket ID:{' '}
                <span>
                  <input
                    className="inputbackground"
                    type="text"
                    defaultValue={launchesData.rockets.rocket_id}
                  />
                </span>
              </div>
              <div className="bg-gray-900 h-12  border-b border-gray-800 border-opacity-25">
                Rocket Name:{' '}
                <span>
                  <input
                    className="inputbackground"
                    type="text"
                    defaultValue={launchesData.rockets.rocket_name}
                  />
                </span>
              </div>
              <div className="bg-gray-900 h-12">
                Rocket Type:{' '}
                <span>
                  <input
                    className="inputbackground"
                    type="text"
                    defaultValue={launchesData.rockets.rocket_type}
                  />
                </span>
              </div>

              {/* {[1, 3, 4].map((e: any) => {
                console.log(e);
                return (
                  <div
                    className={`${
                      e == 4
                        ? 'bg-gray-900 h-12'
                        : 'bg-gray-900 h-12  border-b border-gray-800 border-opacity-25'
                    }`}
                  >
                    hi
                  </div>
                );
              })} */}
            </div>
            <Button
              ghost
              className="mt-16 noborder"
              onClick={() => {
                return history.push('/');
              }}
              icon={<LeftSquareFilled style={{ fontSize: '48px' }} />}
            ></Button>
          </div>
        </div>
      </div>
    );
  }
});
