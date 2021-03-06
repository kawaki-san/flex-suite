import React, { useEffect, useState } from 'react'
import Benefit from './Benefit'
import ProductDetailText from './ProductDetailText'
interface Product {
    summary: string;
    details: string;
    product: string;
    benefit: Array<string>;
    banner: string;
}

function ProductInfo(currentItem: Product) {
    var benefits = currentItem.benefit;
    //  console.log("Benefits: ", benefits)



    return (
        <div>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src={currentItem.banner} />
                        </div>
                        <div className="text-center mt-10">
                            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">{currentItem.summary}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-full text-center sm:pr-8 sm:py-8">
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-white text-lg">Benefits</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                    <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2">
                                        {benefits ? benefits.map((item: string) => {
                                            console.log(item)
                                            return <Benefit key={benefits.indexOf(item)} item={item} />
                                        }) : <div>Loading Data</div>}
                                    </nav>
                                </div>
                            </div>
                            <ProductDetailText description={currentItem.details} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductInfo
