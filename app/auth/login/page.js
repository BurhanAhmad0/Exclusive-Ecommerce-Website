"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import SpinnerLoader from '@/components/SpinnerLoader'

const page = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [pageLoading, setPageLoading] = useState(false);
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = await signIn('credentials', {
      redirect: false,  // Prevent automatic redirection
      email,            // User's email
      password          // User's password
    })

    if (result.ok) {
      // Redirect to the dashboard or home after successful login
      router.push('/')
      setPageLoading(false)
    } else {
      setError('Invalid email or password')
      setPageLoading(false)
      toast.error('Invalid email or password', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
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
              <h2 className='font-semibold my-2 text-3xl'>Log in to Exclusive</h2>
              <h6 className='font-semibold my-2 text-sm'>Enter your details below</h6>
            </div>

            <div className="details">
              <form onSubmit={handleSubmit}>
                {/* Email/Phone Number Input */}
                <div className="email w-72 py-2 my-3 border-b border-gray-400">
                  <input className="w-full focus:outline-none placeholder:text-sm" placeholder="Email or Phone Number" type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                {/* Password Input */}
                <div className="password w-72 py-2 my-3 border-b border-gray-400">
                  <input className="w-full focus:outline-none placeholder:text-sm" placeholder="Password" name='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                {/* Login and Forgot Password Buttons */}
                <div className="buttons mt-7">
                  <button type='submit' className="bg-red-500 text-white text-sm px-8 py-3 rounded-sm">Login</button>
                  <button onClick={() => {
                    setPageLoading(true)
                  }} disabled={pageLoading} type="button" className="text-red-500 text-sm ml-20">Forgot Password?</button>
                </div>
              </form>

              {/* Google Login Button */}
              <div className="buttons mt-1">
                <button onClick={() => {
                  signIn('google'), {
                    callbackUrl: `/`
                  }
                }} className="w-full px-4 py-2 border border-gray-400 flex justify-center gap-2 rounded-sm text-black">
                  <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                  <span>Login with Google</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default page
