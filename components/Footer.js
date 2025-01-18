import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-black text-white h-[450px] flex items-center justify-center p-10'>
            <div className="inner-div grid grid-cols-5 gap-3">
                <div className="subscribe">
                    <h3 className='my-4 font-bold text-xl'>Exclusive</h3>
                    <h6 className='my-4 font-medium'>Subscribe</h6>
                    <p className='my-3 text-sm'>Get 10% off on your first order</p>
                    <div className="email w-fit relative">
                        <input className='border border-white rounded-md bg-black w-52 h-11 px-4' type="email" name="email" id="email" placeholder='Enter your email' />
                        <img className='w-5 absolute top-3 right-3' src="/icon-send.png" alt="send" />
                    </div>
                </div>

                <ul className="footer-links px-5">
                    <li className='text-xl font-bold my-3'>Support</li>
                    <li className=' my-3'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                    <li className=' my-3'>exclusive@gmail.com</li>
                    <li className=' my-3'>+88015-88888-9999</li>
                </ul>

                <ul className="footer-links px-5">
                    <li className='text-xl font-bold my-3'>Account</li>
                    <li className=' my-3'>Login Account</li>
                    <li className=' my-3'>Login / Register</li>
                    <li className=' my-3'>Cart</li>
                    <li className=' my-3'>Wishlist</li>
                    <li className=' my-3'>Shop</li>
                </ul>

                <ul className="footer-links px-5">
                    <li className='text-xl font-bold my-3'>Quick Link</li>
                    <li className=' my-3'>Privacy Policy</li>
                    <li className=' my-3'>Terms Of Use</li>
                    <li className=' my-3'>FAQ</li>
                    <li className=' my-3'>Contact</li>
                </ul>

                <div className="subscribe">
                    <h3 className='my-4 font-bold text-xl'>Download App</h3>
                    <p className='my-3 text-sm'>Save $3 with App New User Only</p>
                    <div className="qr-code flex items-center gap-2">
                        <img src="/Qr Code.jpg" alt="qr code" />
                        <div className="download-buttons">
                            <img className='my-1' src="/google-play-store.png" alt="google play store" />
                            <img className='my-1' src="/appstore.png" alt="appstore" />
                        </div>
                    </div>
                    <div className="social-icons my-5 flex items-center gap-8">
                        <img src="/facebook.png" alt="facebook" />
                        <img src="/twitter.png" alt="twitter" />
                        <img src="/instagram.png" alt="instagram" />
                        <img src="/linkedin.png" alt="linkdin" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
