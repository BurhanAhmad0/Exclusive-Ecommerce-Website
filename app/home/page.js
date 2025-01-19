"use client"
import { React, useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Countdown from 'react-countdown';
import SkeletonLoader from '@/components/SkeletonLoader';

export default function Home() {

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
        <div className="block-1 mb-5 flex items-center justify-between">
          <div className="menu w-56 border-r border-[#d1d5db]">
            <ul className='pt-3'>
              <li className='mt-3 w-48 flex items-center justify-between gap-3'><Link href={'#'}>Woman's Fashion</Link><span className="material-symbols-outlined">
                chevron_right
              </span></li>
              <li className='mt-3 w-48 flex items-center justify-between gap-3'><Link href={'#'}>Man's Fashion</Link><span className="material-symbols-outlined">
                chevron_right
              </span></li>
              <li className='mt-3'><Link href={'#'}>Electronics</Link></li>
              <li className='mt-3'><Link href={'#'}>Home & Lifestyle</Link></li>
              <li className='mt-3'><Link href={'#'}>Medicine</Link></li>
              <li className='mt-3'><Link href={'#'}>Sports & Outdoor</Link></li>
              <li className='mt-3'><Link href={'#'}>Baby's & Toys</Link></li>
              <li className='mt-3'><Link href={'#'}>Groceries & Pets</Link></li>
              <li className='mt-3'><Link href={'#'}>Health & Beauty</Link></li>
            </ul>
          </div>

          <div className="banner w-full px-4 text-white">
            <div className="cover mx-5 mt-5 py-3 bg-black w-full flex items-center">
              <div className="left pl-12">
                <div className="logo my-5">
                  <img src="/images/iPhone-logo.png" alt="iPhone-logo" />
                </div>
                <div className="text font-bold text-4xl my-5">
                  <p>Up to 10% off Voucher</p>
                </div>
                <div className="btn cursor-pointer my-5 w-fit flex items-center justify-center gap-2">
                  <button className='border-b py-1 border-white'>Shop Now</button>
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </div>
              </div>
              <div className="right">
                <Image className='mt-2' width={500} height={500} src={'/images/iPhone.png'} alt="Img"></Image>
              </div>
            </div>
          </div>
        </div>

        <div className="flash_sale border-b border-gray-500 mb-16">
          <div className="cont-head">
            <div className='mt-20 flex items-center justify-start gap-2'>
              <div className='bg-red-500 w-5 h-8 rounded-md'></div>
              <p className='text-red-500 font-semibold'>Today's</p>
            </div>
            <div className="info my-2 flex items-center justify-between">
              <div className="left flex items-center gap-16">
                <div className="title text-3xl font-bold">
                  <p>Flash Sales</p>
                </div>
                <div className="countdown text-3xl font-bold">
                  <Countdown date={Date.now() + 999999999} />
                </div>
              </div>
              <div className="arrows">
                <span className="material-symbols-outlined mx-1 bg-slate-400 rounded-full bg-opacity-20 p-2">
                  arrow_back
                </span>
                <span className="material-symbols-outlined mx-1 bg-slate-400 rounded-full bg-opacity-20 p-2">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>

          <div className="products">
            <div className="cards py-3 flex items-center gap-10 overflow-x-scroll">
              {loading ? (
                <SkeletonLoader />
              ) : (
                fetchData.map((item, index) => (
                  <div key={index} id={index} className="card bg-slate-300 rounded-md w-56 h-64">
                    <div className="image w-full h-40 overflow-hidden">
                      <img className="object-cover w-full h-full" src={item.image} alt={item.title} />
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

          <div className="btn flex items-center justify-center py-10">
            <button className="text-white text-sm bg-red-500 rounded-sm px-9 py-3">View All Products</button>
          </div>
        </div>

        <div className="offers flex items-center justify-center gap-10 py-16">

          <div className="box p-7">
            <div className="icon flex items-center justify-center">
              <img className='w-12' src="/images/delivery.png" alt="sales" />
            </div>
            <div className="info text-center my-3">
              <h2 className='text-1xl font-bold my-1'>FREE AND FAST DELIVERY</h2>
              <p className='my-1'>Free delivery for all orders over $140</p>
            </div>
          </div>

          <div className="box p-7">
            <div className="icon flex items-center justify-center">
              <img className='w-12' src="/images/customer-service.png" alt="sales" />
            </div>
            <div className="info text-center my-3">
              <h2 className='text-1xl font-bold my-1'>24/7 CUSTOMER SERVICES</h2>
              <p className='my-1'>Friendly 24/7 customer support</p>
            </div>
          </div>

          <div className="box p-7">
            <div className="icon flex items-center justify-center">
              <img className='w-12' src="/images/guarantee.png" alt="sales" />
            </div>
            <div className="info text-center my-3">
              <h2 className='text-1xl font-bold my-1'>MONEY BACK GUARANTEE</h2>
              <p className='my-1'>We reurn money within 30 days</p>
            </div>
          </div>

        </div>

        
      </div>
    </>
  );
}
