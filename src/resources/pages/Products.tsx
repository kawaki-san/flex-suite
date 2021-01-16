import React, { useState, useEffect } from 'react'
import { db } from '../../firebaseConfig'
import ProductEntry from '../components/ProductEntry'

function Products() {
    const [products, setProducts]: any = useState([])
    useEffect(() => {
        db.collection("Products").onSnapshot((snapshot) =>
            setProducts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        );
    }, [])



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
                    {products.map(({ id, data: { product, details, summary } }: { id: string, data: { product: string, details: string, summary: string } }) => (
                        <ProductEntry currentProduct={{ product: product, description: summary, path: id }}
                            key={id}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products
