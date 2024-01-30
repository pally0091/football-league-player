import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const LeagueCard = ({ league }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    strLeague,
    strGender,
    strCountry,
    strDescriptionEN,
    strSport,
    strBadge,
    strLogo,
  } = league;

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
        <div className="bg-indigo-400 rounded-md shadow-lg shadow-white p-4">
          <h3 className="text-2xl font-bold text-center mb-3 italic league-name">
            {strLeague}
          </h3>
          <div className=" flex flex-row items-center">
            <div className="w-1/2">
              <img
                src={strBadge}
                alt="fanart"
              />
            </div>
            <div className="w-1/2 p-4">
              <h4 className="text-lg">Type : {strGender}</h4>
              <h4 className="text-xl font-semibold">
                League for : {strCountry}
              </h4>
              <h4>{strSport} Team</h4>
              <Link
                className=" hover:font-bold underline-on-hover"
                to={`/teams/${strLeague}`}
              >
                Teams in this League
              </Link>
            </div>
          </div>
          {/* modal toggle button  */}
          <button
            className="btn btn-info"
            onClick={toggleModal}
          >
            Details
          </button>
        </div>
      </div>
      {/* modal  */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded-md shadow-lg z-50 overflow-y-auto"
            >
              <div className="modal-content py-4 text-left px-6 relative">
                <button
                  onClick={toggleModal}
                  className="modal-close absolute top-0 right-0 m-4 text-black text-3xl cursor-pointer"
                >
                  ✕
                </button>
                <h3 className="text-xl font-bold mb-4">{strLeague}</h3>
                <p className="py-2">{strDescriptionEN}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LeagueCard;
