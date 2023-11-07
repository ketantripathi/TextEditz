import React from 'react'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
      <nav className={`bg-white ${props.mode} w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className={`self-center text-2xl font-semibold whitespace-nowrap dark:text-${(props.mode=='dark:bg-gray-200')? 'black':'white'}`}>
              Portfolio
            </span>
          </a>
          <div className="flex md:order-2">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" onClick={props.togglemode}/>
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className={`ml-3 text-sm font-medium text-gray-900 dark:text-${(props.mode=='dark:bg-gray-200')? 'black':'white'}`} >Dark Mode</span>
            </label>
            
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className={`flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ${props.mode} md: dark:border-gray-700`}>
              <li>
                <a
                  href ="/"
                  className={`block py-2 pl-3 pr-4 text-${(props.mode=='dark:bg-gray-200')? 'white':'black'} bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-900"
                  aria-current="page`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href ="/about"
                  className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-${(props.mode=='dark:bg-gray-200')? 'black':'white'} dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-${(props.mode=='dark:bg-gray-200')? 'black':'white'} dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-${(props.mode=='dark:bg-gray-200')? 'black':'white'} dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
