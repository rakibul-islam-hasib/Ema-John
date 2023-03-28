import React from 'react';
import { addCommas } from '../Utilities/NumberWithComma';

const Cart = ({ cart }) => {
    // console.log(cart) 
    let totalPrice = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.props.price;
    }
    return (
        <div className='bg-[#ff99004d] px-7 py-7 h-[100vh]'>
            <h1 className='text-center text-2xl font-semibold'>Order Summary</h1>
            <p className='my-1'>Selected Items : {cart.length}</p>
            <p>Total Price : {addCommas(totalPrice)}$</p>
            <p className='my-1'>Total Shipping : </p>
            <p className='mb-1'>Tax : </p>
            <h6 className='text-[1.3em]'>Grand Total : </h6>
        </div>
    );
};

export default Cart;