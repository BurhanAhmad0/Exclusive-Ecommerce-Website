"use client"
import { React, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify'
import SpinnerLoader from '@/components/SpinnerLoader'

const page = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { isLoading, errors },
  } = useForm()

  const [pageLoading, setPageLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      let a = await fetch("/api/auth/signup", {
        method: "POST", headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      let res = await a.json()
      // console.log(res)

      if (res) {
        toast.success("Account Created Successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
        setPageLoading(false)
      }
    } catch (error) {
      setPageLoading(false)
      console.log(error)
    }
  }

  return (
    <div>
      <ToastContainer />
      {pageLoading ? (
        <SpinnerLoader />
      ) : (
        <div className="signup py-14 flex items-center">
          <div className="left w-1/2">
            <Image width={800} height={800} src={'/images/Side Image.svg'} alt="Img"></Image>
          </div>
          <div className="right w-1/2 flex flex-col items-center">
            <div className="headings w-72 text-start">
              <h2 className='font-semibold my-2 text-3xl'>Create an account</h2>
              <h6 className='font-semibold my-2 text-sm'>Enter your details below</h6>
            </div>

            <div className="details">
              <form onSubmit={handleSubmit(onSubmit)}>
                {errors.first_name && <span className='text-red-500'>{errors.first_name.message}</span>}
                <div className="name w-72 py-2 my-3 border-b border-gray-400">
                  <input className='w-full focus:outline-none placeholder:text-sm' placeholder='First Name' {...register("first_name", { required: { value: true, message: 'This field is required!' } })} />
                </div>
                {errors.last_name && <span className='text-red-500'>{errors.last_name.message}</span>}
                <div className="name w-72 py-2 my-3 border-b border-gray-400">
                  <input className='w-full focus:outline-none placeholder:text-sm' placeholder='Last Name' {...register("last_name", { required: { value: true, message: 'This field is required!' } })} />
                </div>
                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                <div className="email w-72 py-2 my-3 border-b border-gray-400">
                  <input className='w-full focus:outline-none placeholder:text-sm' placeholder='Email or Phone Number' {...register("email", { required: { value: true, message: 'This field is required!' } })} />
                </div>
                {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                <div className="password w-72 py-2 my-3 border-b border-gray-400">
                  <input className='w-full focus:outline-none placeholder:text-sm' placeholder='Password' {...register("password", { required: { value: true, message: 'This field is required!' } })} />
                </div>
                {(isLoading) && <p className='text-red-500'>Creating account...</p>}

                <div className="buttons flex flex-col mt-7">
                  <button onClick={() => setPageLoading(true)} disabled={isLoading} type='submit' className='my-1 bg-red-500 text-white text-sm px-8 py-3 rounded-sm'>Create Account</button>
                </div>
              </form>
              <button onClick={() => {
                signIn('google', {
                  callbackUrl: `/`
                })
              }} disabled={isLoading} className="w-full px-4 py-2 border border-gray-400 flex justify-center gap-2 rounded-sm text-black">
                <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                <span>Login with Google</span>
              </button>
              <p className='text-sm text-center mt-4'>Already have account? <Link className='py-1 font-semibold border-b border-black' href='/auth/login'>Log in</Link></p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default page
