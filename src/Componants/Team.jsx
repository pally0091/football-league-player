import React from 'react';
import { Link } from 'react-router-dom';

const Team = ({ team }) => {
    const { strTeam, strTeamShort, intFormedYear, strCountry, strTeamLogo } = team;
    // console.log(strTeam)
    return (
        <div className='rounded-lg p-2 text-center shadow-inner shadow-black hover:shadow-xl hover:bg-sky-200 hover:scale-105 transition-all duration-700'>
            <img src={strTeamLogo} alt={strTeam} />
            <h2 className='text-2xl font-semibold italic'>{strTeam}</h2>
            <h3>Short name : {strTeamShort}</h3>
            <h4>Team formed in : {intFormedYear}</h4>
            <Link to={`/${strCountry}`}>
                <button className='bg-black text-white py-1 px-3 w-full rounded-full hover:scale-90 transition-all duration-500 '>{strCountry}</button>
            </Link>
            
        </div>
    );
};

export default Team;