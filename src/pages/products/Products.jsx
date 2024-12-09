import Footer from '@/localComponents/Footer'
import Navbar from '@/localComponents/Navbar'
import React, { useEffect, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import ProductItem from '../products/ProductItem';
// import {productData} from "./data";
import { IoIosArrowForward } from "react-icons/io";
import {AnimatePresence, motion} from "framer-motion";
import { Slider } from '@/components/ui/slider';
import { useGetProductsByCategoryQuery } from '@/services/contentfulApi';
import { Button } from '@/components/ui/button';
import useDebounce from '@/hooks/useDebounce';
import ReactPaginate from 'react-paginate';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const Products = () => {
  const [page, setPage] = useState(1);
  const limit = 10;  // Number of products per page
  const [open, setOpen] = useState(false)
  const [cat, setCat] = useState(null)
  const [sizeFilter, setSizeFilter] = useState(null)
  const [tagFilter, setTagFilter] = useState(null)
  const [search, setSearch] = useState(null)
  const debouncedSearch = useDebounce(search)
  const [priceRange, setPriceRange] = useState([5000, 100000]);
  const debouncedPrice = useDebounce(priceRange[0])
  const { data: productData, refetch, error, isLoading } = useGetProductsByCategoryQuery({category:cat,sizeFilter, searchTerm: debouncedSearch, price:debouncedPrice, tagFilter, limit, page});
  
  const handleChange = (values) => {
    setPriceRange(values);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      refetch();
    }
  };

    // Handle page change (when a user clicks a page number)
    const handlePageChange = ({ selected }) => {
      setPage(selected + 1); // React Paginate uses zero-based index, so add 1
    };

  const cardAnimate = {
    offScreen: { y: 100, opacity: 0 },
    onScreen: (i) => ({
      y: 0,
      opacity: 1,
      transition: {duration: 1.5, type: "spring", delay: i * 0.3 },
    }),
  };

  const sizes = ["M", "L", "XL", "2XL"]
  const categories = ["Men", "Women", "Two piece", "Accessories", ]
  const tags = ["shirts", "shorts", "unisex", "hats", "hoodies", 'bum-shorts']

  console.log(productData)

  return (
    <div className='w-full min-h-screen '>
        <Navbar />
        <div className="w-full min-h-screen xxl:max-w-screen-xl lg:pt-24 flex flex-row items-start gap-7 lg:px-14 px-5 pb-40 noisyBg bg-white">
            {/* FILTER SECTION */}
            <div className='lg:w-[25%] md:w-[40%] hidden lg:flex flex-col gap-4 rounded-sm h-max'>
              <h1 className='w-max'>Filters</h1>
              {/* SIZES */}
              <div className={`w-full`}>
              <div className='flex items-center justify-between'>
                <h1 className='my-2 uppercase'>Sizes</h1>
                <Button className='appearance-none underline p-2 bg-transparent shadow-none text-black hover:bg-transparent' onClick={() => setSizeFilter(null)}>Reset</Button>
              </div>

                <div className='flex items-center gap-3'>
                  {sizes.map((size,i) => (
                    <div onClick={() => setSizeFilter(size)} key={i} className={`w-[38px] h-[39px] border-[1px] border-black/30 flex items-center justify-center cursor-pointer  hover:bg-black hover:text-white duration-200 ease-linear ${sizeFilter === size ? "bg-black text-white" : "bg-transparent text-black"}`}> 
                      {size}
                    </div>
                  ))}
                </div>
                <hr className='bg-black/20 h-[0.15rem] w-full my-3'/>
              </div>

              
              {/* CATEGORIES */}
              <div className='w-full flex flex-col gap-1'>
                <div className='flex items-center justify-between'>
                  <h1 className='my-2 uppercase'>Categories</h1>
                  <Button className='appearance-none underline p-2 bg-transparent shadow-none text-black hover:bg-transparent' onClick={() => setCat(null)}>Reset</Button>
                </div>

                <div className='flex flex-col items-start gap-3'>
                  {categories.map((category,i) => (
                    <div onClick={() => setCat(category.toLocaleLowerCase())} key={i} className={`w-full p-2 font-light text-sm cursor-pointer ${category.toLocaleLowerCase() === cat  ? "bg-black text-white": "text-black bg-transparent"} hover:bg-black hover:text-white rounded-sm`}> 
                      {category}
                    </div>
                  ))}
                </div>

              </div>
              <hr className='bg-black/20 h-[0.15rem] w-full my-3'/>

               {/* TAGS */}
               <div className='w-full flex flex-col gap-1'>
                <div className='flex items-center justify-between'>
                  <h1 className='my-2 uppercase'>Tags</h1>
                  <Button className='appearance-none underline p-2 bg-transparent shadow-none text-black hover:bg-transparent' onClick={() => setTagFilter(null)}>Reset</Button>
                </div>

                <div className='flex flex-wrap items-center gap-3'>
                  {tags.map((tag,i) => (
                    <div onClick={() => setTagFilter(tag.toLocaleLowerCase())} key={i} className={`w-max p-2 font-light text-xs cursor-pointer ${tag.toLocaleLowerCase() === tagFilter  ? "bg-black text-white": "text-black bg-transparent"} hover:bg-black hover:text-white rounded-sm`}> 
                      {tag}
                    </div>
                  ))}
                </div>

              </div>
              <hr className='bg-black/20 h-[0.15rem] w-full my-3'/>
              
              <div className='w-full flex flex-col gap-2'>
                <h1 className='uppercase'>Price Range</h1>
                <div className='w-full flex items-center justify-between'>
                  <span>{priceRange[0]}</span>
                  <span>{priceRange[1]}</span>
                </div>
                <Slider 
                  value={priceRange}
                  onValueChange={handleChange}
                  min={5000}
                  max={100000}
                  step={1000}  
                />
              </div>
            </div>

            {/* WEB PRODUCT DISPLAY SECTION */}
            <div className=' hidden lg:flex flex-col flex-1 h-full'>
              {/* SEARCH SECTION */}
                <div className='flex lg:flex-row flex-col items-center gap-4 lg:h-[60px] h-max'>
                    <div className="w-max h-max flex flex-col lg:justify-start lg:items-start items-center justify-center gap-1">
                      <p> Home / <span className="text-[#090969]]"> Products </span></p>
                      <h1 className="pt-sans-bold lg:text-3xl text-xl">Product</h1>
                    </div>

                    <div className='flex-1 h-[50px] relative'>
                      <input 
                      className='!appearance-none w-full h-full rounded-sm text-right text-sm p-2 px-6 bg-[#d9d9d9]'
                      placeholder='E.g: full sleeve zipper'
                      onChange={(e) => setSearch(e.target.value)}
                      onKeyDown={handleKeyDown}
                      />
                      <FiSearch className='absolute top-4 left-4' />
                    </div>
                </div>


    
                {/*WEB VIEW COMPONENT ITEMS */}
                <motion.div layout className='w-full h-max md:grid md:grid-cols-2 lg:grid-cols-3 gap-8  py-7 px-3'>
                  <AnimatePresence mode='sync'>
                  {productData && productData?.products?.map((item, index) => (
                    <motion.div
                    layout
                    variants={cardAnimate}
                    initial='offScreen'
                    whileInView="onScreen"
                    viewport={{once: true, amount:0.1}}
                    exit={{y:-200, opacity:0}}
                    transition={{duration:.3, ease:"linear"}}
                    key={item.productId}
                    custom={index}
                    className=''
                    >
                      <ProductItem image={item.productImages} title={item.productTitle} price={item.productPrice} id={item.productId} tags={item.productTags} />
                    </motion.div>
                  ))}
                  </AnimatePresence>
                </motion.div>

              
                 {/* Pagination controls */}
                <ReactPaginate
                  previousLabel={<MdArrowBackIos />}
                  nextLabel={<MdArrowForwardIos />}
                  pageCount={Math.ceil(productData?.total / limit)}  // Total number of pages
                  onPageChange={handlePageChange}  // Handle page change
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                  pageClassName={"page-item"}
                  previousClassName={"previous-item"}
                  nextClassName={"next-item"}
                />
            </div> 


            {/* MOBILE PRODUCT DISPLAY   */}
            <div className='w-full h-full flex flex-col lg:hidden'>
                {/* SEARCH SECTION */}
                <div className='lg:hidden w-full h-max flex flex-col items-center gap-4 mt-3'>
                    <div className="w-full h-max flex flex-col lg:justify-start lg:items-start items-center justify-center gap-1">
                      <p onClick={() => setOpen(!open)}> Home / <span className="text-[#090969]]"> Products </span></p>
                      <h1 className="pt-sans-bold lg:text-3xl text-xl">Product</h1>
                    </div>

                    <div className='w-full h-[50px] relative'>
                      <input 
                      className='!appearance-none w-full h-full rounded-sm text-right text-sm p-2 px-6 bg-[#d9d9d9]'
                      placeholder='Search'
                      onChange={(e) => setSearch(e.target.value)}
                      onKeyDown={handleKeyDown}
                      />
                      <FiSearch className='absolute top-4 left-4' />
                    </div>
                </div>

                <div onClick={() => setOpen(!open)} className={`lg:hidden ${open ? 'w-[50%] justify-between' : 'w-max' } flex items-center  transition-transform duration-300 ease-linear p-2 relative`}>
                  <h1 >Filters</h1>
                  <IoIosArrowForward className={`w-max ${open ? 'rotate-[180deg]' : 'rotate-0 ' } transition-transform duration-300 ease-linear`} />
                </div>

                <div className='w-full flex items-start gap-3 overflow-hidden'>
                  <div 
                  className={`${open ? "translate-x-0" : "-translate-x-64 opacity-0 w-0 hidden" } w-[50%] flex flex-col gap-4 rounded-sm h-max p-2 transition-transform duration-300 ease-linear`}>
                    {/* SIZES */}
                    <div className='w-full'>
                      <div className='flex items-center justify-between'>
                      <h1 className='my-2 uppercase'>Sizes</h1>
                      <Button className='appearance-none underline p-2 bg-transparent shadow-none text-black hover:bg-transparent' onClick={() => setSizeFilter(null)}>Reset</Button>
                    </div>      
                      <div className='flex items-center gap-3'>
                        {sizes.map((size,i) => (
                          <div onClick={() => setSizeFilter(size)} key={i} className={`w-[40px] h-[30px] border-[1px] text-xs border-black/30 flex items-center justify-center ${sizeFilter === size ? "bg-black text-white" : "bg-transparent text-black"} cursor-pointer hover:bg-black hover:text-white duration-200 ease-linear`}> 
                            {size}
                          </div>
                        ))}
                      </div>
                      <hr className='bg-black/20 h-[0.15rem] w-full my-3'/>
                    </div>

                    {/* CATEGORIES */}
                    <div className='w-full flex flex-col gap-1'>
                      <div className='flex items-center justify-between'>
                      <h1 className='my-2 uppercase'>Categories</h1>
                      <Button className='appearance-none underline p-2 bg-transparent shadow-none text-black hover:bg-transparent' onClick={() => setCat(null)}>Reset</Button>
                     </div>
                      <div className='flex flex-col items-start gap-3'>
                        {categories.map((category,i) => (
                          <div onClick={() => setCat(category.toLocaleLowerCase())} key={i} className={`w-full p-2 ${category.toLocaleLowerCase() === cat  ? "bg-black text-white": "text-black bg-transparent"} font-light text-sm cursor-pointer hover:bg-black hover:text-white rounded-sm`}> 
                            {category}
                          </div>
                        ))}
                      </div>
                    </div>
                    <hr className='bg-black/20 h-[0.15rem] w-full my-3'/>

                {/* TAGS */}
               <div className='w-full flex flex-col gap-1'>
                <div className='flex items-center justify-between'>
                  <h1 className='my-2 uppercase'>Tags</h1>
                  <Button className='appearance-none underline p-2 bg-transparent shadow-none text-black hover:bg-transparent' onClick={() => setTagFilter(null)}>Reset</Button>
                </div>

                <div className='flex flex-wrap items-center gap-3'>
                  {tags.map((tag,i) => (
                    <div onClick={() => setTagFilter(tag.toLocaleLowerCase())} key={i} className={`w-max p-2 font-light text-xs cursor-pointer ${tag.toLocaleLowerCase() === tagFilter  ? "bg-black text-white": "text-black bg-transparent"} hover:bg-black hover:text-white rounded-sm`}> 
                      {tag}
                    </div>
                  ))}
                </div>
               </div>
              <hr className='bg-black/20 h-[0.15rem] w-full my-3'/>
                {/* PRICE RANGE */}
                <div className='w-full flex flex-col gap-2'>
                  <h1 className='uppercase'>Price Range</h1>
                  <div className='w-full flex items-center justify-between'>
                    <span>{priceRange[0]}</span>
                    <span>{priceRange[1]}</span>
                  </div>
                  <Slider 
                    value={priceRange}
                    onValueChange={handleChange}
                    min={5000}
                    max={100000}
                    step={1000}  
                  />
                </div>
                </div>

                   {/*MOBILE VIEW PRODUCT ITEMS */}
                    <div 
                    className={`h-full flex-1 ${open ? "flex": "grid"} grid-cols-2 md:grid-cols-3 items-start flex-wrap gap-4  py-5 px-2`}>
                      <AnimatePresence>
                      {productData && productData?.products?.map((item, index) => (
                        <motion.div
                        layout
                        variants={cardAnimate}
                        initial='offScreen'
                        whileInView="onScreen"
                        viewport={{once: true, amount:0.1}}
                        exit={{x:-300, opacity:0}}
                        transition={{duration: 0.3, ease: "linear"}}
                        key={item.productId}
                        custom={index}
                        className=''
                        >
                            <ProductItem image={item.productImages} title={item.productTitle} price={item.productPrice} id={item.productId} tags={item.productTags} />
                        </motion.div>
                      ))}
                      </AnimatePresence>
                    </div>
                </div>
            </div>

            


          </div>
        <Footer />
    </div>
  )
}

export default Products