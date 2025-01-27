"use client"
import React from 'react'
import {useRouter} from 'next/navigation'

const Cart = () => {

  const router = useRouter();

  return (
    <>
      <div className="body w-4/5 mx-auto">
        <div className="top flex justify-between items-center py-16">
          <div className="path">
            <p><span className='text-gray-400'>Home /</span> Cart</p>
          </div>
        </div>

        <div className="cart-products grid gap-y-7">
          <div className="head shadow-sm shadow-gray-300 font-semibold h-16 flex justify-between items-center">
            <p className="product pl-8 w-[25%]">Product</p>
            <p className="price pl-8 w-[25%]">Price</p>
            <p className="quantity pl-8 w-[25%]">Quantity</p>
            <p className="subtotal pl-8 w-[25%]">Subtotal</p>
          </div>

          <div className="product shadow-sm shadow-gray-300 h-16 flex items-center justify-between">
            <div className="image pl-8 w-[25%] flex items-center gap-2">
              <img src="/images/user.png" alt="product-img" />
              <p className="title">Product Title</p>
            </div>
            <p className="price pl-8 w-[25%]">$100</p>
            <p className="quantity pl-8 w-[25%]">1</p>
            <p className="subtotal pl-8 w-[25%]">$100</p>
          </div>

          <div className="product shadow-sm shadow-gray-300 h-16 flex items-center justify-between">
            <div className="image pl-8 w-[25%] flex items-center gap-2">
              <img src="/images/user.png" alt="product-img" />
              <p className="title">Product Title</p>
            </div>
            <p className="price pl-8 w-[25%]">$100</p>
            <p className="quantity pl-8 w-[25%]">1</p>
            <p className="subtotal pl-8 w-[25%]">$100</p>
          </div>

          <div className="btns flex items-center justify-between">
            <button className="border border-black rounded-sm w-48 py-3">Return To Shop</button>
            <button className="border border-black rounded-sm w-48 py-3">Update Cart</button>
          </div>

        </div>

        <div className="cont flex justify-between mt-10 mb-20">
          <div className="coupon">
            <input type="text" placeholder="Coupon Code" className="border border-gray-300 rounded-sm w-80 p-3" />
            <button className="bg-red-500 text-white rounded-sm w-48 py-3 ml-4">Apply Coupon</button>
          </div>
          <div className="total-price">
            <div className="card border border-black rounded-sm w-80">
              <div className="head flex justify-between items-center h-16">
                <p className="title pl-8 font-semibold">Cart Total</p>
              </div>
              <div className="body flex justify-between items-center h-14 w-4/5 mx-auto border-b border-gray-600">
                <p className="title">Subtotal:</p>
                <p className="price">Free</p>
              </div>
              <div className="body flex justify-between items-center h-14 w-4/5 mx-auto border-b border-gray-600">
                <p className="title">Shipping:</p>
                <p className="price">1200$</p>
              </div>
              <div className="foot flex justify-between items-center h-16 w-4/5 mx-auto">
                <p className="title">Total:</p>
                <p className="price">$200</p>
              </div>

              <div className="btn flex items-center justify-center mb-5">
                <button onClick={() => {router.push('/checkout')}} className="bg-red-500 text-sm text-white rounded-sm w-52 py-3">Proceed To Checkout</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Cart
