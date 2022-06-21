import React from 'react'
import WorkHouse from '../assets/housemarketplace.jpg'
import Work2 from '../assets/supportdesk.jpg'
import Work3 from '../assets/feedback.jpg'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto py-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                    <p className='py-6'>Check out some of my recent work</p>
                    <img src="Workhouse" alt="" />

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Grif item */}
                    <div style={{backgroundImage: `url(${WorkHouse})`}} 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                House Marketplace
                            </span>
                            <div className='pt-8' text-center>
                                <a href="https://house-marketplace-ten-ruby.vercel.app">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo</button>
                                </a>
                                <a href="https://github.com/Alberto-Ibarra/house-marketplace">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(${Work2})`}} 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Support Desk
                            </span>
                            <div className='pt-8' text-center>
                                <a href="/">
                                    {/* <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo</button> */}
                                </a>
                                <a href="https://github.com/Alberto-Ibarra/support-desk">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(${Work3})`}} 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Feedback UI
                            </span>
                            <div className='pt-8' text-center>
                                <a href="/">
                                    {/* <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo</button> */}
                                </a>
                                <a href="https://github.com/Alberto-Ibarra/feedback-app">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Work