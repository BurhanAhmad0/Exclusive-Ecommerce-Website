"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useSession } from "next-auth/react";
import { usePathname } from 'next/navigation';

const Contact = () => {

    const { data: session } = useSession()
    const path = usePathname();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        try {
            let a = await fetch("/api/enquiry", {
                method: "POST", headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            let res = await a.json()
            // console.log(res)

            if (res.success) {
                toast.success("Message Sent Successfully!", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });
            }
            else {
                toast.error("Failed to send message!", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='mb-32'>
            <ToastContainer />
            <div className="top flex justify-between items-center px-24 py-16">
                <div className="path">
                    <span>{`Home / ${path.replace('/', "").charAt(0).toUpperCase() + path.slice(2)}`}</span>
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

            <div className="main mb-10 flex items-center gap-5 px-24">
                <div className="left w-[372px] shadow-gray-300 shadow-sm">
                    <div className="one p-8">
                        <div className="head flex items-center gap-3">
                            <img className='w-10' src="/images/phone.png" alt="Phone" />
                            <p className='font-semibold my-3'>Call To Us</p>
                        </div>
                        <div className="text">
                            <p className='font-semibold my-3'>We are available 24/7, 7 days a week.</p>
                            <p className='font-semibold my-3'>Phone: +8801611112222</p>
                        </div>
                    </div>

                    <hr className='w-4/5 mx-auto h-0.5 bg-black' />

                    <div className="two p-8">
                        <div className="head flex items-center gap-3">
                            <img className='w-10' src="/images/mail.png" alt="Mail" />
                            <p className='font-semibold my-3'>Write To Us</p>
                        </div>
                        <div className="text">
                            <p className='font-semibold my-3'>Fill out our form and we will contact you within 24 hours.</p>
                            <p className='font-semibold my-3'>Emails: customer@exclusive.com</p>
                            <p className='font-semibold my-3'>Emails: support@exclusive.com</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="shadow-gray-300 w-[868px] h-[478px] shadow-sm grid grid-cols-1 gap-6 md:grid-cols-3 p-5">
                    <div>
                        <input
                            {...register("name", { required: { value: true, message: 'This field is required!' } })}
                            className="w-full p-3 rounded-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <input
                            {...register("email", { required: { value: true, message: 'This field is required!' } })}
                            className="w-full p-3 rounded-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            placeholder="Your Email"
                        />
                    </div>
                    <div>
                        <input
                            {...register("phone", { required: { value: true, message: 'This field is required!' } })}
                            className="w-full p-3 rounded-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            placeholder="Your Phone"
                        />
                    </div>
                    <div className="md:col-span-3">
                        <textarea
                            {...register("message", { required: { value: true, message: 'This field is required!' } })}
                            rows="6"
                            className="w-full h-full resize-none p-3 rounded-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <div className="btn flex items-center justify-end md:col-span-3">
                        <button className='text-white bg-red-500 w-40 h-12 rounded-sm' type='submit'>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
