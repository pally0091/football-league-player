import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Team from "./Team";
import PulseLoader from "react-spinners/PulseLoader";

const Teams = () => {
  const [loading, setLoading] = useState(true);
  const data = useLoaderData();
  const teams = data?.teams;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  // console.log(teams);
  return (
    <div className="text-center">
      <h4 className="text-center text-3xl font-semibold text-sky-100">
        {teams?.length} teams in this league
      </h4>
      {loading ? (
        <PulseLoader
          color="#36d7b7"
          loading={loading}
          cssOverride=""
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className=" grid grid-cols-4 p-3 my-10 gap-4">
          {teams?.map((team) => (
            <Team
              key={team?.idTeam}
              team={team}
            ></Team>
          ))}
        </div>
      )}
    </div>
  );
};

export default Teams;
