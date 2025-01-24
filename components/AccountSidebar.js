import React from 'react'
import Link from 'next/link'

const AccountSidebar = () => {
    return (
        <>
            <div className="account-sidebar">
                <div className="col1">
                    <label className='font-semibold text-lg'> Manage My Account</label>
                    <ul className='mt-3'>
                        <li className='ml-8 my-1 text-gray-400'><Link href="/account/profile">Profile</Link></li>
                        <li className='ml-8 my-1 text-gray-400'><Link href="/account/orders">Address Book</Link></li>
                        <li className='ml-8 my-1 text-gray-400'><Link href="/account/address">My Payment Options</Link></li>
                    </ul>
                </div>
                <div className="col2 mt-5">
                    <label className='font-semibold text-lg'> My Orders</label>
                    <ul className='mt-3'>
                        <li className='ml-8 my-1 text-gray-400'><Link href="/account/profile">My Returns</Link></li>
                        <li className='ml-8 my-1 text-gray-400'><Link href="/account/orders">My Cancellations</Link></li>
                    </ul>
                </div>
                <div className="col3 mt-5">
                    <label className='font-semibold text-lg'> My Wishlist</label>
                </div>
            </div>
        </>
    )
}

export default AccountSidebar
