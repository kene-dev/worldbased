import { Button } from '@/components/ui/button'
import Footer from '@/localComponents/Footer'
import Navbar from '@/localComponents/Navbar'
import React, { useState } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import backArr from '../../assets/backk.svg';

const Cart = () => {
    const [openShipping, setOpenShipping] = useState(false)
    const cart = useSelector(state => state.persistedReducer.cart);
    const subtotal = cart ? cart.cartItems.reduce((total, item) => total + item.price * item.quantity, 0) : 0;
    const shipping = 5000
    const total = subtotal + shipping


const validateInput = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); 
}

  return (
    <>
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
                        <AnimatePresence>
                            {cart.cartItems.map((item) => (
                                <CartItem item={item}  key={item.id} />
                            ))}
                        </AnimatePresence>
                        </div>
                        <hr className='bg-black/20 h-[0.15rem] mt-4'/>
                    </div>

                    {/* SUBTOTAL AREA  */}
                    <div className='lg:w-[468px] w-full h-max flex items-center justify-center'>
                        <div className='w-[310px] h-max border-[1px] border-black/20 p-8'>
                            <h1>ORDER SUMMARY</h1>
                            <div className='w-full flex items-center justify-between mt-7 text-sm font-regular'>
                                <p>Subtotal</p>
                                <p>N {subtotal}</p>
                            </div>
                            <div className='w-full flex items-center justify-between text-sm font-regular'>
                                <p>Shipping</p>
                                <p>N {shipping}</p>
                            </div>
                            <hr className='bg-black/20 h-[0.15rem] my-6'/>
                            <div className='w-full flex items-center justify-between text-sm font-regular my-4'>
                                <p className='text-lg font-regular'>TOTAL <span className='font-light text-sm'>(TAX INCL)</span></p>
                                <p>N {total}</p>
                            </div>
                            <div className='w-full flex items-center gap-2 text-xs font-light my-10'>
                                <input type='checkbox' />
                                <p className='w-full'>I agree to the Terms and Conditions</p>
                            </div>

                            <Button onClick={() => setOpenShipping(true)} className="w-full p-2 rounded-sm bg-[#d9d9d9] hover:bg-[#d9d9d9] text-black flex items-center mt-5">
                                Continue
                            </Button>
                        </div>
                    </div>


                </div>
            </div>
        <Footer />
    </section>

    <AlertDialog open={openShipping} onOpenChange={setOpenShipping}>
        <AlertDialogContent className='h-[80%] overflow-y-scroll noisyBg bg-white'>
        <AlertDialogHeader>
            <div className='flex items-center justify-between'>
                <AlertDialogCancel className='border-none shadow-none bg-transparent hover:bg-white/70'> <img src={backArr} className='cursor-pointer' /></AlertDialogCancel>
                <AlertDialogTitle> CHECKOUT </AlertDialogTitle>
            </div>
            <AlertDialogDescription>
                <h1 className='font-bold my-3 text-xs mt-7'>CONTACT INFO</h1>
                <div className='w-full flex flex-col gap-3'>
                    <Input placeholder='Email' type='email' className='p-2 text-sm placeholder-[#5E5E5E] h-[44px]' />
                    <Input placeholder='Phone' className='p-2 text-sm placeholder-[#5E5E5E] h-[44px]' />
                </div>

                <h1 className='font-bold my-3 text-xs mt-7'>SHIPPING ADDRESS</h1>
                <div className='w-full flex flex-col gap-4'>
                    <div className='w-full flex items-center gap-3'>
                        <Input placeholder='First Name' type='First Name' className='p-2 text-sm placeholder-[#5E5E5E] h-[44px]' />
                        <Input placeholder='Last Name' className='p-2 text-sm placeholder-[#5E5E5E] h-[44px]' />
                    </div>
                    <Input placeholder='Address' type='text' className='p-2 text-sm placeholder-[#5E5E5E] h-[44px]' />
                    <Input placeholder='City' type='text' className='p-2 text-sm placeholder-[#5E5E5E] h-[44px]' />
                    <Input placeholder='State' type='text' className='p-2 text-sm placeholder-[#5E5E5E] h-[44px]' />
                </div>
            </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
           
            <AlertDialogAction className='lg:w-[231px] h-[44px] flex items-center gap-10 bg-[#D9D9D9] rounded-none text-black hover:bg-[#D9D9D9]'>
                Shipping
                <img src={backArr} className='cursor-pointer rotate-180'/>
            </AlertDialogAction>
        </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
    </>
  )
}

export default Cart