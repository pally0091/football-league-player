import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CountriesCat from './CountriesCat';
import LeagueCard from './LeagueCard';

const CountryList = () => {
    const data = useLoaderData();
    const listLeagues = data?.countries;
    console.log(listLeagues)
    return (
        <div className=''>
            <div className='sticky'>
                <CountriesCat></CountriesCat>
            </div>
            <div>
                <h3 className='text-center text-3xl font-semibold'>{ listLeagues?.length} Leagues in this Country</h3>
                <div className='mt-5 grid grid-cols-2 gap-3 p-10'>
                    {
                        listLeagues?.map(league => (
                            <LeagueCard
                                key={league?.idLeague}
                                league={league}
                            ></LeagueCard>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CountryList;