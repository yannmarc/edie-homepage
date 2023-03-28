import React, { Fragment } from 'react'

export const Navbar = () => {
  return (
    <Fragment>
        <nav className="px-4 py-4 lg:py-8">
            <div className="flex justify-between max-w-5xl mx-auto xl:max-w-6xl">
                <div className="logo font-secondary font-extrabold text-2xl lg:text-4xl"><a href="http://">Eddie</a></div>
                <div className="">
                    <ul className="hidden lg:flex space-x-6 text-2xl">
                        <li><a href="#" className="hover:text-blue-400 hover:font-semi-bold hover:cursor-pointer transition-colors">Home</a></li>
                        <li><a href="#" className="hover:text-blue-400 hover:font-semi-bold hover:cursor-pointer transition-colors">Services</a></li>
                        <li><a href="#" className="hover:text-blue-400 hover:font-semi-bold hover:cursor-pointer transition-colors">Our Works</a></li>
                        <li><a href="#" className="hover:text-blue-400 hover:font-semi-bold hover:cursor-pointer transition-colors">Clients</a></li>
                        <li><a href="#" className="hover:text-blue-400 hover:font-semi-bold hover:cursor-pointer transition-colors">Contact</a></li>
                    </ul>
                    <span></span>
                </div>
            </div>
        </nav>
    </Fragment>
  )
}
