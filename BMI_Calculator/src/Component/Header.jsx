import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            {/* <Link to="/" className="flex items-center"> */}
                <img
                    src="https://png2.cleanpng.com/sh/620634366a075486a3d39804da9f0891/L0KzQYm4UcI4N5NsgpH0aYP2gLBuTfhmaZ15gJ9vaYTxdcT6TfFvbF58fd51bnX2g379hfN1d6MyfARqcHjsc8S0gBxqeF54ed95bHWwgLLuhb1idaF2jdH9LYPkdLa0hf0ubJpmRadrZnPpRLPsVvY5QGQ3RqI8OUC3QYK9UcU1O2Q1TKUDMkS4Rom1kP5o/kisspng-health-fitness-and-wellness-vector-graphics-clip-sample-page-ampquot-sade-em-dia-5bfcf4be6f8832.0390411615433043824568.png"
                    className="mr-3 h-16 "
                    alt="Logo"
                />
            {/* </Link> */}
            <div className="flex items-center lg:order-2">
                {/* <Link
                    to="#"
                    className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                > */}
                    {/* Log in */}
                {/* </Link> */}
                {/* <Link
                    to="#"
                    className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                > */}
                    {/* Get started */}
                {/* </Link> */}
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        {/* <NavLink
                        to="/"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        > */}
                            {/* Home */}
                        {/* </NavLink> */}
                    </li>
                    <li>
                        {/* <NavLink
                        to="/about"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        > */}
                            {/* About */}
                        {/* </NavLink> */}
                    </li>
                    <li>
                        {/* <NavLink
                        to="/BMI"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        > */}
                            {/* BMI */}
                        {/* </NavLink> */}
                    </li>
                    <li>
                        {/* <NavLink
                        to="/github"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        > */}
                            {/* Github */}
                        {/* </NavLink> */}
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
</header>
  )
}

export default Header