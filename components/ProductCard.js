"use client"
import {React, useState} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const ProductCard = ({ item, index }) => {

    const [addedToWhishlist, setaddedToWhishlist] = useState(false)
    const router = useRouter();

    const addToWishlist = async (e) => {
        try {
            const id = e.target.closest('.product-card').id;

            // Fetch product details from the API
            const wishlistProduct = await fetch(`https://fakestoreapi.com/products/${id}`);

            if (!wishlistProduct.ok) {
                throw new Error('Failed to fetch product');
            }

            const response = await wishlistProduct.json();

            // Retrieve existing wishlist from localStorage
            const currentWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

            // Check if product is already in the wishlist
            const isProductInWishlist = currentWishlist.some(item => item.id === response.id);

            if (!isProductInWishlist) {
                // Add the new product to the wishlist array
                currentWishlist.push(response);
                setaddedToWhishlist(true)

                // Save the updated wishlist back to localStorage
                localStorage.setItem('wishlist', JSON.stringify(response));                

                // console.log(`${response.title} added to Wishlist`);
            } else {
                setaddedToWhishlist(false)
                // Remove the product from the wishlist
                const updatedWishlist = currentWishlist.filter(item => item.id !== response.id);

                // Save the updated wishlist back to localStorage
                localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

                // console.log(`${response.title} removed from Wishlist`);
            }
        } catch (error) {
            console.error("Error adding to wishlist:", error);
        }
    };


    return (
        <div key={index} id={item.id} className="product-card relative rounded-md w-56 h-64">
            <div className="image relative w-full h-40 overflow-hidden bg-gray-400 bg-opacity-30">
                <Image width={400} height={400} className="object-cover mix-blend-multiply w-full h-full" src={item.image} alt={item.title} />
                <div className="addToCart w-full h-10 text-white bg-black flex items-center justify-center gap-2 absolute bottom-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M5 6h16l-1.5 9h-13L5 6z"></path>
                        <path d="M8 6L6 2H2"></path>
                    </svg>
                    <p>Add To Cart</p>
                </div>
            </div>
            <div className="info">
                <h2 className="text-xl font-semibold mt-1 truncate">{item.title}</h2>
                <p className="text-red-500 mt-1">${item.price}</p>
                <div className="rating mt-1 flex items-center gap-5">
                    <span className="material-symbols-outlined w-1 text-[#FFAD33]">star</span>
                    <span className="material-symbols-outlined w-1 text-[#FFAD33]">star</span>
                    <span className="material-symbols-outlined w-1 text-[#FFAD33]">star</span>
                    <span className="material-symbols-outlined w-1 text-[#FFAD33]">star</span>
                    <span className="material-symbols-outlined w-1 text-[#FFAD33]">star</span>
                </div>
            </div>
            <div onClick={(e) => { addToWishlist(e) }} className="addToWishlist bg-gray-300 rounded-full w-7 h-7 flex items-center justify-center absolute top-2 right-2 cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    className="heart"
                >
                    <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        {...(addedToWhishlist ? { fill: 'red' } : { fill: 'transparent' }) }
                        {...(addedToWhishlist ? { stroke: 'none' } : { stroke: 'black' }) }
                        strokeWidth="1.5"
                    />
                </svg>
            </div>
            <div onClick={() => {router.push('/product')}} className="viewProduct bg-gray-300 rounded-full w-7 h-7 flex items-center justify-center absolute top-11 right-2 cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    className="eye"
                >
                    <path
                        d="M12 4.5C7.5 4.5 3.75 7.5 2 12c1.75 4.5 5.5 7.5 10 7.5s8.25-3 10-7.5c-1.75-4.5-5.5-7.5-10-7.5zm0 12c-2.48 0-4.5-2.02-4.5-4.5s2.02-4.5 4.5-4.5 4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5zm0-7.5c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                        fill="transparent"
                        stroke="black"
                        strokeWidth="1.5"
                    />
                </svg>
            </div>
        </div>
    )
}

export default ProductCard
