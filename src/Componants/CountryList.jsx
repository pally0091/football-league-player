import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CountriesCat from './CountriesCat';

const CountryList = () => {
    
    return (
        <div className=''>
            <div className=''>
                <CountriesCat></CountriesCat>
            </div>
            <div>
                Leagues of country 
            </div>
        </div>
    );
};

export default CountryList;