import Navbar from '@/localComponents/Navbar'
import React, { useEffect, useRef, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import prod1 from '../assets/heroImg1.png'
import prod2 from '../assets/heroImg2.png';
import prod3 from '../assets/image1.png';
import prod4 from '../assets/image2.png';
import prod5 from '../assets/image4.png';
import arrow from '../assets/arr.svg';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import Footer from '@/localComponents/Footer';
import { Link } from 'react-router-dom';


const Home = () => {
const date = new Date()
const containerRef = useRef();

const { scrollYProgress } = useScroll({
target: containerRef,
offset:['start start', 'end end']
})

const scale1 = useTransform(scrollYProgress, [0, 1],[1, 0.8])
const rotate1 = useTransform(scrollYProgress, [0, 1],[0, -5])
const scale2 = useTransform(scrollYProgress, [0, 1],[0.7, 1])
const rotate2 = useTransform(scrollYProgress, [0, 1],[-4, 0])

const [width, setWidth] = useState(window.innerWidth);

useEffect(() => {
  // Event listener to track window resizing
  const handleResize = () => {
    setWidth(window.innerWidth); // Update the width state on resize
  };

  // Add event listener on component mount
  window.addEventListener('resize', handleResize);

  // Clean up the event listener on component unmount
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

// You can now apply different styles based on the width
const isMobile = width <= 768; // Example: mobile if width <= 768px

  return (
    <>
    <div ref={containerRef} className='w-full h-[200vh] relative'>
        <motion.div style={{ scale: scale1 , rotate: rotate1 }} className='w-screen h-screen sticky noisyBg bg-white top-0 '>
            <Navbar />
            {/* TOP AREA OF HERO SECTION */}
            <div className=' w-full h-max  lg:my-10 lg:px-10 px-5 flex flex-col gap-4 xl:gap-16'>
                <div className='flex flex-col gap-1 lg:gap-3'>
                    <p>Men</p>
                    <p>Women</p>
                    <p>Accessories</p>
                </div>
                <div className='lg:w-[367px] w-full h-[50px] relative'>
                    <input 
                    className='!appearance-none w-full h-full rounded-sm text-right text-sm p-2 px-6 bg-[#d9d9d9]'
                    placeholder='Search'
                    pla
                     />
                    <FiSearch className='absolute top-4 left-4' />
                </div>
            </div>

            {/* BOTTOM AREA OF HERO SECTION */}
            <div className='w-full lg:h-[376px] h-fit flex flex-col lg:flex-row items-start lg:gap-8 gap-4 lg:px-10 p-5'>

                <div className='lg:w-[397px] h-full flex flex-col justify-between leading-snug'>
                    <div className='flex flex-col'>
                        <div>
                            <h1 className='w-full lg:text-[48px] text-2xl font-extrabold'>TRENDY</h1>
                            <h1 className='w-full lg:text-[48px] text-2xl font-extrabold lg:mt-4'>COLLECTION</h1>
                        </div>

                        <div className='font-light'>
                            <p>Summer</p>
                            <p>{date.getFullYear()}</p>
                        </div>
                    </div>

                    <Link to='/products'>
                        <Button className=" hidden w-max p-2 px-9 rounded-sm bg-[#d9d9d9] hover:bg-[#d9d9d9] text-black lg:flex items-center gap-3">
                            Go To Shop
                            <img src={arrow} className='' />
                        </Button>
                    </Link>
                </div>

                <div className='flex flex-1 lg:flex-row flex-col items-start justify-center xl:justify-start gap-[41px] xl:gap-3 h-full w-full'>
                    <div className='w-full xl:w-max lg:h-[376px] h-[200px] xl:h-full '>
                        <img src={prod1} className='object-cover h-full w-full' />
                    </div>

                    <div className=' hidden lg:flex w-full xl:w-max lg:h-[376px] xl:h-full'>
                        <img src={prod2} className='object-cover h-full' />
                    </div>
                    
                </div>
                
                <Link to='/products'>
                    <Button className=" flex w-max p-2 px-9 rounded-sm bg-[#d9d9d9] hover:bg-[#d9d9d9] text-black lg:hidden items-center gap-3">
                            Go To Shop
                            <img src={arrow} className='' />
                    </Button>
                </Link>
            </div>
        </motion.div>


        {/* SECOND HALF OF HOME PAGE */}
        <motion.div style={{scale: scale2, rotate: rotate2}} className='w-full min-h-screen noisyBg relative bg-white px-5'>
            <div className='h-full max-w-screen-2xl mx-auto flex flex-col gap-20'>
                <div className='flex flex-col gap-6'>
                    <h1 className='text-[48px] font-bold text-center pt-8'>Our Approach to fashion design </h1>
                    <p className='text-center text-sm lg:w-2/6 place-self-center w-full'>at elegant vogue , we blend creativity with craftsmanship to create fashion that transcends trends and stands the test of time each design is meticulously crafted, ensuring the highest quelity exqulsite finish</p>
                </div>

                <div className='w-full h-max flex flex-col lg:flex-row items-center  justify-between gap-10'>
                    <div className='lg:w-[317px] w-full h-[389px]'>
                        <img className='w-full h-full' src={prod3} />
                    </div>
                    <div className='lg:w-[317px] w-full h-[389px] lg:mt-20'>
                        <img className='w-full h-full' src={prod4} />
                    </div>
                    <div className='lg:w-[317px] w-full h-[389px]'>
                        <img className='w-full h-full' src={prod1} />
                    </div>
                    <div className='lg:w-[317px] w-full h-[389px] lg:mt-20'>
                        <img className='w-full h-full' src={prod5} />
                    </div>
                </div>
            </div>

            <div className='w-full py-20 flex items-center justify-center'>
            <Button className="w-[200px] p-2 px-9 rounded-sm bg-[#d9d9d9] hover:bg-[#d9d9d9] text-black flex items-center gap-3">
                        See all
                        <img src={arrow} className='' />
            </Button>
            </div>
        </motion.div>
        
        <Footer />
    </div>
    </>
  )
}

export default Home