import React from 'react'
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import logo from '../assets/wb.PNG';

const Footer = () => {
    const date = new Date();
  return (
    <div className='w-full h-[628px] noisyBg bg-white/70 flex flex-col justify-center gap-5 p-7'>
      <div className='w-full flex items-center justify-center gap-4'>
        <div className='w-full h-max lg:h-[400px] lg:flex items-center'>

            <div className='lg:w-[500px] w-full flex flex-col items-center justify-center lg:gap-10 gap-6 font-light'>
                <div className='lg:w-[150px] w-full flex flex-col lg:items-start items-center lg:gap-9 gap-6 text-left'>
                    <h1 className='font-extralight text-black/40'>Info</h1>
                    <div className='text-sm lg:grid flex items-center gap-4'>
                        <p>POLICY</p>
                        <p>ABOUT</p>
                        <p>CONTACTS</p>
                    </div>
                </div>

                <div className='lg:w-[150px] w-full flex flex-col lg:items-start items-center lg:gap-9 gap-6 text-left'>
                    <h1 className='font-extralight text-black/40'>Socials</h1>
                    <div className='flex items-center gap-2 text-xl'>
                     <RiInstagramFill />                      
                     <BsTwitterX />
                     <FaTiktok />
                    </div>
                </div>
            </div>


            <div className='flex-1 h-full flex flex-col lg:gap-0 gap-8 lg:items-left items-center lg:mt-0 mt-5'>
                <div className='lg:h-64 lg:w-64 h-28 w-28'>
                    <img src={logo} className='h-full w-full' />
                </div>
                <div className='lg:text-left text-center font-light lg:w-4/6 -mt-7 '>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ipsum asperiores similique, ducimus aliquam natus velit voluptates facilis tempore repudiandae beatae nesciunt voluptatibus nam sit corrupti sed ut tenetur corporis?</p>
                </div>
            </div>


        </div>
      </div>

      <h1 className='w-full text-center font-medium'> WorldBased &copy; {date.getFullYear()}. All rights reserved</h1>
    </div>
  )
}

export default Footer