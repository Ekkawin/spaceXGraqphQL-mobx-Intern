import { SpaceXBody } from './SpaceXBody';
import { useQuery } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { Header } from './Header';

const LAUNCHES_QUERY = gql`
  query LaunchesQurey($limit: Int) {
    launches(limit: $limit) {
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
export const Home = () => {
  const [numberOfFetchData, setNumberOfFetchData] = useState(7);
  console.log('numberoffectchdata', numberOfFetchData);
  const { loading, error, data } = useQuery(LAUNCHES_QUERY, {
    variables: { limit: numberOfFetchData },
  });
  if (loading && data === undefined) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="spcaceXbackground w-screen h-auto">
      <Header />
      <SpaceXBody
        data={data.launches}
        setNumberOfFetchData={setNumberOfFetchData}
        numberOfFetchData={numberOfFetchData}
      />
    </div>
  );
};
