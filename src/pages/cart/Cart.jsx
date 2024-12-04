import { Button } from '@/components/ui/button'
import Footer from '@/localComponents/Footer'
import Navbar from '@/localComponents/Navbar'
import React from 'react'
import close from '../../assets/cancel.svg';
import cartImg from '../../assets/cartImg.png';
import fav from "../../assets/favourite.svg";
import CartItem from './CartItem';

const Cart = () => {
  return (
    <section className='w-full h-full'>
        <Navbar />
            <div className='w-full min-h-[400px] noisyBg bg-white py-10'>
                <div className='xl:max-w-screen-xl flex flex-col lg:flex-row items-start gap-20 pt-20 mx-auto p-5'>

                    {/* CART AREA */}
                    <div className='flex-1'>
                        <h1>SHOPPING BAG</h1>
                        <hr className='bg-black/20 h-[0.15rem] mt-4 mb-4'/>

                        {/* SHOPPING CART DISPLAY AREA */}
                        <div className='w-full flex gap-10 flex-wrap'>
                            {[1,2,3,4,5].map((_, i) => (
                                <CartItem key={i} />
                            ))}
                        </div>
                        <hr className='bg-black/20 h-[0.15rem] mt-4'/>
                    </div>

                    {/* SUBTOTAL AREA  */}
                    <div className='lg:w-[468px] w-full h-max flex items-center justify-center'>
                        <div className='w-[310px] h-max border-[1px] border-black/20 p-8'>
                            <h1>ORDER SUMMARY</h1>
                            <div className='w-full flex items-center justify-between mt-7 text-sm font-regular'>
                                <p>Subtotal</p>
                                <p>N 5000</p>
                            </div>
                            <div className='w-full flex items-center justify-between text-sm font-regular'>
                                <p>Shipping</p>
                                <p>N 3000</p>
                            </div>
                            <hr className='bg-black/20 h-[0.15rem] my-6'/>
                            <div className='w-full flex items-center justify-between text-sm font-regular my-4'>
                                <p className='text-lg font-regular'>TOTAL <span className='font-light text-sm'>(TAX INCL)</span></p>
                                <p>N 8000</p>
                            </div>
                            <div className='w-full flex items-center gap-2 text-xs font-light my-10'>
                                <input type='checkbox' />
                                <p className='w-full'>I agree to the Terms and Conditions</p>
                            </div>

                            <Button className="w-full p-2 rounded-sm bg-[#d9d9d9] hover:bg-[#d9d9d9] text-black flex items-center mt-5">
                                Continue
                            </Button>
                        </div>
                    </div>


                </div>
            </div>
        <Footer />
    </section>
  )
}

export default Cart