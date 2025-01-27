import React from 'react'

const Checkout = () => {
    return (
        <div className="checkout w-4/5 mx-auto">
            <div className="top flex justify-between items-center py-16">
                <div className="path">
                    <p><span className='text-gray-400'>Account / My Account / Product / View Cart / </span> CheckOut </p>
                </div>
            </div>

            <div className="billing-address mb-24 flex justify-between">
                <div className="left w-[450px]">
                    <div className="head text-2xl font-semibold py-3">
                        <p>Billing Details</p>
                    </div>
                    <form>
                        <div className="form-group mt-5 flex flex-col">
                            <label className='text-gray-400' htmlFor="name">Name <span className='text-red-400'>*</span></label>
                            <input type="text" className="border bg-gray-400 bg-opacity-40 border-gray-300 rounded-sm w-full p-2" id="name" />
                        </div>
                        <div className="form-group mt-5 flex flex-col">
                            <label className='text-gray-400' htmlFor="email">Company Name</label>
                            <input type="text" className="border bg-gray-400 bg-opacity-40 border-gray-300 rounded-sm w-full p-2" id="cmpy-name" />
                        </div>
                        <div className="form-group mt-5 flex flex-col">
                            <label className='text-gray-400' htmlFor="phone">Street Address <span className='text-red-400'>*</span></label>
                            <input type="text" className="border bg-gray-400 bg-opacity-40 border-gray-300 rounded-sm w-full p-2" id="Address" />
                        </div>
                        <div className="form-group mt-5 flex flex-col">
                            <label className='text-gray-400' htmlFor="address">Apartment, floor, etc. (optional)</label>
                            <input type="text" className="border bg-gray-400 bg-opacity-40 border-gray-300 rounded-sm w-full p-2" id="apartment" />
                        </div>
                        <div className="form-group mt-5 flex flex-col">
                            <label className='text-gray-400' htmlFor="city">Town/City <span className='text-red-400'>*</span></label>
                            <input type="text" className="border bg-gray-400 bg-opacity-40 border-gray-300 rounded-sm w-full p-2" id="city" />
                        </div>
                        <div className="form-group mt-5 flex flex-col">
                            <label className='text-gray-400' htmlFor="country">Phone Number <span className='text-red-400'>*</span></label>
                            <input type="text" className="border bg-gray-400 bg-opacity-40 border-gray-300 rounded-sm w-full p-2" id="country" />
                        </div>
                        <div className="form-group mt-5 flex flex-col">
                            <label className='text-gray-400' htmlFor="zip">Email Address <span className='text-red-400'>*</span></label>
                            <input type="text" className="border bg-gray-400 bg-opacity-40 border-gray-300 rounded-sm w-full p-2" id="zip" />
                        </div>
                        <div className="check flex items-center gap-3 mt-3">
                            <input className='w-4 h-4' type="checkbox" id="check" />
                            <label className='text-black' htmlFor="check">Save this information for faster check-out next time</label>
                        </div>
                    </form>
                </div>

                <div className="right w-[450px]">

                    <div className="products">
                        <div className="product flex items-center justify-between h-16">
                            <div className="left flex items-center gap-2">
                                <img src="/images/user.png" alt="product" />
                                <p>Title</p>
                            </div>
                            <div className="price">
                                <p>1200$</p>
                            </div>
                        </div>

                        <div className="product flex items-center justify-between h-16">
                            <div className="left flex items-center gap-2">
                                <img src="/images/user.png" alt="product" />
                                <p>Title</p>
                            </div>
                            <div className="price">
                                <p>1200$</p>
                            </div>
                        </div>
                    </div>

                    <div className="card rounded-sm w-full">
                        <div className="body flex justify-between items-center h-14 border-b border-gray-600">
                            <p className="title">Subtotal:</p>
                            <p className="price">Free</p>
                        </div>
                        <div className="body flex justify-between items-center h-14 border-b border-gray-600">
                            <p className="title">Shipping:</p>
                            <p className="price">1200$</p>
                        </div>
                        <div className="foot flex justify-between items-center h-16">
                            <p className="title">Total:</p>
                            <p className="price">$200</p>
                        </div>
                    </div>

                    <div className="payment-methods">
                        <div className="bank flex items-center justify-between mt-2">
                            <div className="check-box">
                                <input className="mr-3" type="radio" name="payment" id="bank" />
                                <label htmlFor="bank">Bank</label>
                            </div>
                            <div className="methods">
                                <img className="w-40" src="/images/payment-methods.png" alt="payment-methods" />
                            </div>
                        </div>
                        <div className="cod mt-2">
                            <input className="mr-3" type="radio" name="payment" id="cod" />
                            <label htmlFor="cod">Cash on delivery</label>
                        </div>
                    </div>


                    <div className="coupon flex items-center justify-between mt-5">
                        <input type="text" placeholder="Coupon Code" className="border border-gray-300 rounded-sm w-80 p-3" />
                        <button className="bg-red-500 text-white rounded-sm w-48 py-3 ml-4">Apply Coupon</button>
                    </div>

                    <div className="btn">
                        <button className="bg-red-500 text-white rounded-sm w-48 py-3 mt-8">Place Order</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Checkout
