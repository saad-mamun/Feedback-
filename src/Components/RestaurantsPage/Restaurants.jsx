import React from 'react'

import Filter from './Filter';
import { NavLink } from 'react-router-dom';
function Restaurants() {

    const BestRestaurants = [
        {
            image: "public/Thesnug.png",
            title: "Bella italia",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            rating: "public/Ystar.png",
            rattingPoint: "5.0",
            views: "4.5 (654 reviews)",
        },
        {
            image: "public/Bottegacard.png",
            title: "Bottega",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            rating: "public/Ystar.png",
            rattingPoint: "5.0",
            views: "4.5 (654 reviews)"
        },
        {
            image: "public/Little.png",
            title: "Little Shucker",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            rating: "public/Ystar.png",
            rattingPoint: "5.0",
            views: "4.5 (654 reviews)"
        },
        {
            image: "public/Lokma.png",
            title: "Lokma",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            rating: "public/Ystar.png",
            rattingPoint: "5.0",
            views: "4.5 (654 reviews)"
        },
        {
            image: "public/Little.png",
            title: "Starbelly",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            rating: "public/Ystar.png",
            rattingPoint: "5.0",
            views: "4.5 (654 reviews)"
        },
        {
            image: "public/Thesnug.png",
            title: "The melt",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            rating: "public/Ystar.png",
            rattingPoint: "5.0",
            views: "4.5 (654 reviews)"
        },
        {
            image: "public/Arabia.png",
            title: "Arabia Nights",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            rating: "public/Ystar.png",
            rattingPoint: "5.0",
            views: "4.5 (654 reviews)"
        },
    ]


    return (
        <section>
            <div className='container mx-auto px-2 flex flex-col-reverse lg:flex-row lg:items-start  items-center justify-between gap-2'>
                {/* Left section */}
                <div className='w-full lg:w-1/2 '>
                    <h1 className='text-[#232323] font-medium mt-2'>Home / All restaurants</h1>
                    <div className='flex items-end justify-between mt-2 mb-3 '>
                        <h2 className='text-[32px]  font-bold text-[#232323]'>best restaurants in singapore</h2>
                        <button >
                            <Filter />
                        </button>
                    </div>

                    <div className='space-y-4'>
                        {
                            BestRestaurants.map((item, index) => (
                                <div key={index} className='space-y-4'>
                                    <div className='flex flex-col md:flex-row  gap-4'>
                                        <img className='max-w-[209px] h-[189px]' src={item.image} alt="Hotel" />
                                        <div className='w-full md:max-w-[280px]'>
                                            <NavLink to="/bellaItalia">
                                                <h2 className='font-semibold text-[#232323] text-[22px] mt-2'>{item.title}
                                                </h2>
                                            </NavLink>
                                            <p className='text-[#8F8F8F] mt-2 mb-3 max-w-[280px]' >{item.desc}</p>
                                            <div className='flex items-start lg:items-center flex-col lg:flex-row gap-2'>
                                                <div className='flex gap-[2px]'>
                                                    <img src={item.rating} alt="" />
                                                    <img src={item.rating} alt="" />
                                                    <img src={item.rating} alt="" />
                                                    <img src={item.rating} alt="" />
                                                    <img src={item.rating} alt="" />
                                                </div>
                                                <div className='flex gap-1'>
                                                    <p className='font-semibold text-[#232323]'>{item.rattingPoint}</p>
                                                    <p className='text-[#8F8F8F]'>{item.views}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            ))
                        }
                    </div>
                    <button className='text-white mt-5 px-5 py-2 rounded-full bg-[#1677BD] hover:bg-[#1980c9] transition'>
                        Show more
                    </button>
                </div>
                {/* Right section */}
                <div className='w-full lg:w-1/2 flex justify-end'>
                    <img className='max-w-[500px]' src="public/Map1.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Restaurants
