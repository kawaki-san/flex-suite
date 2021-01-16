import React from 'react'

function ServiceItem({ title, description }: { title: string, description: string }) {
    return (

        <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
            </div>
            <div className="flex-grow pl-6">
                <h2 className="text-white text-lg title-font font-medium mb-2">{title}</h2>
                <p className="leading-relaxed text-base">{description}</p>
                <a href="https://cits.co.tz" className="mt-3 text-indigo-400 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>

        </div>
    )
}

export default ServiceItem
