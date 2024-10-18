import React from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Customers = () => {
    return (
        <div className='bg-white p-5 rounded-3xl flex flex-col'>
            <div className= "flex justify-between">
                <div className="px-10">
                    <h1 className='text-2xl font-bold'>All Customers</h1>
                    <p className='text-[#16C098]'>Active Members</p>
                </div>
                    <input type="search" placeholder='Search' name="searchCustomers" className='bg-[#FAFBFF] p-[10px] my-3 rounded-2xl' id="searchCustomers" />
            </div>
            <table className=''>
                <thead className='text-[#B5B7C0] text-left'>
                    <th className='p-4'>Customer Name</th>
                    <th className='p-4'>Company</th>
                    <th className='p-4'>Phone Number</th>
                    <th className='p-4'>Email</th>
                    <th className='p-4'>Country</th>
                    <th className='p-4'>Status</th>
                </thead>
                <tbody>
                    <tr className='border border-collapse border-x-0 font-semibold'>
                        <td className='p-4 text-sm'>Jane Cooper</td>
                        <td className='p-4 text-sm'>Microsoft</td>
                        <td className='p-4 text-sm'>(225) 555-0118</td>
                        <td className='p-4 text-sm'>jane@microsoft.com</td>
                        <td className='p-4 text-sm'>United States</td>
                        <td className='p-4 text-sm'><button className='bg-[#16C09861] text-[#00B087] px-6 py-2 rounded-lg hover:text-green-950'>Active</button></td>
                    </tr>
                    <tr className='border border-collapse border-x-0 font-semibold'>
                        <td className='p-4 text-sm'>Floyd Miles</td>
                        <td className='p-4 text-sm'>Yahoo</td>
                        <td className='p-4 text-sm'>(255) 555-0100</td>
                        <td className='p-4 text-sm'>floyd@yahoo.com</td>
                        <td className='p-4 text-sm'>Kiribati</td>
                        <td className='p-4 text-sm'><button className='bg-[#FFC5C5] text-[#DF0404] px-5 py-2 rounded-lg hover:text-green-950'>Inactive</button></td>
                    </tr>
                    <tr className='border border-collapse border-x-0 font-semibold'>
                        <td className='p-4 text-sm'>Jean Claude</td>
                        <td className='p-4 text-sm'>Adobe</td>
                        <td className='p-4 text-sm'>(033) 555-0107</td>
                        <td className='p-4 text-sm'>jean@adobe.com</td>
                        <td className='p-4 text-sm'>France</td>
                        <td className='p-4 text-sm'><button className='bg-[#FFC5C5] text-[#DF0404] px-5 py-2 rounded-lg hover:text-green-950'>Inactive</button></td>
                    </tr>
                    <tr className='border border-collapse border-x-0 font-semibold'>
                        <td className='p-4 text-sm'>Marvin McKinney</td>
                        <td className='p-4 text-sm'>Tesla</td>
                        <td className='p-4 text-sm'>(252) 555-0126</td>
                        <td className='p-4 text-sm'>marvin@tesla.com</td>
                        <td className='p-4 text-sm'>Iran</td>
                        <td className='p-4 text-sm'><button className='bg-[#16C09861] text-[#00B087] px-6 py-2 rounded-lg hover:text-green-950'>Active</button></td>
                    </tr>
                    <tr className='border border-collapse border-x-0 font-semibold'>
                        <td className='p-4 text-sm'>Jerome Bell</td>
                        <td className='p-4 text-sm'>Google</td>
                        <td className='p-4 text-sm'>(629) 555-0129</td>
                        <td className='p-4 text-sm'>jerome@google.com</td>
                        <td className='p-4 text-sm'>Reunion</td>
                        <td className='p-4 text-sm'><button className='bg-[#16C09861] text-[#00B087] px-6 py-2 rounded-lg hover:text-green-950'>Active</button></td>
                    </tr>
                    <tr className='border border-collapse border-x-0 font-semibold'>
                        <td className='p-4 text-sm'>Kathryn Murphy</td>
                        <td className='p-4 text-sm'>Microsoft</td>
                        <td className='p-4 text-sm'>(406) 555-0120</td>
                        <td className='p-4 text-sm'>kathryn@microsoft.com</td>
                        <td className='p-4 text-sm'>Curacao</td>
                        <td className='p-4 text-sm'><button className='bg-[#16C09861] text-[#00B087] px-6 py-2 rounded-lg hover:text-green-950'>Active</button></td>
                    </tr>
                    <tr className='border border-collapse border-x-0 font-semibold'>
                        <td className='p-4 text-sm'>Jacob Jone</td>
                        <td className='p-4 text-sm'>Yahoo</td>
                        <td className='p-4 text-sm'>(208) 555-0112</td>
                        <td className='p-4 text-sm'>jacob@yahoo.com</td>
                        <td className='p-4 text-sm'>Brazil</td>
                        <td className='p-4 text-sm'><button className='bg-[#16C09861] text-[#00B087] px-6 py-2 rounded-lg hover:text-green-950'>Active</button></td>
                    </tr>
                    <tr className='border border-collapse border-x-0 font-semibold'>
                        <td className='p-4 text-sm'>Kristin Watson</td>
                        <td className='p-4 text-sm'>Facebook</td>
                        <td className='p-4 text-sm'>(704) 555-0127</td>
                        <td className='p-4 text-sm'>kristin@facebook.com</td>
                        <td className='p-4 text-sm'>Aland Island</td>
                        <td className='p-4 text-sm'><button className='bg-[#FFC5C5] text-[#DF0404] px-5 py-2 rounded-lg hover:text-green-950'>Inactive</button></td>
                    </tr>
                </tbody>
            </table>
            <div className="flex justify-between mt-8">
                <p className='text-[#B5B7C0]'>Showing data 1 to 8 of 256K entries</p>
                <div className= "flex flex-row gap-2">
                    <button className='bg-[#B5B7C0] text-#9197B3 px-2 rounded-md hover:text-white hover:bg-[#5932EA]'><BiChevronLeft /></button>
                    <button className='bg-[#B5B7C0] text-#9197B3 px-2 rounded-md hover:text-white hover:bg-[#5932EA]'>1</button>
                    <button className='bg-[#B5B7C0] text-#9197B3 px-2 rounded-md hover:text-white hover:bg-[#5932EA]'>2</button>
                    <button className='bg-[#B5B7C0] text-#9197B3 px-2 rounded-md hover:text-white hover:bg-[#5932EA]'>3</button>
                    <button className='bg-[#B5B7C0] text-#9197B3 px-2 rounded-md hover:text-white hover:bg-[#5932EA]'>4</button>
                    <button className='bg-[#B5B7C0] text-#9197B3 px-2 rounded-md hover:text-white hover:bg-[#5932EA]'><BiChevronRight /></button>
                </div>
            </div>
        </div>
    );
}

export default Customers;
