import React from 'react';
import { BsPeople, BsPersonCheck } from 'react-icons/bs';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { RiComputerFill, RiComputerLine } from 'react-icons/ri';

const Activities = () => {
    return (
        <div className='bg-white h-1/3 rounded-3xl p-6 grid grid-rows-1 md:grid-cols-3 grid-cols-2 gap-5'>
            <div className= 'flex gap-8 border-r'>
                <BsPeople className='my-2 w-16 h-16 bg-[#45ef7830] text-[#16C098] rounded-full p-2' />
                <div className= 'flex flex-col'>
                    <p className='text-[#B5B7C0]'>Total Customers</p>
                    <h1 className='font-bold text-3xl'>5,423</h1>
                    <p className='text-xs flex'>
                        <span className='text-[#16C098] font-semibold flex gap-1'><FaArrowUp className='my-0.5' /> 16% </span>
                        this month
                    </p>
                </div>
            </div>
            <div className= 'flex gap-8 border-r'>
                <BsPersonCheck className='my-2 w-16 h-16 bg-[#45ef7830] text-[#16C098] rounded-full p-2' />
                <div className= 'flex flex-col'>
                    <p className='text-[#B5B7C0]'>Members</p>
                    <h1 className='font-bold text-3xl'>1,893</h1>
                    <p className='text-xs flex'>
                        <span className='text-[#DF0404] font-semibold flex gap-1'><FaArrowDown className='my-0.5' /> 1% </span>
                        this month
                    </p>
                </div>
            </div>
            <div className= 'flex gap-8'>
                <RiComputerLine className='my-2 w-16 h-16 bg-[#45ef7830] text-[#16C098] rounded-full p-2' />
                <div className= 'flex flex-col'>
                    <p className='text-[#B5B7C0]'>Active Now</p>
                    <h1 className='font-bold text-3xl'>189</h1>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activities;
