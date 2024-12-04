import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import cartImg from '../../assets/cartImg.png';
import { Link } from 'react-router-dom';

const ProductItem = ({image, title, subText, id}) => {
  return (
      <div className='lg:w-[265px] w-[155px] lg:h-[314px] h-[214px] relative mb-8'>
        <Link to={`/product/${id}`}>
          <img src={image} className='w-full h-full object-cover'/>
        </Link>
          <div className='w-[34px] h-[34px] p-2 flex items-center justify-center absolute bottom-0 right-0 bg-white'>
              <AiOutlineHeart className='-rotate-45 text-black/60' />
          </div>
          <h1 className='text-black/50 text-sm'>{title}</h1>
          <h1 className='text-black/80 text-base'>{subText}</h1>
      </div>
  )
}

export default ProductItem