import React from 'react'
import { Link } from 'react-router-dom'

function ProductEntry({ title, description, path }: { title: string, description: string, path: string }) {
    return (
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
            </div>
            <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">{title}</h2>
                <p className="leading-relaxed text-base">{description}</p>
                <div className=" md:mt-4 mt-6 inline-flex items-center">
                    <Link to='/bookdemo/:id'>
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">Book Demo</button>
                    </Link>

                    <Link to="/products/:id" className="text-indigo-400 inline-flex items-center ml-4">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default ProductEntry
