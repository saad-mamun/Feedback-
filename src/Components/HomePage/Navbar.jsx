import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

    return (
        <nav>
            <div className=' container mx-auto px-4 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4  mt-4 items-center justify-between '>

                <NavLink to="/">
                    <button className='flex flex-col items-center justify-center gap-3 text-[#AFAFAF] hover:text-[#1677BD]'>
                        <img src="public/All.png" alt="" />
                        <h1 >All</h1>
                    </button>
                </NavLink>

                <NavLink to="/restaurants" >
                    <button className='flex flex-col items-center justify-center gap-3 text-[#AFAFAF] hover:text-[#1677BD]'>
                        <img src="public/Restaurent.png" alt="" />
                        <h1 >Restaurants</h1>
                    </button>
                </NavLink>

                <button className='flex flex-col items-center justify-center gap-3 text-[#AFAFAF] hover:text-[#1677BD]'>
                    <img src="public/Hotels.png" alt="" />
                    <h1 >Hotels</h1>
                </button>
                <button className='flex flex-col items-center justify-center gap-3 text-[#AFAFAF] hover:text-[#1677BD]'>
                    <img src="public/Homeservices.png" alt="" />
                    <h1 >Home services</h1>
                </button>
                <button className='flex flex-col items-center justify-center gap-3 text-[#AFAFAF] hover:text-[#1677BD]'>
                    <img src="public/Shopping.png" alt="" />
                    <h1 >Shopping</h1>
                </button>
                <button className='flex flex-col items-center justify-center gap-3 text-[#AFAFAF] hover:text-[#1677BD]'>
                    <img src="public/Beauty.png" alt="" />
                    <h1 >Beauty & Spa</h1>
                </button>
                <button className='flex flex-col items-center justify-center gap-3 text-[#AFAFAF] hover:text-[#1677BD]'>
                    <img src="public/Carlocation.png" alt="" />
                    <h1 >Car location</h1>
                </button>
                <button className='flex flex-col items-center justify-center gap-3 text-[#AFAFAF] hover:text-[#1677BD]'>
                    <img src="public/Park.png" alt="" />
                    <h1 >Park</h1>
                </button>
                <button className='flex flex-col items-center justify-center gap-3 text-[#AFAFAF] hover:text-[#1677BD]'>
                    <img src="public/Museum.png" alt="" />
                    <h1 >Museum</h1>
                </button>
                <button className='flex flex-col items-center justify-center gap-3 text-[#AFAFAF] hover:text-[#1677BD]'>
                    <img src="public/Carwash.png" alt="" />
                    <h1 >Car wash</h1>
                </button>

                <button className='flex flex-col items-center justify-center gap-3 text-[#AFAFAF] hover:text-[#1677BD]'>
                    <img src="public/Bars.png" alt="" />
                    <h1 >Bars</h1>
                </button>
                <button className='flex flex-col items-center justify-center gap-3 text-[#AFAFAF] hover:text-[#1677BD]'>
                    <img src="public/Gyms.png" alt="" />
                    <h1 >Gyms</h1>
                </button>

            </div>
        </nav>
    )
}

export default Navbar
