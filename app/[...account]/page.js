"use client"
import React from 'react'
import { useSession } from "next-auth/react";
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import AccountSidebar from '@/components/AccountSidebar';


const Account = () => {

    const { data: session } = useSession()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        // try {
        //     let a = await fetch("/api/enquiry", {
        //         method: "POST", headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(data),
        //     })
        //     let res = await a.json()
        //     // console.log(res)

        //     if (res.success) {
        //         toast.success("Message Sent Successfully!", {
        //             position: "top-center",
        //             autoClose: 3000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined
        //         });
        //     }
        //     else {
        //         toast.error("Failed to send message!", {
        //             position: "top-center",
        //             autoClose: 3000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined
        //         });
        //     }
        // } catch (error) {
        //     console.log(error)
        // }
    }

    return (
        <>
            <div className="body w-4/5 mx-auto">
                <div className="top flex justify-between items-center py-16">
                    <div className="path">
                        <p><span className='text-gray-400'>Home /</span> My Account</p>
                    </div>

                    <div className="greeting">
                        <p>Welcome! <span className="text-red-500">
                            {session ?
                                (session.user.name ? session.user.name.split(' ')[0] : `${session.user.first_name}`)
                                : ''
                            }
                        </span></p>
                    </div>
                </div>

                <div className="main flex justify-between mb-24">
                    <AccountSidebar />

                    <div className="right w-3/4 shadow-gray-300 shadow-sm">
                        <div className="label p-5">
                            <p className='font-semibold text-lg text-red-500'>Edit Your Profile</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="shadow-gray-300 h-[520px] shadow-sm grid grid-cols-2 p-5 gap-5">
                            <div className='col-span-1 w-full'>
                                <label className='font-semibold mb-2 text-lg'>First Name</label>
                                <input
                                    {...register("first-name", { required: { value: true, message: 'This field is required!' } })}
                                    className="w-full p-3 rounded-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    placeholder="Your First Name"
                                />
                            </div>
                            <div className='col-span-2 w-full'>
                                <label className='font-semibold mb-2 text-lg'>Last Name</label>
                                <input
                                    {...register("last-name", { required: { value: true, message: 'This field is required!' } })}
                                    className="w-full p-3 rounded-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    placeholder="Your Last Name"
                                />
                            </div>
                            <div>
                                <label className='font-semibold mb-2 text-lg'>Email</label>
                                <input
                                    {...register("email", { required: { value: true, message: 'This field is required!' } })}
                                    className="w-full p-3 rounded-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className='w-full col-span-2'>
                                <label className='font-semibold mb-2 text-lg'>Address</label>
                                <input
                                    {...register("address", { required: { value: true, message: 'This field is required!' } })}
                                    className="w-full p-3 rounded-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    placeholder="Your Address"
                                />
                            </div>
                            <div className="md:col-span-3">
                                <label className='font-semibold mb-2 text-lg'>Password Changes</label>
                                <input
                                    {...register("curr-password", { required: { value: true, message: 'This field is required!' } })}
                                    className="w-full mt-3 p-3 rounded-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    placeholder="Current Password"
                                />
                                <input
                                    {...register("new-password", { required: { value: true, message: 'This field is required!' } })}
                                    className="w-full mt-3 p-3 rounded-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    placeholder="New Password"
                                />
                                <input
                                    {...register("cnfrm-new-password", { required: { value: true, message: 'This field is required!' } })}
                                    className="w-full mt-3 p-3 rounded-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    placeholder="Confirm New Password"
                                />
                            </div>
                            <div className="btn flex items-center justify-end md:col-span-3">
                                <button className='w-32 h-12 rounded-sm' type='submit'>Cancel</button>
                                <button className='text-white bg-red-500 w-40 h-12 rounded-sm' type='submit'>Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account
