import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CountriesCat = () => {
    const [countries, setCountries] = useState();
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://www.thesportsdb.com/api/v1/json/3/all_countries.php');
            const data = await response.json();
            setCountries(data?.countries);
        }
        fetchData();
    }, []);
    // console.log(countries)
    return (
        <div className='sticky overflow-scroll overflow-y-hidden flex flex-row items-center'>
            {
                countries?.map(country => (
                    <Link
                        key={country?.name_en}
                        to={`/${country?.name_en}`}
                        className='bg-sky-300 mx-2 rounded-full py-1 hover:bg-white'
                    >
                        <button className='w-56 '>{country?.name_en}</button>
                    </Link>
                ))
            }
        </div>
    );
};

export default CountriesCat;