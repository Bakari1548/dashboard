import React from 'react';
import Aside from './aside';
import Activities from './activities';
import Customers from './customers';
import { FiSearch } from 'react-icons/fi';


const Dashboard = () => {

    return (
        <div className='flex flex-row'>
            <Aside />
            <div className='w-full mx-16 flex flex-col gap-10 my-10'>
                <div className='flex justify-between my-8'>
                    <h1 className='text-3xl font-semibold text-left'>Hello Evano👋,</h1>
                    <input type="search" name="search" id="search" placeholder='Search' className='bg-white rounded-2xl p-2 placeholder: Search' />
                </div>
                <Activities />
                <Customers />
                
            </div>

        </div>
    );
}

export default Dashboard;
