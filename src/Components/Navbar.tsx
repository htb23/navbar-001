import Link from "next/link";
import React from "react";

function Navbar(){
    return(
        <div className="sticky W-[100%] top-0 h-[12vh] bg-[#141c22] shadow-md">
        <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
          <Link href="/">  <h1 className="animate-bounce flex-[0.6] cursor-pointer text-[25px] text-white font-bold">Muzammil 
            <span className="text-yellow-500">Mazhar</span></h1></Link>
    {/* ``<Link href="/" className="nav-link">Home</Link>
               <Link href="/Services" className="nav-link">Services</Link>
               <Link href="" className="nav-link">About</Link>
               <Link href="" className="nav-link">Projects</Link>
               <Link href="" className="nav-link">Blog</Link> */}


<Link href="/Contact" className="nav-link " >Contact</Link>

       </div>   
        
        </div>
    )
}

export default Navbar;