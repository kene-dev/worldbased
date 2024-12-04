import Footer from '@/localComponents/Footer';
import Navbar from '@/localComponents/Navbar';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import cartImg from '../../assets/cartImg.png';
import { AiOutlineHeart } from "react-icons/ai";
import { Button } from '@/components/ui/button';


const SingleProduct = () => {
  const params = useParams();
  const sizes = ["M", "L", "XL", "2XL"]
  return (
    <div className='w-full h-full '>
        <Navbar />
        <div className='w-full h-full lg:h-[600px] noisyBg bg-white py-4 place-content-center lg:px-14 '>
            <div className='lg:h-[498px] w-full lg:max-w-screen-lg mx-auto my-auto lg:flex items-center justify-center gap-2'>
                <div className='w-full h-full flex lg:flex-row flex-col items-center justify-start gap-10'>
                    <div className='h-[438px] w-[370px]'>
                        <img src={cartImg} className='w-full h-full' />
                    </div>
                    <div className='flex lg:flex-col gap-3'>
                        <div className='w-[62px] h-[75px] bg-slate-400'></div>
                        <div className='w-[62px] h-[75px] bg-slate-400'></div>
                        <div className='w-[62px] h-[75px] bg-slate-400'></div>
                        <div className='w-[62px] h-[75px] bg-slate-400'></div>
                        <div className='w-[62px] h-[75px] bg-slate-400'></div>
                    </div>
                </div>

                {/* PRODUCT DESCRIPTION CARD */}
                <div className='w-full h-full flex items-start lg:justify-end justify-center lg:p-0 p-5'>
                    <div className='lg:w-[306px] w-full h-full flex flex-col justify-between gap-8 lg:gap-0 relative p-9 border-[0.5px] border-black/20'>

                        {/* TOP PART OF CARD */}
                        <div className='flex flex-col gap-10'>
                            <div className='w-full flex flex-col gap-2'>
                                <h1>ABSTRACT PRINT SHIRT</h1>
                                <p className=''>$99</p>
                                <p className='text-base text-black/55'>MRP incl. of all taxes</p>
                            </div>

                            <p className='w-full text-sm'>
                                Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.
                            </p>
                        </div>

                        {/* BOTTOM PART OF CARD */}
                        <div className='flex flex-col gap-5'>
                            <div className='flex items-center gap-3'>
                                {sizes.map((size,i) => (
                                    <div key={i} className='w-[38px] h-[39px] border-[1px] border-black/30 flex items-center justify-center cursor-pointer hover:bg-black hover:text-white duration-200 ease-linear'> 
                                    {size}
                                    </div>
                                ))}
                            </div>

                            <p className='text-xs text-black/55'>FIND YOUR SIZE |  MEASUREMENT GUIDE</p>

                            <Button className='!py-5 bg-[#d9d9d9] hover:bg-[#d9d9d9] text-black'>ADD</Button>
                        </div>


                        {/* FAVORITE ICON */}
                        <div className='w-[34px] h-[34px] p-2 flex items-center justify-center absolute top-0 right-0 bg-white'>
                            <AiOutlineHeart className='-rotate-45 text-black/60' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default SingleProduct