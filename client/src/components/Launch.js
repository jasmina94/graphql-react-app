import React from 'react';
import gql from 'graphql-tag';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import classNames from 'classnames';

const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number: Int!) {
        launch(flight_number: $flight_number) {
            flight_number
            mission_name
            launch_year
            launch_date_local
            launch_success
            rocket {
                rocket_id
                rocket_name
                rocket_type
            }
        }
    }
`;

export default function Launch() {
    let { flight_number } = useParams();
    flight_number = parseInt(flight_number);

    const { loading, error, data } = useQuery(LAUNCH_QUERY, {
        variables: { flight_number }
    });

    const renderLaunch = () => {
        if (loading) return <h4>Loading...</h4>
        if (error) console.log(error)

        const { mission_name, flight_number, launch_year, launch_date_local, launch_success,
            rocket: { rocket_id, rocket_name, rocket_type } } = data.launch;

        return <div>
            <h1 className="display-4 my-3">
                <span className="text-dark">Mission: </span>
                {mission_name}
            </h1>
            <h4 className="mb-3">
                Launch Details
            </h4>
            <ul className="list-group">
                <li className="list-group-item">
                    Flight number: {flight_number}
                </li>
                <li className="list-group-item">
                    Launch year: {launch_year}
                </li>
                <li className="list-group-item">
                    Launch successful: <span className={classNames({
                        'text-success': launch_success,
                        'text-danger': !launch_success
                    })}>{launch_success ? 'Yes' : 'No'}</span>
                </li>
            </ul>
            <h4 className="my-3">Rocket details</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    Rocket id: {rocket_id}
                </li>
                <li className="list-group-item">
                    Rocket name: {rocket_name}
                </li>
                <li className="list-group-item">
                    Rocket type: {rocket_type}
                </li>
            </ul>
            <hr />
            <Link to="/" className="btn btn-secondary">Back</Link>
        </div>
    }

    return (
        <>
            {renderLaunch()}
        </>
    )
}
