"use client"

import { React, useState, useEffect } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import SkeletonLoader from '@/components/SkeletonLoader';

const Whishlist = () => {

    const { data: session } = useSession();
    const [fetchData, setFetchData] = useState([]); // Initialize with an empty array
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

    useEffect(() => {
        fetchProducts(); // Call the fetch function inside useEffect
    }, []); // Empty dependency array to run on component mount

    return (
        <>
            <div className="body w-4/5 mx-auto">

                <div className="top flex justify-between items-center py-16">
                    <div className="path">
                        <span>{'Whishlist (4)'}</span>
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
                                fetchData.map((item, index) => (
                                    <div key={index} id={index} className="card rounded-md w-56 h-64">
                                        <div className="image w-full h-40 overflow-hidden bg-gray-400 bg-opacity-30">
                                            <Image width={400} height={400} className="object-cover mix-blend-multiply w-full h-full" src={item.image} alt={item.title} />
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
                                    </div>
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
                                    <div key={index} id={index} className="card rounded-md w-56 h-64">
                                        <div className="image w-full h-40 overflow-hidden bg-gray-400 bg-opacity-30">
                                            <Image width={400} height={400} className="object-cover mix-blend-multiply w-full h-full" src={item.image} alt={item.title} />
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
                                    </div>
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
