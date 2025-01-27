"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import SkeletonLoader from '@/components/SkeletonLoader';


const ProductDetails = () => {

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
    <div className="body relative w-4/5 mx-auto">

      <div className="top flex justify-between items-center py-16">
        <div className="path">
          <p><span className='text-gray-400'>Account / Gaming / </span> Havic HV G-92 Gamepad</p>
        </div>
      </div>

      <div className="product-detail border-2 border-orange-500 flex justify-between gap-8">
        <div className="left border-2 border-blue-500 w-3/5">Left</div>
        <div className="right w-2/5">
          <div className="title font-semibold text-2xl">
            <h2>Havic HV G-92 Gamepad</h2>
          </div>
          <div className="rating flex items-center gap-5">
            <div className="stars flex items-center gap-5">
              <span className="material-symbols-outlined w-1 text-[#FFAD33]">star</span>
              <span className="material-symbols-outlined w-1 text-[#FFAD33]">star</span>
              <span className="material-symbols-outlined w-1 text-[#FFAD33]">star</span>
              <span className="material-symbols-outlined w-1 text-[#FFAD33]">star</span>
              <span className="material-symbols-outlined w-1 text-[#FFAD33]">star</span>
            </div>
            <p className='text-gray-400 ml-3'>(105 Reviews) | <span className='text-green-400'>In Stock</span></p>
          </div>
          <div className="price text-3xl mt-2">
            <p>32$</p>
          </div>
          <div className="desc border-b border-black py-5">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quos ipsam quisquam fugiat asperiores exercitationem!</p>
          </div>
          <div className="colors flex items-center gap-5 mt-5">
            <p>Colours:</p>
            <div className="flex items-center gap-4">
              <div className="color w-3 h-3 rounded-full bg-red-300 outline outline-offset-2"></div>
              <div className="color w-3 h-3 rounded-full bg-blue-300 outline outline-offset-2"></div>
            </div>
          </div>
          <div className="size flex items-center gap-5 mt-5">
            <p>Size:</p>
            <div className="flex items-center gap-4">
              <div className="size w-8 h-8 border border-black rounded-md flex items-center justify-center">XS</div>
              <div className="size w-8 h-8 border border-black rounded-md flex items-center justify-center">S</div>
              <div className="size w-8 h-8 border border-black rounded-md flex items-center justify-center">M</div>
              <div className="size w-8 h-8 border border-black rounded-md flex items-center justify-center">L</div>
              <div className="size w-8 h-8 border border-black rounded-md flex items-center justify-center">XL</div>
            </div>
          </div>
          <div className="btns my-8 flex items-center space-x-4">

            <div className="qty w-36 h-12 border border-black rounded-md flex items-center justify-between px-3">
              <button className="h-full border-r border-black pr-3 text-xl font-semibold text-gray-700 hover:text-black focus:outline-none">-</button>
              <p className="text-lg font-semibold">0</p>
              <button className="h-full border-l border-black pl-3 text-xl font-semibold text-gray-700 hover:text-black focus:outline-none">+</button>
            </div>

            <div className="buy">
              <button className="h-12 bg-red-500 text-white px-10 py-2 rounded-md">Buy Now</button>
            </div>

            <div className="whishlist w-12 h-12 border border-black rounded-md p-2 hover:bg-gray-100 transition duration-200 ease-in-out cursor-pointer flex items-center justify-center">
              <img className="w-8 h-8" src="/images/Wishlist.png" alt="Wishlist" />
            </div>
          </div>

          <div className="offers border border-black rounded-sm">
            <div className="one flex items-center gap-5 border-b border-black py-4">
              <img src="/images/icon-delivery.png" alt="" />
              <div className="txt">
                <p className='font-semibold mb-3'>Free Delivery</p>
                <p className='underline text-sm'>Enter your postal code for Delivery Availability</p>
              </div>
            </div>

            <div className="two flex items-center gap-5 py-4">
              <img src="/images/Icon-return.png" alt="" />
              <div className="txt">
                <p className='font-semibold mb-3'>Return Delivery</p>
                <p className='text-sm'>Free 30 Days Delivery Returns. <span className='underline'>Details</span></p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="flash_sale border-b border-gray-500 mb-16">
        <div className="cont-head">
          <div className='mt-20 flex items-center justify-start gap-2'>
            <div className='bg-red-500 w-5 h-8 rounded-md'></div>
            <p className='text-red-500 font-semibold'>Related Item</p>
          </div>
        </div>

        <div className="products mt-10">
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

        <div className="btn flex items-center justify-center py-10">
          <button className="text-white text-sm bg-red-500 rounded-sm px-9 py-3">View All Products</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
