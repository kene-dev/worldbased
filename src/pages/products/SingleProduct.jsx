import Footer from '@/localComponents/Footer';
import Navbar from '@/localComponents/Navbar';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import cartImg from '../../assets/cartImg.png';
import { AiOutlineHeart } from "react-icons/ai";
import { Button } from '@/components/ui/button';
import {useGetSingleProductQuery } from '@/services/contentfulApi';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '@/app/cartSlice';
import { toast } from 'react-toastify';


const SingleProduct = () => {
  const [imageIndex, setImageIndex] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const params = useParams()
  const {data} = useGetSingleProductQuery(params.id)
  const dispatch = useDispatch()

  const handleAddToCart = (item) => {
    if(!selectedSize){
        toast.error('Please select a size first')
        return 
    }
    const newItem = {
        id:item.productId,
        title: item.productTitle,
        price: item.productPrice,
        img:item.productImages[0],
        size: selectedSize
    }
    console.log(newItem)
    dispatch(addItemToCart(newItem))
  }


//   console.log(data)
  return (
    <div className='w-full h-full '>
        <Navbar />
        <div className='w-full h-full lg:h-[600px] noisyBg bg-white py-4 place-content-center lg:px-14 '>
            <div className='lg:h-[498px] w-full lg:max-w-screen-lg mx-auto my-auto lg:flex items-center justify-center gap-2'>

                <div className='w-full h-full flex lg:flex-row flex-col items-center justify-start gap-10'>
                    <div className='h-[438px] w-[370px]'>
                        <img src={data?.productImages[imageIndex]} className='w-full h-full object-cover' />
                    </div>
                    <div className='flex lg:flex-col lg:items-start lg:pt-8  gap-3 h-full'>
                        {data?.productImages?.map((img, index) => (
                            <div onClick={() => setImageIndex(index)} key={index} className='w-[62px] h-[75px]'>
                                <img src={img} className='w-full h-full object-cover' />
                            </div>
                        ))}
                    </div>
                </div>

                {/* PRODUCT DESCRIPTION CARD */}
                <div className='w-full h-full flex items-start lg:justify-end justify-center lg:p-0 p-5'>
                    <div className='lg:w-[306px] w-full h-full flex flex-col justify-between gap-8 lg:gap-0 relative p-9 border-[0.5px] border-black/20'>

                        {/* TOP PART OF CARD */}
                        <div className='flex flex-col gap-10'>
                            <div className='w-full flex flex-col gap-2'>
                                <h1>{data?.productTitle}</h1>
                                <p className=''>N {data?.productPrice}</p>
                            </div>

                            <p className='w-full text-sm'>
                                {data?.productDesc}
                            </p>

                            <div className='w-full flex flex-wrap gap-2 '>
                                {data?.productTags?.map((tag, index) => (
                                    <span className='bg-black text-white py-1 px-2 font-light text-xs rounded-md'>{tag}</span>
                                ))}
                            </div>
                        </div>

                        {/* BOTTOM PART OF CARD */}
                        <div className='flex flex-col gap-5'>
                            <div className='flex items-center gap-3'>
                                {data?.productSizes?.map((size,i) => (
                                    <div onClick={() => setSelectedSize(size)} key={i} className={`w-[38px] h-[39px] border-[1px] border-black/30 flex items-center justify-center cursor-pointer ${selectedSize === size && 'bg-black text-white'} hover:bg-black hover:text-white duration-200 ease-linear`}> 
                                    {size}
                                    </div>
                                ))}
                            </div>

                            <p className='text-xs text-black/55'>FIND YOUR SIZE |  MEASUREMENT GUIDE</p>

                            <Button onClick={() => handleAddToCart(data)} className='!py-5 bg-[#d9d9d9] hover:bg-black hover:text-white text-black'>ADD</Button>
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