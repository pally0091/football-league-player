import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Team from './Team';

const Teams = () => {
    const data = useLoaderData();
    const teams = data?.teams;
    console.log(teams);
    return (
        <div>
            <h4 className='text-center text-3xl font-semibold'>{ teams?.length} teams in this league</h4>
            <div>
                {
                    teams?.map(team => (
                        <Team
                            key={team?.idTeam}
                            team={team}
                        ></Team>
                    ))
               }
            </div>
        </div>
    );
};

export default Teams;