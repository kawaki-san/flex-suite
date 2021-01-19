import React from 'react'
import Benefit from './Benefit'
import ProductDetailText from './ProductDetailText'
interface Product {
    summary: string;
    details: string;
    product: string;
    benefit: Array<string>;
}

function ProductInfo(currentItem:Product) {

    console.log("Selected Product: ", currentItem)

    return (
        <div>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500" />
                        </div>
                        <div className="text-center mt-10">
                            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">{currentItem.summary}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-white text-lg">Benefits</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>

                                    <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2">
                                        {currentItem.benefit.map(({ item }: any) => {
                                            return <Benefit title={item} />
                                        })}
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
