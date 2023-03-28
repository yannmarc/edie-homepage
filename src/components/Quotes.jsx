import React, { Fragment } from 'react'

import carlos from '../assets/imgs/pngs/person4.png';

const Quotes = () => {
  return (
    <Fragment>
        <div className="px-6 max-w-5xl mx-auto pt-[150px]">
            <div className="text-2xl lg:text-4xl lg:w-[937px] lg:leading-[54px]"><h3>“Fast and outstanding resutls. Edie understands their customer’s needs. They have a young and talented team.”</h3></div>
            <div className="flex gap-5 pt-10 pb-[203px]">
                <div className="w-[82px] h-full rounded-2xl overflow-hidden"><img className="object-cover w-full" src={carlos} alt="carlos-tran" /></div>
                <div className="">
                    <h3 className="text-2xl">Carlos Tran</h3>
                    <p className="pt-3 text-slate-300">The Decorate Gatsby</p>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Quotes