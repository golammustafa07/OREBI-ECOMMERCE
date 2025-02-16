import React, { useEffect, useRef, useState } from 'react'
import Container from '../Layout/Container'
import icon from "../../assets/icon.svg"
import Search from './Search'
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { RxTriangleDown } from "react-icons/rx";
import { FaCartShopping } from "react-icons/fa6";
import Dropdown from '../Layout/Dropdown';

const Header = () => {
    const [show,setshow] = useState(false)
    const ref = useRef()

    useEffect(()=>{
        document.body.addEventListener("click",(e)=>{
            console.log(ref.current);
            if (ref.current.contains(e.target)) {
                setshow(true)
            }else{
                setshow(false)
            }
        })
    },[])
    return (
        <div className='bg-[#F5F5F3]'>
            <Container className="py-6">
                <div className='flex items-center justify-between'>
                    <div className='cursor-pointer'>
                        <Dropdown className="relative" dropRef={ref}>
                            <div className='flex items-center gap-x-2.5'>
                                <img src={icon} alt="" />
                                <p className='font-dm-sans text-[14px] leading-[18px] text-primary'>Shop by Category</p>
                                {
                                    show &&
                                    <div  className='absolute top-10 bg-primary w-[263px]'>
                                        <ul>
                                        <li className='py-4 px-5 border-b border-[#d8d8d8]'><a className='font-dm-sans text-[14px] leading-[18px] text-[#ffffff]/70 hover:font-bold hover:text-white hover:mx-2.5' href="">Accessories</a></li>
                                        <li className='py-4 px-5 border-b border-[#d8d8d8]'><a className='font-dm-sans text-[14px] leading-[18px] text-[#ffffff]/70 hover:font-bold hover:text-white hover:mx-2.5' href="">Furniture</a></li>
                                        <li className='py-4 px-5 border-b border-[#d8d8d8]'><a className='font-dm-sans font-bold text-[14px] leading-[18px] text-white hover:mx-2.5' href="">Electronics</a></li>
                                        <li className='py-4 px-5 border-b border-[#d8d8d8]'><a className='font-dm-sans text-[14px] leading-[18px] text-[#ffffff]/70 hover:font-bold hover:text-white hover:mx-2.5' href="">Clothes</a></li>
                                        <li className='py-4 px-5 border-b border-[#d8d8d8]'><a className='font-dm-sans text-[14px] leading-[18px] text-[#ffffff]/70 hover:font-bold hover:text-white hover:mx-2.5' href="">Home Appliances</a></li>
                                    </ul>
                                    </div>
                                }
                            </div>
                        </Dropdown>
                    </div>

                    <div className='relative'>
                        <Search className="py-4 px-5 w-[600px] font-dm-sans text-[14px] leading-[18px] text-[#c4c4c4] outline-none" placeholder="Search Products" />
                        <FaSearch className='text-xl absolute top-[50%] translate-y-[-50%] right-5' />
                    </div>

                    <div className='flex items-center gap-x-10 mr-[15px]'>
                        <div className='flex items-center gap-x-2.5 cursor-pointer'>
                            <IoPersonSharp />
                            <RxTriangleDown />
                        </div>
                        <div className='cursor-pointer'>
                            <FaCartShopping />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header