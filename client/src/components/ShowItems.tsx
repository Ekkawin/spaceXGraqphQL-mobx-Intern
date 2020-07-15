import { SpaceXBody } from 'components/SpaceXBody';
import { useQuery } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { gql } from 'apollo-boost';

const LAUNCHES_QUERY = gql`
  query LaunchesQurey($limit: Int) {
    launches(limit: $limit) {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;
export const ShowItems = () => {
  const [numberOfFetchData, setNumberOfFetchData] = useState(5);
  console.log('numberoffectchdata', numberOfFetchData);
  const { loading, error, data } = useQuery(LAUNCHES_QUERY, {
    variables: { limit: numberOfFetchData },
  });
  if (loading && data === undefined) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <SpaceXBody
      data={data.launches}
      setNumberOfFetchData={setNumberOfFetchData}
      numberOfFetchData={numberOfFetchData}
    />
  );
};
