import React from 'react'
import ProductEntry from '../components/ProductEntry'

function Products() {
    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">Software Suite</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <ProductEntry title='Flex Performance'
                        description='Fléx Performance is a performance, productivity and talent management software for helping organisations monitor and evaluate the execution and results on strategy, projects and ad hoc responsibilities by employees.'
                        path=''
                    />
                    <ProductEntry title='Flex CRM'
                        description='Fléx CRM is a Customer Relationship Management System that works with our Call Center or Contact center Solutions in capturing and keeping records of customers and their enquiries.'
                        path=''
                    />
                    <ProductEntry title='Flex Payroll'
                        description='Fléx Payroll is the HR & Payroll, leave and learning development management.'
                        path=''
                    />
                    <ProductEntry title='Fléx Stock and Inventory'
                        description='Fléx Stock Inventory is fully integrated set of modules that completely controls your inventory cycle.'
                        path=''
                    />
                    <ProductEntry title='Fléx HR'
                        description='Fléx HR was built with an understanding that the great capital of any organisation is in its Human Capital.'
                        path=''
                    />
                    <ProductEntry title='Fléx Asset'
                        description='Fléx Asset is a software product for managing fixed assets and property from procurement application and approval to asset/property operations/transactions and disposal.'
                        path=''
                    />
                    <ProductEntry title='Fléx Property'
                        description='Fléx Property is a property and facility management software built to give control to property and facility managers in managing space utilization, rent contracts, payments, utilities, machinery and invoicing in the property.'
                        path=''
                    /> <ProductEntry title='Fléx Boardroom'
                        description='Fléx Boardroom is a paperless boardroom management software for the board and executive management’s effectiveness and flexibility.'
                        path=''
                    /> <ProductEntry title='Fléx FX'
                        description='Fléx Fx is a foreign exchange management system for managing and reporting foreign exchange transactions with account holders, corporate clients, walk-in clients and other banks.'
                        path=''
                    />
                </div>
            </div>
        </section>
    )
}

export default Products
