import { imageListClasses, Rating } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps';
import React from 'react'

function BellaItalia() {

    const Bellarestu = [
        {
            title: "Bella italia",
            image: "public/Ystar.png",
            rating: "5.0",
            review: "(834 reviews)",
            desc: " The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. ",
            locationImg: "public/Wlocation.png",
            location: "Singapour, Bishan-Ang Mo Kio Park ",
            clockImg: "public/Wclock.png",
            date: "7j/7, 08:00 - 22:00",
            menuImage: "public/Bellalogo.png"
        },
    ];

    const image = [
        {
            img1: "public/D2.png",
            img2: "public/D3.png",
            img3: "public/D4.png",
            img4: "public/D5.png",
        }
    ];

    const Informations = [
        {
            img:"public/Menu.png",
            heading:"See the menu"
        },
        {
            img:"public/Call.png",
            heading:"+847 87 37 29 01"
        },
        {
            img:"public/Location.png",
            heading:"Singapour, Bishan"
        },
        {
            img:"public/Clock.png",
            heading:"7j/7, 08:00 - 22:00"
        },
        {
            img:"public/Web.png",
            heading:"www.bellaitalia.com"
        },
    ];

    const icons = [
        {
            icon1:"public/Facebook.png",
            icon2:"public/Instagram.png",
            icon3:"public/Tiktok.png",
            icon4:"public/Whatsapp.png",
        }
    ];





    return (
        <section>
            <div className='mb-24'>
                <h1 className='text-[#232323] font-bold container mx-auto px-12 lg:px-24 py-2 lg:py-4' >
                    Home / BellaItalia
                </h1>
                <div className="bg-[url('public/BellaItalia.png')] wax-w-full h-[65vh] bg-cover bg-center relative ">
                    <div className='container mx-auto px-12 lg:px-24'>
                        {
                            Bellarestu.map((item, index) => (
                                <div key={index}>
                                    <h1 className='text-white font-bold text-[52px] pt-12 pb-4'>{item.title}</h1>
                                    <div className='flex items-center gap-3'>
                                        <div className='flex gap-1'>
                                            <img src={item.image} alt="" />
                                            <img src={item.image} alt="" />
                                            <img src={item.image} alt="" />
                                            <img src={item.image} alt="" />
                                            <img src={item.image} alt="" />
                                        </div>
                                        <p className='text-white font-bold text-[19px]'>{item.rating}</p>
                                        <p className='text-white font-semibold text-[17px]'>{item.review}</p>
                                    </div>
                                    <p className='pt-6 max-w-[528px] text-white font-semibold'>{item.desc}</p>
                                    <div className='flex items-center gap-4 pt-10'>
                                        <img src={item.locationImg} alt="Location" />
                                        <p className=' font-semibold text-white'>{item.location}</p>
                                    </div>
                                    <div className='flex items-center gap-4 pt-4'>
                                        <img src={item.clockImg} alt="Clock" />
                                        <p className=' font-semibold text-white'>{item.date}</p>
                                    </div>
                                    <img className='absolute left-[50%] top-[90%]' src={item.menuImage} alt="" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-12">
                <h1 className='text-[#1E1E1E] text-[34px] font-semibold px-2'>Discover our magnificent place in photos</h1>
                <p className='text-[#5E5E5E] max-w-[601px] pt-2 px-3'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing.</p>

                <div className='mt-5 flex flex-col md:flex-row items-center justify-center gap-2'>

                    <div className="relative w-full lg:w-1/2 flex flex-col  justify-end" >
                        <img className='' src="public/D1.png" alt="" />
                        <div className='absolute text-white pb-5 pl-12'>
                            <button className='flex items-center gap-3 font-semibold px-6 py-2 bg-white hover:bg-gray-100 transition rounded-full text-black'>
                                <AppsIcon/>
                                View all photos (7)
                            </button>
                        </div>
                    </div>

                    <div className=" lg:w-1/2 flex  justify-start" >
                        {
                            image.map((item, index) => (
                                <div key={index} className=' space-y-2'>
                                    <div className='flex gap-2 '>
                                        <img src={item.img1} alt="image" />
                                        <img src={item.img3} alt="image" />
                                    </div>
                                    <div className='flex gap-2'>
                                        <img src={item.img2} alt="image" />
                                        <img src={item.img4} alt="image" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='container mx-auto flex flex-col md:flex-row justify-between gap-6 mt-24 px-3'>
                <div>
                    <h1 className='text-[#1E1E1E] text-[32px] font-semibold mb-5 lg:mb-8'>More Informations</h1>
                    <div className='space-y-5'>
                        {
                            Informations.map((data, index) => (
                                <div key={index} className='flex items-center gap-3 lg:gap-12 cursor-pointer'>
                                    <img src={data.img} alt="icons" />
                                    <h2 className='text-[20px] text-[#232323] font-medium border-b-2 hover:border-orange-400 transition'>{data.heading}</h2>
                                </div>
                            ))
                        }
                    </div>
                    <div className='mt-5 lg:mt-12'>
                        {
                            icons.map((icon, index) => (
                                <div key={index} className='flex items-center gap-5 lg:gap-12'>
                                    <img src={icon.icon1} alt="Facebook" />
                                    <img src={icon.icon2} alt="Instagram" />
                                    <img src={icon.icon3} alt="Toktok" />
                                    <img src={icon.icon4} alt="Whatsapp" />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <img src="public/Map2.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default BellaItalia
