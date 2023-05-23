import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const LeagueList = () => {
    const data = useLoaderData();
    const leagues = data.leagues;
    // console.log(leagues)
    return (
        <div className='grid grid-cols-6 gap-3 p-4'>
            {
                leagues?.map(league => (
                    <div
                        key={league?.idLeague}
                        className='p-3 bg-teal-200 rounded-lg text-center'
                    >
                        <h4 className='font-bold text-lg'>{league?.strLeague}</h4>
                        <p className='font-semibold'>Type of league : {league?.strSport}</p>
                        <Link className='hover:text-blue-600 hover:underline' to={`/teams/${league?.strLeague}`}>Teams in this League</Link>
                    </div>
                ))
            }
        </div>
    );
};

export default LeagueList;