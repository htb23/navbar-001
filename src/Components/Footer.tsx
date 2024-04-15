import { EnvelopeIcon, MapIcon } from "@heroicons/react/16/solid";
import { PhoneIcon } from "@heroicons/react/16/solid";
import React from "react";

function Footer(){
    return(
        <div className="bg-[#141c27] bg-cover bg-center justify-center shadow-md">
           
          <div className="p-10 gap-4 justify-between flex grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3">
            
            <div className="items-center p-2 grid ">
             <button className="pb-3 flex items-center space-x-4 px-4 ">
             <PhoneIcon className="w-[1.6rem] h-[1.7rem] text-white "/>
        <h1 className="px-2  text-[18px] sm:text-[12px] md:text-[15px] lg:text-[18px]  text-white font-bold text-left">
            Contact Me</h1>
        </button> 
         <div className="grid grid-cols-1"> <p className="space-x-4 px-4 text-[18px]  sm:text-[12px] md:text-[15px] lg:text-[18px] font-semibold text-white">+92306-2912923</p>
        <p className=" space-x-4 px-4 text-[18px] block sm:text-[12px] md:text-[15px] lg:text-[18px]  font-semibold text-white">+92327-4996286</p></div>
            </div>

            <div className="items-center p-2 grid ">
             <button className="pb-3 flex items-center space-x-4 px-4 ">
             <EnvelopeIcon className="w-[1.6rem] h-[1.7rem] text-white "/>
        <h1 className="px-2  text-[18px] sm:text-[12px] md:text-[15px] lg:text-[18px]  text-white font-bold text-left">
           Email</h1>
        </button> 
         <div className="grid grid-cols-1"> <p className="space-x-4 px-4 text-[18px]  sm:text-[12px] md:text-[13px] lg:text-[18px] font-semibold text-white">muzammilmazhar47@gmail.com</p>
        <p className=" space-x-4 px-4 text-[18px] block sm:text-[12px] md:text-[13px] lg:text-[18px]  font-semibold text-white">muzammilmazhar45@gmail.com</p></div>
            </div>

            <div className="items-center p-2 grid ">
             <button className="pb-3 flex items-center space-x-4 px-4 ">
             <MapIcon className="w-[1.6rem] h-[1.7rem] text-white "/>
        <h1 className="px-2  text-[18px] sm:text-[12px] md:text-[15px] lg:text-[18px]  text-white font-bold text-left">
            Address</h1>
        </button> 
         <div className="grid grid-cols-1"> <p className="space-x-4 px-4 text-[18px]  sm:text-[12px] md:text-[15px] lg:text-[18px] font-semibold text-white">Sheraz Town Near Ameer Chowk, Lahore</p>
</div>
            </div>
            
           
            
            
            </div>

            <div className=" flex grid grid-cols-1 border-t-[2px]  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 border-1-2 border-t-gray-500  pb-10 ">
                <div><p className="text-gray-400 text-center pt-5 pb-5">DigiMarkistan 2024 | All Rights Reserved</p></div>
                <div className="flex grid- grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 justify-around">
                <div className="text-gray-400 pt-5 pb-5">Term & Conditions</div>
                <div className="text-gray-400 pt-5 pb-5">Privacy Policy</div>
                <div className="text-gray-400 pt-5 pb-5"></div>
                </div>
            </div>
    </div>
    )
}

export default Footer;