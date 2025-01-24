"use client"

import { React, useState, useEffect } from 'react'
import SkeletonLoader from '@/components/SkeletonLoader';
import ProductCard from '@/components/ProductCard';

const Whishlist = () => {

    const [productQntyWhislist, setproductQntyWhislist] = useState(0);
    const [fetchData, setFetchData] = useState([]); // Initialize with an empty array
    const [localStorageProducts, setLocalStorageProducts] = useState([]); // Initialize with an empty array
    const [loading, setLoading] = useState(true);

    // Define the fetchData function separately
    const fetchProducts = async () => {
        try {
            const products = await fetch('https://fakestoreapi.com/products');
            const response = await products.json();
            // console.log(response);
            setFetchData(response);
            setLoading(false); // Set the fetched data to the state
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const getLocalStorageProducts = async () => {
        try {
            const products = JSON.parse(localStorage.getItem('wishlist'));
            setproductQntyWhislist(products.length);
            setLocalStorageProducts(products);
            setLoading(false); // Set the fetched data to the state
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchProducts(); // Call the fetch function inside useEffect
        getLocalStorageProducts(); // Call the fetch function inside useEffect
    }, []); // Empty dependency array to run on component mount

    return (
        <>
            <div className="body w-4/5 mx-auto">

                <div className="top flex justify-between items-center py-16">
                    <div className="path">
                        <span>{`Whishlist (${productQntyWhislist})`}</span>
                    </div>

                    <div className="btn">
                        <button className='border border-black rounded-lg w-48 py-3'>Move All To Bag</button>
                    </div>
                </div>

                <div className="flash_sale mb-5">

                    <div className="products">
                        <div className="cards py-3 flex items-center gap-10 overflow-x-scroll">
                            {loading ? (
                                <SkeletonLoader />
                            ) : (
                                localStorageProducts.map((item, index) => (
                                    <ProductCard key={index} item={item} />
                                ))
                            )}
                        </div>
                    </div>

                </div>

                <div className="flash_sale mt-10 mb-24">

                    <div className="cont flex justify-between items-center mb-5">
                        <div className='flex items-center justify-start gap-2'>
                            <div className='bg-red-500 w-5 h-8 rounded-md'></div>
                            <p className='text-black font-semibold'>Just For You</p>
                        </div>

                        <div className="btn">
                            <button className='border border-black rounded-lg w-32 py-3'>See All</button>
                        </div>
                    </div>

                    <div className="products">
                        <div className="cards py-3 flex items-center gap-10 overflow-x-scroll">
                            {loading ? (
                                <SkeletonLoader />
                            ) : (
                                fetchData.map((item, index) => (
                                    <ProductCard key={index} item={item} />
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Whishlist
