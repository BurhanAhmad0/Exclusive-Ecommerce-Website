"use client"

import { React, useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Navbar = () => {

  const [activePage, setactivePage] = useState('1')
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession()
  const router = useRouter()
  const menuRef = useRef(null); // Reference to the menu

  // Close the menu if user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setTimeout(() => {
          setIsMenuOpen(false);
        }, 10000);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav>
      <div className="top-header relative flex items-center justify-center text-xs sm:text-sm bg-black h-12 text-white">
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <a className='font-semibold ml-2 underline' href="#">Shop Now</a>
        <div className="change-language hidden mlg:flex items-center gap-2 absolute right-24">
          <span>English</span>
          <img src="/images/open-menu.png" alt="Dropdown Menu" />
        </div>
      </div>

      <div className="header border-b border-gray-300 h-24 pt-6 px-5 sm:px-0 flex items-center justify-between sm:justify-evenly">
        <div className="logo text-3xl font-bold">
          <Link href="/"><h2>Exclusive</h2></Link>
        </div>

        <ul className="nav-links hidden sm:flex items-center gap-8">
          <li><Link onClick={() => { setactivePage('1') }} className={`transition-all duration-300 ${(activePage === '1') && 'border-b border-black'}`} href="/">Home</Link></li>
          <li><Link onClick={() => { setactivePage('2') }} className={`transition-all duration-300 ${(activePage === '2') && 'border-b border-black'}`} href="/contact">Contact</Link></li>
          <li><Link onClick={() => { setactivePage('3') }} className={`transition-all duration-300 ${(activePage === '3') && 'border-b border-black'}`} href="/about">About</Link></li>
          <li><Link onClick={() => { setactivePage('4') }} className={`transition-all duration-300 ${(activePage === '4') && 'border-b border-black'}`} href="/auth/signup">Sign Up</Link></li>
        </ul>

        <div className="settings flex items-center gap-5">
          <div className="search relative">
            <input className='hidden mlg:block bg-gray-400 rounded-lg max-w-64 h-10 bg-opacity-20 px-3 outline-none placeholder:text-sm' type="search" placeholder='What are you looking for?' name="search" id="search" />
            <img className='mlg:absolute right-2 bottom-2' src="/images/search.png" alt="search" />
          </div>
          <div className="nav-buttons flex items-center gap-3">
            <img onClick={() => {router.push('/whishlist')}} className='hidden mlg:block cursor-pointer' src="/images/Wishlist.png" alt="wishlist" />
            <img onClick={() => {router.push('/cart')}} className='cursor-pointer' src="/images/Cart.png" alt="cart" />
            <div className="account relative z-20 text-white">
              <img onClick={() => { setIsMenuOpen(!isMenuOpen) }} className={`cursor-pointer rounded-full p-1 transition-all duration-300 ${(isMenuOpen) && 'bg-red-400'}`} src="/images/user.png" alt="user" />
              <ul ref={menuRef} className={`account-options ${(isMenuOpen) ? 'block' : 'hidden'} w-60 h-52 pl-4 rounded-md absolute top-11 right-0 bg-black bg-opacity-40 backdrop-blur-md`}>
                <li onClick={() => {
                  router.push(`/${session ?
                    (session.user.name ? session.user.name.split(' ')[0] : `${session.user.first_name}`)
                    : ''
                    }`)
                }} className='cursor-pointer flex items-center gap-3 my-4'><img className="w-5" src="/images/account.png" alt="Account" /><p>Manage My Account</p></li>
                <li className='cursor-pointer flex items-center gap-3 my-4'><img className="w-5" src="/images/orders.png" alt="Orders" /><p>My Order</p></li>
                <li className='cursor-pointer flex items-center gap-3 my-4'><img className="w-5" src="/images/cancel.png" alt="Cancellations" /><p>My Cancellations</p></li>
                <li className='cursor-pointer flex items-center gap-3 my-4'><img className="w-5" src="/images/favourites.png" alt="Reviews" /><p>My Reviews</p></li>
                <li onClick={() => {
                  signOut();
                }} className="cursor-pointer flex items-center gap-3 my-4">
                  <img className="w-5" src="/images/logout.png" alt="Logout" /><p>Logout</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
