import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-gradient-to-t from-cyan-600 to-indigo-950'>
            <h1 className='text-6xl text-center italic font-bold text-white' id='title'>Football League Info</h1>
            <div className='w-10/12 mx-auto flex mt-8 mb-5 justify-center'>
                <NavLink className='bg-white p-2 rounded-t-xl inline-block underline-on-hover' to='/'>Home</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;