import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CountriesCat = () => {
  const [countries, setCountries] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://www.thesportsdb.com/api/v1/json/3/all_countries.php"
      );
      const data = await response.json();
      setCountries(data?.countries);
    }
    fetchData();
  }, []);
  // console.log(countries)
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative mx-auto w-64">
      <button
        className="flex w-64 justify-center items-center px-4 py-2 text-gray-800 bg-gray-200 rounded-md focus:outline-none focus:shadow-outline"
        onClick={toggleDropdown}
      >
        Country
      </button>
      {isOpen && (
        <ul className="absolute w-64 mt-2 py-2 bg-white border rounded-md shadow-lg h-52 overflow-y-scroll overflow-x-hidden">
          {countries?.map((country) => (
            <Link
              key={country?.name_en}
              to={`/${country?.name_en}`}
              className="bg-sky-300 mx-2 rounded-full py-1 hover:bg-white"
              onClick={toggleDropdown}
            >
              <button className="w-56  mt-2">{country?.name_en}</button>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountriesCat;
