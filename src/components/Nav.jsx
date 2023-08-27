import React from 'react'
import  {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header >
        <nav className='padding-x py-8 absolute z-10 w-full flex justify-between items-center max-container'>
            <a href="/">
                <img src={headerLogo} width={130} height={29} alt="logo" />
            </a>
            <ul className='flex-1 flex justify-center gap-16 max-lg:hidden'>
                {navLinks.map((item)=>(
                    <li key={item.label}>
                        <a href={item.href}
                        className='font-montserrat leading-normal text-lg text-slate-gray'
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='invisible max-lg:visible '>
                <img src={hamburger} className='invisible max-lg:visible ' alt="hamburger" width={25} height={25} />
            </div>
        </nav>
        </header>
  )
}

export default Nav