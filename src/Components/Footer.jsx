import React from 'react'

function Footer() {

    const Activities = [
        {
            about: "About",
            myFeedback: "About MyFeedback",
            relation: "Investor Relations"

        },
        {
            mainFeedback: "MyFeedback",
            business: "MyFeedback for business",
            nav1: "Collections",
            nav2: "Talk",
            nav3: "Events",
            nav4: "MyFeedback blog",
            nav5: "Support",
            nav6: "Developers",
        },
        {
            vasa: "Languages",
            country: "Countries"

        },
    ]

    return (
        <div>
            <div className='w-[70%] mx-auto mt-14 mb-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-5'>
                    {
                        Activities.map((item, index) => (
                            <div key={index} className=''>
                                <div>
                                    <h2 className='text-[#1E1E1E] font-bold text-[20px] mb-4'>{item.about}</h2>
                                    <h2 className='text-[#5E5E5E] text-[14px]'>{item.myFeedback}</h2>
                                    <h2 className='text-[#5E5E5E] text-[14px]'>{item.relation}</h2>
                                </div>
                                <div>
                                    <h2 className='text-[#1E1E1E] font-bold text-[20px] mb-4'>{item.mainFeedback}</h2>
                                    <h2 className='text-[#5E5E5E] text-[14px]'>{item.business}</h2>
                                    <h2 className='text-[#5E5E5E] text-[14px]'>{item.nav1}</h2>
                                    <h2 className='text-[#5E5E5E] text-[14px]'>{item.nav2}</h2>
                                    <h2 className='text-[#5E5E5E] text-[14px]'>{item.nav3}</h2>
                                    <h2 className='text-[#5E5E5E] text-[14px]'>{item.nav4}</h2>
                                    <h2 className='text-[#5E5E5E] text-[14px]'>{item.nav5}</h2>
                                    <h2 className='text-[#5E5E5E] text-[14px]'>{item.nav6}</h2>
                                </div>
                                <div>
                                    <h2 className='text-[#1E1E1E] font-bold text-[20px] mb-4 '>{item.vasa}</h2>
                                    <h2 className='text-[#1E1E1E] font-bold text-[20px]'>{item.country}</h2>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Footer
