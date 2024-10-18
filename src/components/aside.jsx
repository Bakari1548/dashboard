import React from 'react';
import '../App.css'
import { BiReceipt } from 'react-icons/bi';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { IoPersonOutline } from 'react-icons/io5';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { PiKeyLight } from 'react-icons/pi';
import { TbSettings2, TbSettingsCheck } from 'react-icons/tb';
import { TfiHelpAlt } from 'react-icons/tfi';
import { BsPerson } from 'react-icons/bs';
// import Person from '../../images/Ellipse 8.png'

const Aside = () => {
    const toggleAside = () => {
        const aside = document.querySelector('.side')
        const titre1 = document.querySelector('.titre1')
        const h3titre1 = document.querySelector('.h3titre1')
        const h3titre2 = document.querySelector('.h3titre2')
        const h3titre3 = document.querySelector('.h3titre3')
        const h3titre4 = document.querySelector('.h3titre4')
        const h3titre5 = document.querySelector('.h3titre5')
        const h3titre6 = document.querySelector('.h3titre6')
        const h3titre7 = document.querySelector('.h3titre7')

        const chevron1 = document.getElementById('chevron1')
        const chevron2 = document.getElementById('chevron2')
        const chevron3 = document.getElementById('chevron3')
        const chevron4 = document.getElementById('chevron4')
        const chevron5 = document.getElementById('chevron5')
        const chevron6 = document.getElementById('chevron6')
        const chevron7 = document.getElementById('chevron7')

        titre1.classList.toggle('md:-left-64')
        h3titre1.classList.toggle('md:-left-[96px]')
        h3titre2.classList.toggle('md:-left-[96px]')
        h3titre3.classList.toggle('md:-left-[96px]')
        h3titre4.classList.toggle('md:-left-[96px]')
        h3titre5.classList.toggle('md:-left-[96px]')
        h3titre6.classList.toggle('md:-left-[96px]')
        h3titre7.classList.toggle('md:-left-[96px]')

        chevron1.classList.toggle('md:-left-[128px]')
        chevron2.classList.toggle('md:-left-[128px]')
        chevron3.classList.toggle('md:-left-[128px]')
        chevron4.classList.toggle('md:-left-[128px]')
        chevron5.classList.toggle('md:-left-[128px]')
        chevron6.classList.toggle('md:-left-[128px]')
        chevron7.classList.toggle('md:-left-[128px]')
        
        aside.classList.toggle('md:w-[100px]')
        // aside.classList.toggle('duration-500')
    }

    return (
        <aside className=''>
            <button onClick={toggleAside} className='absolute left-9 top-5 z-50'>
                <TbSettings2 className='my-1 text-3xl text-black' />
            </button>
            <ul className='side md:w-[250px] w-[100px] bg-white sticky left-0 top-0 shadow-md duration-500 h-[100%] py-6 flex flex-col px-8 gap-6 z-40'>
                <li className='relative top-0 left-0 flex gap-2 mb-8 z-30'>
                    <h1 className='titre1 absolute md:left-1 -left-64 text-2xl font-bold duration-500 ml-10 text-black'>Dashboard<span className='text-xs font-normal mx-1.5 text-black'>v.01</span></h1>
                </li>
                <li className='flex gap-2 justify-between hover:bg-[#5932EA] duration-500 py-1.5 -my-2 px-2 rounded-lg z-30'>
                    <div className='flex flex-row gap-3'>
                        <PiKeyLight className='border border-[#9197B3] rounded-md text-xl hover:text-white font-semibold text-[#9197B3] py-[1px] my-[2.5px]' />
                        <h3 className='h3titre1 absolute md:left-[80px] -left-[96px] text-base font-semibold text-[#9197B3] py-[0px] hover:text-white duration-500'>Dashboard</h3>
                    </div>
                    <a href='#'className='mt-[12px] duration-500 absolute md:left-44 -left-[128px]' id='chevron1'><FaChevronRight className='a -mt-2 text-[#9197B3] hover:text-white' /></a>
                </li>
                <li className='flex gap-2 justify-between hover:bg-[#5932EA] duration-500 py-1.5 -my-2 px-2 rounded-lg z-30'>
                    <div className='flex flex-row gap-3'>
                        <MdOutlineProductionQuantityLimits className='border border-[#9197B3] hover:text-white rounded-md text-xl font-bold p-0.5 text-[#9197B3] py-[1px] my-[2.5px]' />
                        <h3 className='h3titre2 absolute md:left-20 -left-[96px] text-base font-semibold text-[#9197B3] py-[0px] hover:text-white duration-500'>Product</h3>
                    </div>
                    <a href='#'className='mt-[12px] duration-500 absolute md:left-44 -left-[128px]' id='chevron2'><FaChevronRight className='-mt-2 text-[#9197B3] hover:text-white' /></a>
                </li>
                <li className='flex gap-2 justify-between hover:bg-[#5932EA] duration-500 py-1.5 -my-2 px-2 rounded-lg z-30'>
                    <div className='flex flex-row gap-3'>
                        <IoPersonOutline className='border border-[#9197B3] rounded-md text-xl hover:text-white font-bold p-0.5 text-[#9197B3] py-[1px] my-[2.5px]' />
                        <h3 className='h3titre3 absolute md:left-20 -left-[96px] text-base font-semibold text-[#9197B3] py-[0px] hover:text-white duration-500'>Customers</h3>
                    </div>
                    <a href='#'className='mt-[12px] duration-500 absolute md:left-44 -left-[128px]' id='chevron3'><FaChevronRight className='-mt-2 text-[#9197B3] hover:text-white' /></a>
                </li>
                <li className='flex gap-2 justify-between hover:bg-[#5932EA] duration-500 py-1.5 -my-2 px-2 rounded-lg z-30'>
                    <div className='flex flex-row gap-3'>
                        <BiReceipt className='border border-[#9197B3] rounded-md text-xl font hover:text-white font-bold p-0.5 text-[#9197B3] py-[1px] my-[2.5px]' />
                        <h3 className='h3titre4 absolute md:left-20 -left-[96px] text-base font-semibold text-[#9197B3] py-[0px] hover:text-white duration-500'>Income</h3>
                    </div>
                    <a href='#'className='mt-[12px] duration-500 absolute md:left-44 -left-[128px]' id='chevron4'><FaChevronRight className='-mt-2 text-[#9197B3] hover:text-white' /></a>
                </li>
                <li className='flex gap-2 justify-between hover:bg-[#5932EA] duration-500 py-1.5 -my-2 px-2 rounded-lg z-30'>
                    <div className='flex flex-row gap-3'>
                        <TbSettingsCheck className='border border-[#9197B3] rounded-md text-xl hover:text-white font-bold p-0.5 text-[#9197B3] py-[1px] my-[2.5px]' />
                        <h3 className='h3titre5 absolute md:left-20 -left-[96px] text-base font-semibold text-[#9197B3] py-[0px] hover:text-white duration-500'>Promote</h3>
                    </div>
                    <a href='#'className='mt-[12px] duration-500 absolute md:left-44 -left-[128px]' id='chevron5'><FaChevronRight className='-mt-2 text-[#9197B3] hover:text-white' /></a>
                </li>
                <li className='flex gap-2 justify-between hover:bg-[#5932EA] duration-500 py-1.5 -my-2 px-2 rounded-lg z-30'>
                    <div className='flex flex-row gap-3'>
                        <TfiHelpAlt className='border border-[#9197B3] rounded-md text-xl hover:text-white font-bold p-0.5 text-[#9197B3] py-[1px] my-[2.5px]' />
                        <h3 className='h3titre6 absolute md:left-20 -left-[96px] text-base font-semibold text-[#9197B3] py-[0px] hover:text-white duration-500'>Help</h3>
                    </div>
                    <a href='#'className='mt-[12px] duration-500 absolute md:left-44 -left-[128px]' id='chevron6'><FaChevronRight className='-mt-2 text-[#9197B3] hover:text-white' /></a>
                </li>
                <li className='flex gap-4 justify-between hover:bg-[#5932EA] duration-500 py-1.5 mt-32 px-2 rounded-lg z-30'>
                    <div className='flex gap-0'>
                        <BsPerson className='border border-[#9197B3] rounded-md text-xl hover:text-white font-bold p-0.5 text-[#9197B3] py-[1px] my-[6px]' />
                        <h3 className='h3titre7 absolute md:left-20 -left-[96px] text-xs font-semibold text-black py-[0px] hover:text-white duration-500'>Evano <br /> <span className='text-xs text-[#9197B3]'>Project Manager</span></h3>
                    </div>
                    <a href='#'className='mt-[12px] duration-500 absolute md:left-44 -left-[128px]' id='chevron7'><FaChevronDown className='mt-0 text-[#9197B3] hover:text-white' /></a>
                </li>
                
            </ul>
            </aside>
    );
}

export default Aside;
