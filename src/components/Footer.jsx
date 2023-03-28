import React, { Fragment } from 'react'
import { FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    const icons = []
  return (
    <Fragment>
        <div className="bg-[#100E1D] w-full">
            <div className="flex flex-col gap-9 max-w-5xl mx-auto lg:grid lg:grid-cols-3 py-9 px-6 lg:pt-12 lg:pb-[180px]">
                <ul className="flex flex-col gap-2 text-white ">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Our work</a></li>
                    <li><a href="#">Client</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="">
                    <h2 className="font-bold text-[36px] text-white pb-2">Edie</h2>
                    <ul className=" flex flex-row lg:flex lg:flex-row gap-1">
                        <li><a href="#"><FaInstagram className="text-white  w-5 h-5"/></a></li>
                        <li><FaTwitter className="text-white w-5 h-5"/></li>
                        <li><FaLinkedinIn className="text-white w-5 h-5"/></li>
                    </ul>
                </div>
                <div className="">
                    <form action="" className="relative text-white">
                        <span className="text-[10px] font-light inline-block lg:pb-3">Want us to contact you?</span>
                        <input placeholder="Email" type="text" name="email" className="bg-[#F2F2F2] rounded-xl block w-full py-[12px] relative px-5"></input>
                        <a href="#" className="absolute bottom-0 translate-y-[-2px] right-1 py-3 px-5 bg-blue-400 text-white text-sm rounded-xl inline-block">Login</a>
                    </form>
                </div>
            </div>
            <p className="text-white text-center py-4 font-light">created by frontendninja 🔥 - devChallenges.io</p>
        </div>
    </Fragment>
  )
}

export default Footer