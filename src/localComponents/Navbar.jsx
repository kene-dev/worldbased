import React from 'react'
import menuIcon from "../assets/menu.svg";
import sampleLogo from "../assets/wb.PNG"
import favourite from "../assets/favourite.svg";
import cartImage from "../assets/cart.svg";
import usr from "../assets/user.svg";
import { Link } from 'react-router-dom';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cart = useSelector(state => state.persistedReducer.cart);

  return (
    <div className='w-full h-[110px] noisyBg flex items-center justify-between lg:px-10 px-5 bg-white'>
        {/* LEFT SIDE */}
        <div className='hidden w-max lg:flex items-center gap-8'>
            <img src={menuIcon} className='w-7 h-7 cursor-pointer'/>
            <ul className='lg:w-max hidden lg:flex items-center gap-5'>
                <li className='text-[16px]'> <Link to='/'>Home</Link></li>
                <li><Link to='/products'>Collections</Link></li>
                <li><Link to=''>Contact Us</Link></li>
            </ul>
        </div>

        <Sheet >
            <SheetTrigger className="lg:hidden"><img src={menuIcon} className='w-7 h-7 cursor-pointer'/></SheetTrigger>
                <SheetContent className='noisyBg' side='left'>
                    <ul className='w-full flex flex-col items-start gap-5 mt-10'>
                        <li className='text-[16px]'> <Link to='/'>Home</Link></li>
                        <li><Link to='/products'>Collections</Link></li>
                        <li><Link to=''>Contact Us</Link></li>
                    </ul>
                </SheetContent>
        </Sheet>

        {/* MIDDLE SIDE (LOGO) */}
        <div className='lg:w-28 lg:h-28 w-14 h-14 bg-black/10 rounded-full'>
            <img src={sampleLogo} className='w-full h-full' />
        </div>

        {/* RIGHT SIDE OF NAVBAR */}
        <div className='w-max flex items-center lg:gap-[46px] gap-2'>
            {/* FAVOURITES ICON */}
            <div className='w-10 h-10 rounded-full bg-black hidden lg:flex items-center justify-center'><img src={favourite} className='' /></div>

            {/* CART ICON */}
            <div className=''>
                <Link className='flex items-center' to='/cart'>
                    <h1 className='lg:w-max lg:flex hidden px-4 p-3 text-white text-xs bg-black rounded-2xl'>Cart</h1>
                    <div className='bg-black p-[0.3rem] rounded-full w-max h-max -ml-1'>
                        {cart?.cartItems?.length ? (
                        <p className='bg-white rounded-full w-8 h-8 flex items-center justify-center'>{cart.cartItems.length}</p>
                        ):(
                        <img src={cartImage} className='p-2 bg-white rounded-full w-8 h-8 object-contain'/>
                        )
                    }
                    </div>
                </Link>
            </div>

             {/* USER ICON    */}
            <div className='w-10 h-10 rounded-full bg-black flex items-center justify-center'><img src={usr} className='' /></div>
        </div>
    </div>
  )
}

export default Navbar