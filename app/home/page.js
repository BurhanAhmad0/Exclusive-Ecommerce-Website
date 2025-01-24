"use client"
import { React, useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Countdown from 'react-countdown';
import SkeletonLoader from '@/components/SkeletonLoader';
import ProductCard from '@/components/ProductCard';

export default function Home() {

  const [fetchData, setFetchData] = useState([]); // Initialize with an empty array
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on the scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add event listener for scroll events
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

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
      <div className="body relative w-4/5 mx-auto">
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
                  <Image width={400} height={400} src="/images/iPhone-logo.png" alt="iPhone-logo" />
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
                  <ProductCard key={index} item={item} />
                ))
              )}
            </div>
          </div>

          <div className="btn flex items-center justify-center py-10">
            <button className="text-white text-sm bg-red-500 rounded-sm px-9 py-3">View All Products</button>
          </div>
        </div>

        <div className="categories border-b border-gray-500 mb-12 pb-5">
          <div className="cont-head">
            <div className='mt-20 flex items-center justify-start gap-2'>
              <div className='bg-red-500 w-5 h-8 rounded-md'></div>
              <p className='text-red-500 font-semibold'>Categories</p>
            </div>
            <div className="info my-2 flex items-center justify-between">
              <div className="title text-3xl font-bold">
                <p>Browse By Category</p>
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
          <div className="boxes flex items-center justify-center gap-10 py-10">

            <div className="box w-32 h-32 border border-gray-400 rounded-md p-7 flex flex-col justify-center items-center">
              <div className="icon flex items-center justify-center">
                <Image width={400} height={400} className='w-14' src="/images/Category-CellPhone.png" alt="sales" />
              </div>
              <div className="info text-center my-2">
                <p>Phones</p>
              </div>
            </div>

            <div className="box w-32 h-32 border border-gray-400 rounded-md p-7 flex flex-col justify-center items-center">
              <div className="icon flex items-center justify-center">
                <Image width={400} height={400} className='w-14' src="/images/Category-Computer.png" alt="sales" />
              </div>
              <div className="info text-center my-2">
                <p>Computers</p>
              </div>
            </div>

            <div className="box w-32 h-32 border border-gray-400 rounded-md p-7 flex flex-col justify-center items-center">
              <div className="icon flex items-center justify-center">
                <Image width={400} height={400} className='w-14' src="/images/Category-SmartWatch.png" alt="sales" />
              </div>
              <div className="info text-center my-2">
                <p>SmartWatches</p>
              </div>
            </div>

            <div className="box w-32 h-32 bg-red-500 text-white rounded-md p-7 flex flex-col justify-center items-center">
              <div className="icon flex items-center justify-center">
                <Image width={400} height={400} className='w-14' src="/images/Category-Camera.png" alt="sales" />
              </div>
              <div className="info text-center my-2">
                <p>Camera</p>
              </div>
            </div>

            <div className="box w-32 h-32 border border-gray-400 rounded-md p-7 flex flex-col justify-center items-center">
              <div className="icon flex items-center justify-center">
                <Image width={400} height={400} className='w-14' src="/images/Category-Headphone.png" alt="sales" />
              </div>
              <div className="info text-center my-2">
                <p>HeadPhones</p>
              </div>
            </div>

            <div className="box w-32 h-32 border border-gray-400 rounded-md p-7 flex flex-col justify-center items-center">
              <div className="icon flex items-center justify-center">
                <Image width={400} height={400} className='w-14' src="/images/Category-Gamepad.png" alt="sales" />
              </div>
              <div className="info text-center my-2">
                <p>Gaming</p>
              </div>
            </div>

          </div>
        </div>

        <div className="best-selling-products">
          <div className="cont-head">
            <div className='mt-20 flex items-center justify-start gap-2'>
              <div className='bg-red-500 w-5 h-8 rounded-md'></div>
              <p className='text-red-500 font-semibold'>This Month</p>
            </div>
            <div className="info my-2 flex items-center justify-between">
              <div className="title text-3xl font-bold">
                <p>Best Selling Products</p>
              </div>
              <div className="btn flex items-center justify-center">
                <button className="text-white text-sm bg-red-500 rounded-sm px-9 py-3">View All</button>
              </div>
            </div>
          </div>

          <div className="products mt-9">
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

          <div className="banner w-full mt-24 text-white">
            <div className="cover py-10 bg-black w-full flex items-center">
              <div className="left pl-12">
                <div className="title my-5 text-green-500 font-semibold">
                  <p>Categories</p>
                </div>
                <div className="text font-bold text-4xl my-5">
                  <p>Enhance Your Music Experience</p>
                </div>
                <div className="countdown flex items-center gap-5">
                  <div className="hours bg-white w-16 h-16 rounded-full flex flex-col items-center justify-center text-black">
                    <p className="font-bold text-xl">23</p>
                    <p className="text-xs">Hours</p>
                  </div>
                  <div className="days bg-white w-16 h-16 rounded-full flex flex-col items-center justify-center text-black">
                    <p className="font-bold text-xl">05</p>
                    <p className="text-xs">Days</p>
                  </div>
                  <div className="minutes bg-white w-16 h-16 rounded-full flex flex-col items-center justify-center text-black">
                    <p className="font-bold text-xl">59</p>
                    <p className="text-xs">Minutes</p>
                  </div>
                  <div className="seconds bg-white w-16 h-16 rounded-full flex flex-col items-center justify-center text-black">
                    <p className="font-bold text-xl">35</p>
                    <p className="text-xs">Seconds</p>
                  </div>
                </div>
                <div className="btn cursor-pointer bg-green-500 my-5 w-fit rounded-sm flex items-center justify-center gap-2">
                  <button className='py-3 w-36'>Buy Now</button>
                </div>
              </div>
              <div className="right mr-6">
                <Image className='mt-2 filter drop-shadow-[0_0_30px_rgba(255,255,255,0.6)]' width={500} height={500} src={'/images/bluetooth-speaker.png'} alt="Img"></Image>
              </div>
            </div>
          </div>
        </div>

        <div className="explore-products">
          <div className="cont-head">
            <div className='mt-20 flex items-center justify-start gap-2'>
              <div className='bg-red-500 w-5 h-8 rounded-md'></div>
              <p className='text-red-500 font-semibold'>Our Products</p>
            </div>
            <div className="info my-2 flex items-center justify-between">
              <div className="title text-3xl font-bold">
                <p>Explore Our Products</p>
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

          <div className="products mt-9">
            <div className="cards py-3 flex items-center justify-evenly gap-8 flex-wrap">
              {loading ? (
                <SkeletonLoader />
              ) : (
                fetchData.slice(0, 8).map((item, index) => (
                  <ProductCard key={index} item={item} />
                ))
              )}
            </div>
          </div>

          <div className="btn flex items-center justify-center pt-10">
            <button className="text-white text-sm bg-red-500 rounded-sm px-9 py-3">View All Products</button>
          </div>
        </div>

        <div className="new-arrival pt-10">
          <div className="cont-head">
            <div className='mt-20 flex items-center justify-start gap-2'>
              <div className='bg-red-500 w-5 h-8 rounded-md'></div>
              <p className='text-red-500 font-semibold'>Featured</p>
            </div>
            <div className="info my-2 flex items-center justify-between">
              <div className="title text-3xl font-bold">
                <p>New Arrival</p>
              </div>
            </div>
          </div>

          <div className="layout h-[500px] grid grid-cols-2 grid-rows-2 gap-4 mt-10">
            <div className="ps5 relative flex justify-center items-center col-span-1 row-span-2 bg-black">
              <Image width={500} height={500} src={'/images/ps5.png'} alt='img' />
              <div className="text w-64 text-white absolute bottom-7 left-7">
                <h2 className='font-semibold text-3xl mt-3'>PlayStation 5</h2>
                <p className='mt-3'>Black and White version of the PS5 coming out on sale.</p>
                <button className='mt-3 py-1 border-b border-white'>Shop Now</button>
              </div>
            </div>
            <div className="women relative flex justify-center items-center bg-black">
              <Image className='mix-blend-hard-light' width={300} height={300} src={'/images/attractive-woman.svg'} alt='img' />
              <div className="text w-64 text-white absolute bottom-7 left-7">
                <h2 className='font-semibold text-xl mt-3'>Women's Collections</h2>
                <p className='mt-3 text-sm'>Featured woman collections that give you another vibe.</p>
                <button className='mt-3 py-1 border-b border-white'>Shop Now</button>
              </div>
            </div>
            <div className="cont w-[97%] flex items-center gap-4 col-span-2">
              <div className="speaker relative h-full w-1/2 flex justify-center items-center bg-black">
                <Image width={150} height={150} src={'/images/speaker.png'} alt='img' />
                <div className="text w-64 text-white absolute bottom-7 left-7">
                  <h2 className='font-semibold text-lg mt-1'>Speakers</h2>
                  <p className='mt-1 text-sm'>Amazon wireless speakers</p>
                  <button className='mt-1 py-1 border-b border-white'>Shop Now</button>
                </div>
              </div>

              <div className="perfume relative h-full w-1/2 flex justify-center items-center col-span-2 col-end-3 bg-black">
                <Image width={150} height={150} src={'/images/perfume.png'} alt='img' />
                <div className="text w-64 text-white absolute bottom-7 left-7">
                  <h2 className='font-semibold text-lg mt-1'>Perfume</h2>
                  <p className='mt-1 text-sm'>GUCCI INTENSE OUD EDP</p>
                  <button className='mt-1 py-1 border-b border-white'>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="offers flex items-center justify-center gap-10 py-24">

          <div className="box p-7">
            <div className="icon flex items-center justify-center">
              <Image width={500} height={500} className='w-12' src="/images/delivery.png" alt="sales" />
            </div>
            <div className="info text-center my-3">
              <h2 className='text-1xl font-bold my-1'>FREE AND FAST DELIVERY</h2>
              <p className='my-1'>Free delivery for all orders over $140</p>
            </div>
          </div>

          <div className="box p-7">
            <div className="icon flex items-center justify-center">
              <Image width={500} height={500} className='w-12' src="/images/customer-service.png" alt="sales" />
            </div>
            <div className="info text-center my-3">
              <h2 className='text-1xl font-bold my-1'>24/7 CUSTOMER SERVICES</h2>
              <p className='my-1'>Friendly 24/7 customer support</p>
            </div>
          </div>

          <div className="box p-7">
            <div className="icon flex items-center justify-center">
              <Image width={500} height={500} className='w-12' src="/images/guarantee.png" alt="sales" />
            </div>
            <div className="info text-center mt-3">
              <h2 className='text-1xl font-bold my-1'>MONEY BACK GUARANTEE</h2>
              <p className='my-1'>We reurn money within 30 days</p>
            </div>
          </div>

        </div>

        <div onClick={() => scrollToTop()} className={`scrollUp ${(isVisible) ? 'block' : 'hidden'} fixed cursor-pointer right-10 bottom-8 bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center`}>
          <span className="material-symbols-outlined">
            arrow_upward
          </span>
        </div>
      </div>
    </>
  );
}
