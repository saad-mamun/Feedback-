import React from 'react'

function Trend() {

    const TrendsRestaurant = [
        {
            image: "public/Bella.png",
            title: "Bella Italia",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            view: "(253 reviews)"
        },
        {
            image: "public/Little.png",
            title: "Little Shucker",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            view: "(253 reviews)"
        },
        {
            image: "public/Marafuku.png",
            title: "Marafuku Ramen",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            view: "(253 reviews)"
        },
        {
            image: "public/Bottegacard.png",
            title: "Bottega",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            view:"(253 reviews)"
        },
        {
            image: "public/Arabia.png",
            title: "Arabia Nights",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            view:"(253 reviews)"
        },
        {
            image: "public/Lokma.png",
            title: "Lokma",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            view:"(253 reviews)"
        },
        {
            image: "public/Thesnug.png",
            title: "The snug",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            view:"(253 reviews)"
        },
        {
            image: "Starbelly.png",
            title: "Starbelly",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            view:"(253 reviews)"
        },
        {
            image: "public/Lori.png",
            title: "Iori",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            view:"(253 reviews)"
        },
        {
            image: "public/Ngalley.png",
            title: "Ngalley",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            view:"(253 reviews)"
        },
        {
            image: "public/Diogonal.png",
            title: "diogonal",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            view:"(253 reviews)"
        },
        {
            image: "public/Kitoko.png",
            title: "Kitoko",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            view:"(253 reviews)"
        },
    ]




    return (
        <section>
            <div className='mt-14 mb-8 container mx-auto px-4'>
                <h1 className='text-[#1E1E1E] text-[32px] font-semibold mb-2'>The latest trends</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        TrendsRestaurant.map((item, index) => (
                            <div key={index} className='bg-[#F8F8F8] hover:bg-[#faf3f3] rounded-lg transition cursor-pointer'>
                                <img className='w-full object-cover' src={item.image} alt="Image" />
                                <div className='mt-2 px-3'>
                                    <h1 className='text-[#232323] font-bold text-xl'>{item.title}</h1>
                                    <p className='max-w-[280px] text-[#8F8F8F] mt-1'>{item.desc}</p>
                                    <div className='flex gap-2 mt-3 mb-4'>
                                        <div className='flex gap-[2px] items-center'>
                                            <img src="public/Ystar.png" alt="Rating" />
                                            <img src="public/Ystar.png" alt="Rating" />
                                            <img src="public/Ystar.png" alt="Rating" />
                                            <img src="public/Ystar.png" alt="Rating" />
                                            <img src="public/Ystar.png" alt="Rating" />
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <p className='font-semibold'>5.0</p>
                                            <p>{item.view}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='mt-16 text-center'>
                    <h1 className='text-[#1E1E1E] text-[22px] pb-3'>Discover more cool restaurants</h1>
                    <button className='py-2 px-6 bg-[#1677BD] hover:bg-[#1b85d1] text-white rounded-full transition cursor-pointer'>Show more</button>
                </div>

                
            </div>
        </section>
    )
}

export default Trend
