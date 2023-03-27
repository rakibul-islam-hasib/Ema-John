import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Shop = () => {
    const [products , setProducts] = useState([]) ; 
    useEffect(()=> {
        fetch('products.json')
        .then(res=>res.json())
        .then(data => setProducts(data))
    }, []); 
    const [cart , setCart] = useState([]); 
    const handelCart = (id) => {
        const neCart = [...cart , id] ; 
        setCart(neCart)
    }
    return (
        <div>
            <div className="ml-4 grid mt-5 grid-cols-5">
                <div className="col-span-4 grid grid-cols-3 gap-6">
                    {
                        products.map(product => <Card key={product.id} handelCart={handelCart} props={product}></Card>)
                    }
                </div>
                <div className="col-span-1">
                    <h1 className='text-center text-2xl font-semibold'>Order Summary</h1>
                    <p>Selected Items : {cart.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;