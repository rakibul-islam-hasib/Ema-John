import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';

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
            <div className="ml-4 grid grid-cols-5">
                <div className="col-span-4 mt-5 grid grid-cols-3 gap-6">
                    {
                        products.map(product => <Card key={product.id} handelCart={handelCart} props={product}></Card>)
                    }
                </div>
                <div className="col-span-1">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;