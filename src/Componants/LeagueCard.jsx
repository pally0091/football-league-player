import React from 'react';
import { Link } from 'react-router-dom';

const LeagueCard = ({league}) => {
    const { strLeague, strGender, strCountry,  strDescriptionEN, strSport, strBadge, strLogo } = league;
    return (
        <div className='bg-indigo-400 rounded-md shadow-lg shadow-white p-4'>
            <h3 className='text-2xl font-bold text-center mb-3 italic league-name'>{strLeague}</h3>
            <div className=' flex flex-row items-center'>
                <div className='w-1/2'>
                    <img src={strBadge} alt="fanart" />
                </div>
                <div className='w-1/2 p-4'>
                    
                    <h4 className='text-lg'>Type:  {strGender}</h4>
                    <h4 className='text-xl font-semibold'>League for: {strCountry}</h4>
                    <h4>{strSport} Team</h4>
                    <Link to={`/teams/${strLeague}`}>Teams in League</Link>
                </div>
            </div>
            <h4 className='text-justify p-2'>{strDescriptionEN}</h4>
        </div>
    );
};

export default LeagueCard;