import React from 'react';
import App from './App';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
             <div className='mx-3'>
    <NavLink to="/" className='mx-3'>Home</NavLink>
    <NavLink to="/register" className='mx-3'>Register</NavLink>
    <NavLink to="/users" className='mx-3'> Users page</NavLink>
    </div>
    
    <Outlet></Outlet>
        </div>
    );
};

export default Home;