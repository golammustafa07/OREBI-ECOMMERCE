import React from 'react'
import Container from '../Layout/Container'
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <nav>
        <Container className="py-8">
            <div className='flex items-center justify-between'>
                <div className=''>
                    <img src={logo} alt="" />
                </div>
                
                <div className=''>
                    <ul className='flex items-center gap-x-10'>
                        <li><a className='font-dm-sans font-bold text-[14px] leading-[18px] text-primary' href="">Home</a></li>
                        <li><a className='font-dm-sans text-[14px] leading-[18px] text-[#767676] hover:font-bold hover:text-primary' href="">Shop</a></li>
                        <li><a className='font-dm-sans text-[14px] leading-[18px] text-[#767676] hover:font-bold hover:text-primary' href="">About</a></li>
                        <li><a className='font-dm-sans text-[14px] leading-[18px] text-[#767676] hover:font-bold hover:text-primary' href="">Contacts</a></li>
                        <li><a className='font-dm-sans text-[14px] leading-[18px] text-[#767676] hover:font-bold hover:text-primary' href="">Journal</a></li>
                    </ul>
                </div>
            </div>
            
        </Container>
    </nav>
  )
}

export default Navbar