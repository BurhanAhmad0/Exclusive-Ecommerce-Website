"use client"
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useSession } from "next-auth/react";

const About = () => {

  const path = usePathname()
  const { data: session } = useSession()

  return (
    <div>
      <div className="path flex justify-between items-center px-24 py-16">
        <span>{`Home / ${path.replace('/', "").charAt(0).toUpperCase() + path.slice(2)}`}</span>
      </div>

      <div className="story flex justify-between items-center">
        <div className="story-text px-24 py-16 w-2/3">
          <h1 className='text-5xl font-semibold'>Our Story</h1>
          <p className='text-sm my-10'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.</p>
          <p className='text-sm my-10'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div className="img">
          <Image width={800} height={800} src={'/images/Side Image-about.svg'} alt="Img"></Image>
        </div>
      </div>

      <div className="stats flex items-center justify-center gap-10 py-20">

        <div className="box border border-gray-400 rounded-md p-7">
          <div className="icon flex items-center justify-center">
            <img className='w-14' src="/images/sellers.png" alt="sales" />
          </div>
          <div className="info text-center my-2">
            <h2 className='text-4xl font-bold my-1'>10.5k</h2>
            <p className='my-1'>Sellers active our site</p>
          </div>
        </div>

        <div className="box text-white bg-red-500 border border-gray-400 rounded-md p-7">
          <div className="icon flex items-center justify-center">
            <img className='w-14' src="/images/dollar.png" alt="dollar" />
          </div>
          <div className="info text-center my-2">
            <h2 className='text-4xl font-bold my-1'>33k</h2>
            <p className='my-1'>Monthly Product Sale</p>
          </div>
        </div>

        <div className="box border border-gray-400 rounded-md p-7">
          <div className="icon flex items-center justify-center">
            <img className='w-14' src="/images/customer.png" alt="sales" />
          </div>
          <div className="info text-center my-2">
            <h2 className='text-4xl font-bold my-1'>45.5k</h2>
            <p className='my-1'>Customer active in our site</p>
          </div>
        </div>

        <div className="box border border-gray-400 rounded-md p-7">
          <div className="icon flex items-center justify-center">
            <img className='w-14' src="/images/sale.png" alt="sales" />
          </div>
          <div className="info text-center my-2">
            <h2 className='text-4xl font-bold my-1'>25k</h2>
            <p className='my-1'>Annual gross sale in our site</p>
          </div>
        </div>

      </div>

      <div className="personalities">

        <div className="cards flex items-center justify-center gap-10 pt-10">
          <div className="card">
            <div className="image">
              <Image width={300} height={300} src={'/images/tom-cruise.svg'} alt="Img"></Image>
            </div>
            <div className="info my-3">
              <h2 className='text-4xl'>Tom Cruise</h2>
              <p className='text-sm'>Founder & Chairman</p>
            </div>
            <div className="social-icons flex items-center justify-start gap-3">
              <img src="/images/Icon-Twitter.png" alt="twitter" />
              <img src="/images/icon-instagram.png" alt="instagram" />
              <img src="/images/Icon-Linkedin.png" alt="linkedin" />
            </div>
          </div>

          <div className="card">
            <div className="image">
              <Image width={300} height={300} src={'/images/emma-watson.svg'} alt="Img"></Image>
            </div>
            <div className="info my-3">
              <h2 className='text-4xl'>Emma Watson</h2>
              <p className='text-sm'>Managing Director</p>
            </div>
            <div className="social-icons flex items-center justify-start gap-3">
              <img src="/images/Icon-Twitter.png" alt="twitter" />
              <img src="/images/icon-instagram.png" alt="instagram" />
              <img src="/images/Icon-Linkedin.png" alt="linkedin" />
            </div>
          </div>

          <div className="card">
            <div className="image">
              <Image width={300} height={300} src={'/images/will-smith.svg'} alt="Img"></Image>
            </div>
            <div className="info my-3">
              <h2 className='text-4xl'>Will Smith</h2>
              <p className='text-sm'>Product Desiger</p>
            </div>
            <div className="social-icons flex items-center justify-start gap-3">
              <img src="/images/Icon-Twitter.png" alt="twitter" />
              <img src="/images/icon-instagram.png" alt="instagram" />
              <img src="/images/Icon-Linkedin.png" alt="linkedin" />
            </div>
          </div>
        </div>

        <div className="chapter flex items-center justify-center gap-4 py-16">
          <div className="circle bg-orange-400 rounded-full w-3 h-3 border-2 border-gray-500"></div>
          <div className="circle bg-orange-400 rounded-full w-3 h-3 border-2 border-gray-500"></div>
          <div className="circle bg-orange-400 rounded-full w-3 h-3 border-2 border-gray-500"></div>
          <div className="circle bg-orange-400 rounded-full w-3 h-3 border-2 border-gray-500"></div>
          <div className="circle bg-orange-400 rounded-full w-3 h-3 border-2 border-gray-500"></div>
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
  )
}

export default About
