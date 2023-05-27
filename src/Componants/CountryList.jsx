import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CountriesCat from './CountriesCat';
import LeagueCard from './LeagueCard';
import PulseLoader from "react-spinners/PulseLoader";

const CountryList = () => {
    const [loading, setLoading] = useState(true)
    const data = useLoaderData();
    const listLeagues = data?.countries;
    
    useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
    // console.log(loading)
    // console.log(listLeagues)
    return (
        <div className='text-center'>
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
                    <div>
                        <div className='sticky'>
                            <CountriesCat></CountriesCat>
                        </div>
                        <div>
                            <h3 className='text-center text-sky-200 mt-2 text-3xl font-semibold'>{listLeagues?.length} Leagues in this Country</h3>
                            <div className='mt-5 grid grid-cols-2 gap-3 p-10'>
                                {listLeagues?.map(league => (
                                    <LeagueCard
                                        key={league?.idLeague}
                                        league={league}
                                    ></LeagueCard>
                                ))}
                            </div>
                            
                        </div>
                    </div>
            }
            
        </div>
    );
};

export default CountryList;