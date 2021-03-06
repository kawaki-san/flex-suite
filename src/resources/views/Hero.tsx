import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                <div className="text-center lg:w-2/3 w-full">
                    <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Presenting...</h2>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Flex Software Suite</h1>
                    <p className="leading-relaxed mb-8">A group of products that are designed, developed and deployed by Corporate Information Technology Solutions, trading as CITS</p>
                    <div className="flex justify-center">
                        <Link to="/products">
                            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Learn More</button>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
