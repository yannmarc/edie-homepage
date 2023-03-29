import React, { Fragment } from 'react';

import smartHome from '../assets/imgs/jpgs/smarthome.jpg';
import booking from '../assets/imgs/pngs/booking.png';
import juice from '../assets/imgs/pngs/juice-product.png';
import onboard from '../assets/imgs/pngs/onboard.png'

const Designs = () => {
    const projects = [
        {
            id: 1,
            projectCategory: "Full stack application",
            projectName: "Smart home dashboard",
            projectImg: smartHome
        },
        {
            id: 2,
            projectCategory: "UX/UI design",
            projectName: "Onboard application",
            projectImg: onboard
        },
        {
            id: 3,
            projectCategory: "Mobile application",
            projectName: "Booking system",
            projectImg: booking
        },
        {
            id: 4,
            projectCategory: "Front End applicati on",
            projectName: "Juice product homepage",
            projectImg: juice
        }
    ]
  return (
    <Fragment>
        <div className="px-4 max-w-5xl mx-auto">
            <div className="">
                <h2 className="px-5 text-2xl font-medium lg:text-4xl md:w-[300px] lg:w-[508px] py-[60px] lg:px-0">Good design means good business</h2>
                <div className="py-12 md:py-32 flex md:grid md:grid-col-2 lg:grid grid-cols-2 flex-col gap-6 lg:gap-5 md:gap-y-24 lg:gap-y-32">
                    {projects.map((item) => (
                        <div className="md:even:translate-y-[-100px]" key={item.id}>
                            <div className="rounded-3xl overflow-hidden"><img className="w-full h-full object-cover hover:scale-110 transition-all" src={item.projectImg} alt={item.projectName} title={item.projectName} /></div>
                            <span className="text-[#828282] text-[12px] block mt-5">{item.projectCategory}</span>
                            <h4 className=" text-lg font-medium pt-[2px]">{item.projectName}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Designs