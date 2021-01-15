import React, { useState, useEffect } from 'react'
import { db } from '../../firebaseConfig'
import { RouteComponentProps } from 'react-router-dom'
import ProductInfo from '../components/ProductInfo';
type TParams = { id: string };

function ProductDetails({ match }: RouteComponentProps<TParams>) {
    const [product, setProduct]: any = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await db.collection("Products").doc(match.params.id).get();
                console.log('response', response.data());
                let data: any = { title: 'not found' };
                if (response.exists) {
                    data = response.data();
                }
                setProduct(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);


    return (
        <div>
            <ProductInfo product={product} />
        </div>
    )
}

export default ProductDetails
