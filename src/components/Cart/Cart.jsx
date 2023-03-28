import React from 'react';
import { addCommas } from '../Utilities/NumberWithComma';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan , faArrowRight} from '@fortawesome/free-solid-svg-icons'; 
let trash = <FontAwesomeIcon icon={faTrashCan} />
let arrow = <FontAwesomeIcon icon={faArrowRight} />
const Cart = ({ cart }) => {
    
    let totalPrice = 0;
    let totalShipping = 0 ; 
    for (const product of cart) {
        // product.quantity = product.quantity || 1 ; 
        totalPrice = totalPrice + product?.props?.price  || product.price; 
        totalShipping = totalShipping + product?.props?.shipping || product.price; 
        console.log(product.quantity)
    }
    let tax = totalPrice*2/100 ; 
    let grandTotal = totalPrice + totalShipping + tax ; 
    return (
        <div className='bg-[#ff99004d] sticky top-16 px-7 py-7 h-[100vh]'>
            <h1 className='text-center text-2xl font-semibold'>Order Summary</h1>
            <p className='my-1'>Selected Items : {cart.length}</p>
            <p>Total Price : {addCommas(totalPrice)}$</p>
            <p className='my-1'>Total Shipping : {addCommas(totalShipping)}$</p>
            <p className='mb-1'>Tax : {tax}$</p>
            <h6 className='text-[1.3em]'>Grand Total : {addCommas(grandTotal)}$</h6>
            <div className="">
                <button className='py-2 text-white rounded-lg bg-[#FF3030] w-full font-semibold mt-12'>Clear Cart {trash}</button>
                <button className='py-2 text-white rounded-lg bg-[#FF9900] w-full font-semibold mt-4'>Clear Cart {arrow}</button>
            </div>
        </div>
    );
};

export default Cart;