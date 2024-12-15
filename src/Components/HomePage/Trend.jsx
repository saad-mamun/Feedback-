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
            view: "(253 reviews)"
        },
        {
            image: "public/Arabia.png",
            title: "Arabia Nights",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            view: "(253 reviews)"
        },
        {
            image: "public/Lokma.png",
            title: "Lokma",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            view: "(253 reviews)"
        },
        {
            image: "public/Thesnug.png",
            title: "The snug",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            view: "(253 reviews)"
        },
        {
            image: "Starbelly.png",
            title: "Starbelly",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            view: "(253 reviews)"
        },
        {
            image: "public/Lori.png",
            title: "Iori",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            view: "(253 reviews)"
        },
        {
            image: "public/Ngalley.png",
            title: "Ngalley",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            view: "(253 reviews)"
        },
        {
            image: "public/Diogonal.png",
            title: "diogonal",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            view: "(253 reviews)"
        },
        {
            image: "public/Kitoko.png",
            title: "Kitoko",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            view: "(253 reviews)"
        },
    ]

    const Activities = [
        {
            user: "public/User.png",
            userName: "Leslie sakho",
            location: "Canada, toronto",
            ratting: "public/Ystar.png",
            date: "09/11/2023",
            desc1: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            desc2: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            image: {
                img1: "public/Leslie1.png",
                img2: "public/Leslie2.png",
                img3: "public/Leslie3.png",
            },
            Discover: "Discover"

        },
        {
            user: "public/User.png",
            userName: "Chris macari",
            location: "Singapour",
            date: "09/11/2023",
            ratting: "public/Ystar.png",
            desc1: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            desc2: "The lorem ipsum is, in printing.",
            image: {
                img1: "public/Chris1.png",
                img2: "public/Chris2.png",
                img3: "public/Chirs3.png",
            },
            Discover: "Discover"

        },
        {
            user: "public/User.png",
            userName: "Jojo alba",
            date: "28/09/2023",
            location: "Kuala lumpur",
            ratting: "public/Ystar.png",
            desc1: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            desc2: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            image: {
                img1: "public/Jojo1.png",
                img2: "public/Jojo2.png",
                img3: "public/Jojo3.png",
            },
            Discover: "Discover"

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

            <div className='bg-[#F2F2F2] pt-8 pb-8'>
                <div className='md:w-[70%] mx-auto flex flex-col-reverse md:flex-row items-center gap-6'>
                    <div className='w-1/2'>
                        <h1 className='text-[#1E1E1E] text-[26px] max-w-[502px]'>MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business</h1>
                        <p className='max-w-[453px] mt-5 mb-8'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
                        </p>
                        <button className='py-2 px-6 bg-[#1E1E1E] hover:bg-[#0d0d0d] text-white rounded-full transition'>
                            Explore MyFeedback business
                        </button>
                    </div>
                    <div className='w-1/2'>
                        <img src="public/Explore.png" alt="" />
                    </div>
                </div>
            </div>

            <div className='container mx-auto mt-14 mb-8'>
                <h1 className='text-[#1E1E1E] text-[32px] font-bold'>Recents avtivities
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
                    {
                        Activities.map((item, index) => (
                            <div key={index} className='bg-[#F8F8F8] hover:bg-[#dbd3d3] p-4 rounded-xl transition delay-100 flex flex-col justify-between'>
                                <div className='flex items-center gap-6 mb-4'>
                                    <div className='p-4 rounded-full bg-white'>
                                        <img className='' src={item.user} alt="User" />
                                    </div>
                                    <div>
                                        <h2 className='text-[#232323] font-medium text-[21px]'>{item.userName}</h2>
                                        <h2 className='text-[#8A8A8A]'>{item.location}</h2>
                                    </div>
                                </div>
                                <div className='flex gap-10 mb-6'>
                                    <div className='flex gap-[2px]'>
                                        <img src={item.ratting} alt="rating" />
                                        <img src={item.ratting} alt="rating" />
                                        <img src={item.ratting} alt="rating" />
                                        <img src={item.ratting} alt="rating" />
                                        <img src={item.ratting} alt="rating" />
                                    </div>
                                    <p>{item.date}</p>
                                </div>
                                <p className='text-[#5E5E5E]' >{item.desc1}</p>
                                <p className='text-[#5E5E5E] mt-3 mb-4' >{item.desc2}</p>
                                <div className='flex gap-1 items-center max-w-[110px]'>
                                    <img src={item.image.img1} alt="Active" />
                                    <img src={item.image.img2} alt="Active" />
                                    <img src={item.image.img3} alt="Active" />
                                </div>
                                <div>
                                    <button className='font-semibold mt-3 border-b-2 border-black'>{item.Discover}</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className=' mb-6'>
                <hr />
            </div>

        </section>
    )
}

export default Trend
