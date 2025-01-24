import React from 'react'

const Cart = () => {
  return (
    <>
      <div className="body w-4/5 mx-auto">
        <div className="top flex justify-between items-center py-16">
          <div className="path">
            <p><span className='text-gray-400'>Home /</span> Cart</p>
          </div>
        </div>

        <table className="cartItems border-2 border-red-300 w-full">
          <thead>
            <tr className='h-16 shadow-gray-300 shadow-sm'>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr className='h-16 shadow-gray-300 shadow-sm'>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
            <tr className='h-16 shadow-gray-300 shadow-sm'>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Cart
