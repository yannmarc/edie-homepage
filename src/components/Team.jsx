import React, { Fragment } from 'react'

import person1 from '../assets/imgs/pngs/person1.png';
import person2 from '../assets/imgs/pngs/person2.png';
import person3 from '../assets/imgs/pngs/person3.png';

const Team = () => {
  return (
   <Fragment>
    <div className="max-w-5xl mx-auto px-6 py-[100px] lg:py-[100px] flex lg:justify-between flex-col lg:flex-row lg:items-center">
        <div className="">
            <span className="text-[#EB5757] text-lg inline-block">Meet the team</span>
            <h2 className="text-4xl leading-[54px] py-4 w-[280px]">We are chilled and a laidback team</h2>
            <p className="text-[#4F4F4F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="flex items-center gap-3 py-14">
            <div className=" rounded-3xl overflow-hidden"><img className="w-full h-full" src={person3} alt="person 1" /></div>
            <div className="flex flex-col gap-2">
                <div className="rounded-3xl overflow-hidden w-[260px] h-[260px]"><img className="w-full object-cover" src={person1} alt="person2" /></div>
                <div className="rounded-3xl overflow-hidden"><img src={person2} alt="person3" /></div>
            </div>
        </div>
    </div>
   </Fragment>
  )
}

export default Team