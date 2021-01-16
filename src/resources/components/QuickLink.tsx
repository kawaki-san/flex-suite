import React from 'react'
import { Link } from 'react-router-dom'

interface iProduct {
    product: string;
    url: string;
}

function QuickLink({ product }: { product: iProduct }) {
    return (
        <div>
            <li>
                <Link to={`/products/${product.url}`} className="text-gray-400 hover:text-white">{product.product}</Link>
            </li>
        </div>
    )
}

export default QuickLink
