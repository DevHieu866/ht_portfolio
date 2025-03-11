'use client'
import React from 'react'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {

  const [menuOn,setMenuOn] = useState(false)

  return (
    <header className={`flex border-b border-rc fixed w-full top-0 z-30 bg-rc shadow-xl ${menuOn? "ease-in-out duration-300 h-screen": "ease-in-out duration-300 h-[60px]"}`}>
        <Menu onClick={() => setMenuOn(true)} className={`${menuOn? "hidden": "fixed top-4 right-8 size-8"}`}/>
        <X onClick={() => setMenuOn(false)} className={`${menuOn? "fixed top-4 right-8 size-8": "hidden"}`}/>
        <div className={`${menuOn? "flex flex-col p-4 justify-center items-center w-full text-wc text-4xl space-y-12":"hidden"}`}>
          <a href="#projects" className="hover:text-bc" onClick={() => setMenuOn(false)}>Projects</a>
          <a href="#about" className="hover:text-bc" onClick={() => setMenuOn(false)}>About</a>
          <a href="#contact" className="hover:text-bc" onClick={() => setMenuOn(false)}>Contacts</a>
        </div>
    </header>
  )
}

export default Navbar
