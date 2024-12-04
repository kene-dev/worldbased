import React from 'react'
import cartImg from '../../assets/cartImg.png';
import fav from "../../assets/favourite.svg";
import close from '../../assets/cancel.svg';
import { Button } from '@/components/ui/button';
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";

const CartItem = () => {
  return (
    <div className='lg:w-[315px] w-full h-[366px] flex items-start justify-between gap-2'>
        <div className='lg:w-[265px] w-5/6 h-[314px] bg-black/30 relative'>
            <img src={cartImg} className='w-full h-full object-cover'/>
            <div className='w-[34px] h-[34px] p-2 flex items-center justify-center absolute bottom-0 right-0 bg-white'>
                <AiOutlineHeart className='-rotate-45 text-black/60' />
            </div>
            <h1 className='text-black/50 text-sm'>Cotton T-shirt</h1>
            <h1 className='text-black/80 text-base'>Full Sleeve Zipper</h1>
        </div>

    

        <div className='flex flex-1 flex-col items-center gap-10'>
            <div className='w-max p-2'> <FaRegTrashAlt className='text-red-400 cursor-pointer' /></div>
            <div className='text-center flex flex-col gap-5'>
                <p>L</p>
                <div className='flex flex-col items-center border-[1px] border-black/40'>
                    <Button className='bg-transparent appearance-none shadow-none border-[1px] border-black/40 text-black/50 text-lg rounded-none w-[25px] h-[25px] hover:text-white'>+</Button>

                    <div className='bg-transparent shadow-none border-[1px] border-black/40 rounded-none w-[34px] h-[25px] text-xs flex items-center justify-center'>1</div>

                    <Button className='bg-transparent shadow-none border-[1px] border-black/40 text-xl text-black/50 rounded-none w-[25px] h-[25px] hover:text-white'>-</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem