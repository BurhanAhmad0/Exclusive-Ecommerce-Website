"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const NotFound = () => {

    const router = useRouter()

    return (
        <>
            <div className="top flex justify-between items-center px-24 py-16">
                <div className="path">
                    <p>Home /<span className='text-black'> 404 Error</span></p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center h-96 mb2'>
                <h1 className='text-7xl font-semibold'>404 - Page Not Found</h1>
                <p className='my-10'>Your visited page not found. You may go home page.</p>
                <button onClick={() => { router.push('/') }} className='mt-5 bg-[#DB4444] text-white w-52 h-14 rounded-md'>Back to home page</button>
            </div>
        </>
    )
}

export default NotFound
