import React from 'react'
import CreateIcon from '@material-ui/icons/Create';

interface iProduct {
    product: string;
    description: string;
    path: string;
    benefit?: Array<string>;
}


function EditProduct({ currentProduct }: { currentProduct: iProduct }) {
    return (
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
            </div>
            <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">{currentProduct.product}</h2>
                <p className="leading-relaxed text-base">{currentProduct.description}</p>
                <div className=" md:mt-4 mt-6 inline-flex items-center">
                  
                        <button className="inline-flex text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded"> <CreateIcon/>  Edit Product</button>
        
                </div>


            </div>
        </div>
    )
}

export default EditProduct
