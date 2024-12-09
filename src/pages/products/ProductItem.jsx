import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import cartImg from '../../assets/cartImg.png';
import { Link } from 'react-router-dom';

const ProductItem = ({image, title, price, id, tags}) => {
  return (
      <div className='lg:w-[265px] w-[155px] lg:h-[314px] h-[214px] relative mb-8'>
        <Link to={`/product/${title}`}>
          <img src={image[0]} className='w-full h-full object-cover'/>
        </Link>
          <div className='w-[34px] h-[34px] p-2 flex items-center justify-center absolute bottom-0 right-0 bg-white'>
              <AiOutlineHeart className='-rotate-45 text-black/60' />
          </div>
          <div className='pt-2 flex items-start justify-between'>
            <h1 className='text-black/80 text-sm w-2/3'>{title}</h1>
            <h1 className='text-black/80 text-base'>N {price}</h1>
          </div>

          <div className='py-2 flex items-center gap-3'>
           {tags?.map((tag, index) => (
            <span key={index} className='w-max p-1 text-xs bg-transparent border-[1px] border-black/30 rounded-md text-black/50'>{tag}</span>
           ))}
          </div>
      </div>
  )
}

export default ProductItem