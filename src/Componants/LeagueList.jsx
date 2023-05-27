import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PulseLoader from "react-spinners/PulseLoader";

const LeagueList = () => {
    const [loading, setLoading] = useState(true)
    const data = useLoaderData();
    const leagues = data.leagues;

    useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
    // console.log(leagues)
    return (
        <div className="text-center">
            {
                loading ?
                    <PulseLoader
                        color="#36d7b7"
                        loading={loading}
                        cssOverride=""
                        size={50}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                    :
                <div className='grid grid-cols-5 gap-3 p-4'>
            {
                leagues?.map(league => (
                    <div
                        key={league?.idLeague}
                        className='p-3 bg-teal-200 rounded-lg text-center shadow-lg shadow-white hover:shadow-none hover:bg-emerald-300 transition-all duration-500'
                    >
                        <h4 className='font-bold text-lg'>{league?.strLeague}</h4>
                        <p className='font-semibold'>Type of league : {league?.strSport}</p>
                        <Link className='hover:text-blue-600 hover:underline hover:font-bold underline-on-hover' to={`/teams/${league?.strLeague}`}>Teams in this League</Link>
                    </div>
                ))
            }
        </div>
            }
        </div>
    );
};

export default LeagueList;