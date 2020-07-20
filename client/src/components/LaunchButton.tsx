import React from 'react';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import { stores } from '../stores/dataStore';
import { useParams, useHistory } from 'react-router-dom';
import { LeftSquareFilled } from '@ant-design/icons';
import { Input, Button, Form } from 'antd';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const UPDATE_LAUNCHESDATA = gql`
  mutation UpdateLaunches($data: InputLaunches) {
    changeLaunches(data: $data) {
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

export const LaunchButton = observer(() => {
  const [updateData] = useMutation(UPDATE_LAUNCHESDATA);
  const { launches } = stores;
  const { id } = useParams();
  const launchesData = toJS(launches)[id - 1];
  const history = useHistory();

  const onFinish = (fieldValue) => {
    let dataObject = {
      flight_number: fieldValue.flight_number || launchesData.flight_number,
      mission_name: fieldValue.mission_name || launchesData.mission_name,
      launch_year: fieldValue.launch_year || launchesData.launch_year,
      launch_date_local:
        fieldValue.launch_date_local || launchesData.launch_date_local,
      launch_success: fieldValue.launch_success || launchesData.launch_success,
      rocket_id: fieldValue.rocket_id || launchesData.rockets.rocket_id,
      rocket_name: fieldValue.rocket_name || launchesData.rockets.rocket_name,
      rocket_type: fieldValue.rocket_type || launchesData.rockets.rocket_type,
    };
    console.log(dataObject);
    // stores.setLaunches(dataObject);
    updateData({ variables: { data: dataObject } });
  };

  // console.log('launchesData', launchesData);
  // console.log(launchesData.launch_success);

  if (launchesData == undefined) return history.push('/');
  else {
    return (
      <div className="h-full">
        <div className="spcaceXbackground w-screen h-full pt-32">
          <div className="w-9/12  m-auto">
            <div className="text-gray-500 bg-transparent text-5xl ">
              Mission: <span>{launchesData.mission_name}</span>
            </div>

            <Form name="userForm" onFinish={onFinish}>
              <div className="text-white text-2xl">Launch Details</div>
              <div className="flex flex-col border text-gray-600 border-gray-900 rounded justify-center">
                <Form.Item
                  className="antformoveride"
                  name="flight_number"
                  label="Flight_number"
                >
                  <Input defaultValue={launchesData.flight_number} />
                </Form.Item>
                <Form.Item
                  className="antformoveride"
                  name="launch_year"
                  label="Launch_year"
                >
                  <Input defaultValue={launchesData.launch_year} />
                </Form.Item>
                <Form.Item
                  className="antformoveride"
                  name={`launch_${
                    launchesData.launch_success ? 'sucess' : 'fail'
                  }`}
                  label="Launch_success"
                >
                  <Input
                    defaultValue={`${
                      launchesData.launch_success ? 'Yes' : 'No'
                    }`}
                  />
                </Form.Item>
              </div>
              <div className="text-white text-2xl">Rocket Details</div>
              <div className="flex flex-col border text-gray-600 border-gray-900 rounded justify-center">
                <Form.Item
                  className="antformoveride"
                  name="rocket_id"
                  label="rocket_id"
                >
                  <Input defaultValue={launchesData.rockets.rocket_id} />
                </Form.Item>
                <Form.Item
                  className="antformoveride"
                  name="rocket_name"
                  label="rocket_name"
                >
                  <Input defaultValue={launchesData.rockets.rocket_name} />
                </Form.Item>
                <Form.Item
                  className="antformoveride"
                  name="rocket_type"
                  label="rocket_type"
                >
                  <Input defaultValue={launchesData.rockets.rocket_type} />
                </Form.Item>
              </div>
              <Button htmlType="submit"> submit</Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
});

{
  /* // <div className="h-full">
//   <div className="spcaceXbackground w-screen h-full pt-32">
//     <div className="w-9/12  m-auto">
//       <div className="text-gray-500 bg-transparent text-5xl ">
//         Mission: <span>{launchesData.mission_name}</span>
//       </div>
//       <div className="text-white text-2xl">Launch Details</div>
//       <div className="flex flex-col border text-gray-600 border-gray-900 rounded justify-center">
//         <div className="bg-gray-900 h-12  border-b border-gray-800 border-opacity-25">
//           Flight Number:{' '}
//           <span> */
}
//             <input
//               id="flightnumber"
//               className="inputbackground"
//               type="text"
//               defaultValue={launchesData.rockets}
//             />
//           </span>
//         </div>
//         <div className="bg-gray-900 h-12 border-b border-gray-800 border-opacity-25">
//           Launch Year:
//           <span>
//             <input
//               id="launchyear"
//               className="inputbackground"
//               type="text"
//               defaultValue={launchesData.launch_year}
//             />
//           </span>
//         </div>
//         <div className="bg-gray-900 h-12">
//           Launch Successful:
//           <span
//             className={`${
//               launchesData.launch_success
//                 ? 'text-green-500'
//                 : 'text-red-500'
//             }`}
//           >
//             <input
//               id="launchsuccess"
//               className="inputbackground"
//               type="text"
//               defaultValue={`${
//                 launchesData.launch_success ? 'Yes' : 'No'
//               }`}
//             />
//           </span>
//         </div>
//       </div>

//       <div className="text-white text-2xl">Launch Details</div>
//       <div className="flex flex-col text-gray-600 border border-gray-900 rounded justify-center">
//         <div className="bg-gray-900 h-12  border-b border-gray-800 border-opacity-25">
//           Rocket ID:{' '}
//           <span>
//             <input
//               id="rocketid"
//               className="inputbackground"
//               type="text"
//               defaultValue={launchesData.rockets.rocket_id}
//             />
//           </span>
//         </div>
//         <div className="bg-gray-900 h-12  border-b border-gray-800 border-opacity-25">
//           Rocket Name:{' '}
//           <span>
//             <input
//               id="rocketname"
//               className="inputbackground"
//               type="text"
//               defaultValue={launchesData.rockets.rocket_name}
//             />
//           </span>
//         </div>
//         <div className="bg-gray-900 h-12">
//           Rocket Type:{' '}
//           <span>
//             <input
//               id="rockettype"
//               className="inputbackground"
//               type="text"
//               defaultValue={launchesData.rockets.rocket_type}
//             />
//           </span>
//         </div>
//       </div>
//       <Button
//         ghost
//         className="mt-16 noborder"
//         onClick={() => {
//           console.log(this);
//           return history.push('/');
//         }}
//         icon={<LeftSquareFilled style={{ fontSize: '48px' }} />}
//       ></Button>
//     </div>
//   </div>
// </div>
