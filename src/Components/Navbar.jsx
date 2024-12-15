import React from 'react'

function Navbar() {

    const NavItems = [
        {
            image:"public/All.png",
            title:"All"
        },
        {
            image:"public/Restaurent.png",
            title:"Restaurants"
        },
        {
            image:"public/Hotels.png",
            title:"Hotels"
        },
        {
            image:"public/Homeservices.png",
            title:"Home services"
        },
        {
            image:"public/Shopping.png",
            title:"Shopping"
        },
        {
            image:"public/Carlocation.png",
            title:"Car location"
        },
        {
            image:"public/Beauty.png",
            title:"Beauty & Spa"
        },
        {
            image:"public/Park.png",
            title:"Park"
        },
        {
            image:"public/Museum.png",
            title:"Museum"
        },
        {
            image:"public/Carwash.png",
            title:"Car wash"
        },
        {
            image:"public/Bars.png",
            title:"Bars"
        },
        {
            image:"public/Gyms.png",
            title:"Gyms"
        },
    ]

  return (
    <nav>
        <div className=' container mx-auto px-4 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4  mt-4 items-center justify-between '>
            {
                NavItems.map((item,index)=>(
                    <div key={index} className='text-[#AFAFAF] hover:text-[#1677BD] cursor-pointer'>
                        <div className='flex flex-col items-center gap-4'>
                            <img src={item.image} alt="" />
                            <p className='' >{item.title}</p>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    </nav>
  )
}

export default Navbar
