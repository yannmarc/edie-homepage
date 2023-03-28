import React, { Fragment } from 'react'

import heroImg from '../assets/imgs/jpgs/heroImage.jpg'

function Hero() {
  return (
    <Fragment>
        <div className="py-12 px-[13px] max-w-5xl mx-auto xl:max-w-6xl">
            <div className="px-[40px] lg:px-[250px]">
                <h5 className="font-medium text-[#2D9CDB] text-[12px] lg:text-[18px]">Unhappy with your website?</h5>
                <h2 className="font-medium text-[48px]">We create beautiful and fast web services</h2>
            </div>
            <div className="h-[145px] lg:h-[354px] rounded-lg overflow-hidden my-4"><img className="h-full w-full object-cover" src={heroImg} alt="eddie home page"/></div>
            <div className="px-[40px] lg:mx-[200px] lg:w-[506px]">
                <h2 className="font-medium text-[48px]">Story, emotion and purpose</h2>
                <p className="font-light text-[12px] py-8">We help transform your ideas into real world applications that will outperform your toughest competition and help you achieve your strategic goals in short period of time.</p>
                <form action="" className="relative">
                    <span className="text-[10px] font-light inline-block lg:pb-3">Want us to contact you?</span>
                    <input placeholder="Email" type="text" name="email" className="bg-[#F2F2F2] rounded-xl block w-full py-[14px] relative px-5"></input>
                    <a href="#" className="absolute bottom-0 translate-y-[-4px] right-1 py-3 px-7 bg-blue-400 text-white text-sm rounded-xl inline-block">Login</a>
                </form>
            </div>
        </div>
    </Fragment>
  )
}

export default Hero