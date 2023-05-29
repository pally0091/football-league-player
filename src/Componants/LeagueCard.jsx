import React from 'react';
import { Link } from 'react-router-dom';



const LeagueCard = ({league}) => {
    const { strLeague, strGender, strCountry,  strDescriptionEN, strSport, strBadge, strLogo } = league;
    return (
        <div>
            <div className='bg-indigo-400 rounded-md shadow-lg shadow-white p-4'>
                <h3 className='text-2xl font-bold text-center mb-3 italic league-name'>{strLeague}</h3>
                <div className=' flex flex-row items-center'>
                    <div className='w-1/2'>
                        <img src={strBadge} alt="fanart" />
                    </div>
                    <div className='w-1/2 p-4'>

                        <h4 className='text-lg'>Type :  {strGender}</h4>
                        <h4 className='text-xl font-semibold'>League for : {strCountry}</h4>
                        <h4>{strSport} Team</h4>
                        <Link className=' hover:font-bold underline-on-hover'  to={`/teams/${strLeague}`}>Teams in this League</Link>
                    </div>
                </div>
                <div className="collapse mt-3">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-blue-200 peer-checked:text-black rounded-t-lg">
                        Details 
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-blue-200 peer-checked:text-black">
                        <p className='text-justify'>{strDescriptionEN}</p>
                    </div>
                </div>
                {/* <div className="tooltip tooltip-left" data-tip={strDescriptionEN}>
                    <button className="btn">Details</button>
                </div> */}
                
            </div>
        </div>
    );
};

export default LeagueCard;