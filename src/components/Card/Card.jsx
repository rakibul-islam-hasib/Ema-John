import React from 'react';

const Card = ({ props }) => {
    console.log(props)
    const { img, name, seller, ratings , price} = props;
    return (
        <>
            <div className=" h-[530px] relative rounded-lg bg-base-100 border">
                <figure className='px-4 py-4'><img className='rounded-lg' src={img} alt="Shoes" /></figure>
                <div className="px-4 py-4">
                    <h2 className="card-title">{name}</h2>
                    <h4 className='text-2xl mb-3'>Price : {price}$</h4>
                    <p>Manufacturer : {seller}</p>
                    <p>Rating : {ratings} Stars</p>
                </div>
                    <button className='w-[100%] hover:bg-orange-300 transition-[2s] absolute bottom-0 rounded-b-lg py-2 mt-3 bg-[#FFE0B3]'>Add To Cart</button>
            </div>
        </>
    );
};

export default Card;