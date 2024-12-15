import React, { useState } from 'react'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
function Carousel() {

    const [currentIndex, setCurrentIndex] = useState(0)

    const CarouselItems = [
        {
            image: "public/Bottega1.png",
            title: "Bottega",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            Rating: 5.0,
            Review: "(876 reviews)"
        },
        {
            image: "public/Bottega2.png",
            title: "Bottega",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            Rating: 5.0,
            Review: "(876 reviews)"
        },
        {
            image: "public/Bottega3.png",
            title: "Bottega",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            Rating: 5.0,
            Review: "(876 reviews)"
        },
        {
            image: "public/Bottega4.png",
            title: "Bottega",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            Rating: 5.0,
            Review: "(876 reviews)"
        },

    ]

    return (
        <section>
            <div className='container mx-auto px-2 bg-[#1677BD] rounded-lg mt-12'>
                <h1 className='text-xl md:text-3xl text-white p-3 '>Find the best restaurant ratings below</h1>
                {/* Carousel section */}
                <div className=' flex items-center justify-center p-4'>
                    {/* Left Arrow */}
                    <div className='pb-16'>
                        <button className=' bg-white p-2 rounded-full'>
                            <WestIcon />
                        </button>
                    </div>
                    {/* Content */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between'>
                        {
                            CarouselItems.map((item, index) => (
                                <div key={index} className='bg-white rounded-lg cursor-pointer'>
                                    <img src={item.image} alt="image" />
                                    <div className='p-3'>
                                        <h1 className='text-2xl font-semibold text-[#232323]'>{item.title}</h1>
                                        <p className='max-w-[234px] text-[#8F8F8F] mt-1' >{item.desc}</p>
                                        <div className='flex items-center justify-between gap-3 mt-3'>
                                            <div className='flex gap-1'>
                                                <img src="public/Ystar.png" alt="Rating" />
                                                <img src="public/Ystar.png" alt="Rating" />
                                                <img src="public/Ystar.png" alt="Rating" />
                                                <img src="public/Ystar.png" alt="Rating" />
                                                <img src="public/Ystar.png" alt="Rating" />
                                            </div>
                                            <p className='text-[#232323] font-bold'>{item.Rating}</p>
                                            <p className='text-[#7A7A7A] text-[14px]'>{item.Review}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* Right Arrow */}
                    <div className='pb-16'>
                        <button className=' bg-white p-2 rounded-full'>
                            <EastIcon />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Carousel
