import React from 'react'
import { NavLink } from 'react-router-dom'



function TopNav() {
    return (
        <section>
            <div className='container mx-auto flex justify-between items-center gap-4 px-4 mt-3 mb-3'>
                <div className='hidden md:block' >
                    <NavLink to="/">
                        <img src="public/Myfeedback.png" alt="" />
                    </NavLink>
                </div>
                {/* Search section */}
                <div>
                    <div className='flex justify-between items-center border-2 border-[#ADADAD] p-2 rounded-[50px]'>
                        <input type="search" placeholder='restaurant, hotel, service....' className='border-none outline-none px-5' />
                        <div className='w-[1px] h-[20px] bg-black'></div>
                        <input type="search" placeholder='Singapour...' className='border-none outline-none px-5' />
                        <div className='bg-[#1677BD] w-10 h-10 rounded-full'>
                            <img className='p-3' src="public/Search.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <img src="public/World.png" alt="" />
                    <button className='bg-[#1E1E1E] text-white font-medium py-2 px-5 rounded-3xl hidden lg:block'>MyFeedback for business</button>
                </div>
            </div>
            <hr />
        </section>
    )
}

export default TopNav
