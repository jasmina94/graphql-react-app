import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

export default function Launches() {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);

    const renderLaunches = () => {
        if (loading)
            return <h4>Loading...</h4>

        if (error) {
            console.log(error);
        } else {
            return <>
                {data.launches.map((item) => {
                    return <LaunchItem key={item.flight_number} launch={item} />
                })}
            </>
        }
    }

    return (
        <div>
            <h1 className="display-4 my-3">Launches</h1>
            <MissionKey />
            {renderLaunches()}
        </div>
    )
}