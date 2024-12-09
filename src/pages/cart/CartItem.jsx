import React from 'react'
import cartImg from '../../assets/cartImg.png';
import fav from "../../assets/favourite.svg";
import close from '../../assets/cancel.svg';
import { Button } from '@/components/ui/button';
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import { decrementItem, incrementItem, removeItem } from '@/app/cartSlice';
import { useDispatch } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';

const CartItem = ({item}) => {
    const dispatch = useDispatch()
  return (
        <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0, }}
        transition={{ duration: 0.3, ease: "linear" }}
        layout
      
        className='lg:w-[315px] w-full h-[366px] flex items-start justify-between gap-2'
        >
            <div className='lg:w-[265px] w-5/6 h-[314px] bg-black/30 relative'>
                <img src={item.img} className='w-full h-full object-cover'/>
                <div className='w-[34px] h-[34px] p-2 flex items-center justify-center absolute bottom-0 right-0 bg-white'>
                    <AiOutlineHeart className='-rotate-45 text-black/60' />
                </div>
                <div className='pt-2 flex items-start justify-between'>
                    <h1 className='text-black/80 text-base w-2/3'>{item.title}</h1>
                    <h1 className='text-black/80 text-base'>N {item.price}</h1>
                </div>
            </div>

        

            <div className='flex flex-1 flex-col items-center gap-10'>
                <div className='w-max p-2'> <FaRegTrashAlt onClick={() => dispatch(removeItem(item.id))} className='text-red-400 cursor-pointer' /></div>
                <div className='text-center flex flex-col gap-5'>
                    <p>{item.size}</p>
                    <div className='flex flex-col items-center border-[1px] border-black/40'>
                        <Button onClick={() => dispatch(incrementItem(item.id))} className='bg-transparent appearance-none shadow-none border-[1px] border-black/40 text-black/50 text-lg rounded-none w-[25px] h-[25px] hover:text-white'>+</Button>

                        <div className='bg-transparent shadow-none border-[1px] border-black/40 rounded-none w-[34px] h-[25px] text-xs flex items-center justify-center'>{item.quantity}</div>

                        <Button onClick={() => dispatch(decrementItem(item.id))} className='bg-transparent shadow-none border-[1px] border-black/40 text-xl text-black/50 rounded-none w-[25px] h-[25px] hover:text-white'>-</Button>
                    </div>
                </div>
            </div>
        </motion.div>
  )
}

export default CartItem