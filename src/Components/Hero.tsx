
import Image from "next/image";
import React from "react";

import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/16/solid";
import TextEffect from "./TextEffect";



const Hero = () =>{
    return(
<div className=" h-[88vh] bg-[#141c27] bg-cover bg-center pt-0 ">
    
    <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 md:grid-cols-2  gap-[3rem] h-[100%] items-center">
      
      <div>
      <h1 className="text-[35px] md:text-[25px] lg:text-[50px] text-white font-bold">
            HI, I'M <span className="text-yellow-400">Muzammil</span>
        </h1>

       <TextEffect/>
       <p className="mt-[2rem] text-white text-[20px] md:text-[15px] lg:text-[20px] sm:text[]">
Welcome! Are you seeking a dynamic web solution? Our team crafts bespoke websites tailored to your needs. Let's collaborate and transform your vision into a stunning online presence. Ready to begin?</p>
       <div className="grid grid-cols-2 mt-[2rem] flex-col space-y-6  sm:space-y-0 sm:flex sm:flex-row items-center sm:spaxe-x-6">
      <button className="flex items-center space-x-2 px-[2rem] hover:bg-green-500 bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase">
        <p className="text-[12px] md:text-[15px] sm:text-[12px] lg-text-[20]">Download CV</p>
        <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black"/>
        </button>  
        <button className="flex items-center space-x-4 px-4 ">
        <PhoneIcon className="w-[1.6rem] h-[1.7rem] text-white "/>
        <p className="text-[20p] sm:text-[12px] md:text-[15px] font-semibold text-white">Contct Me</p>
        
        </button> 
</div>
<div>


</div>
       </div>
       <div className="bg-blue pb-5 justify-self-center sm:pb-50   relative lg-flex">
        <Image className="gap-2 rounded-t-full w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] md:w-[350px] md:h-[350px] sm:w-[400px] sm:h-[400px]" width={400} height={400} src="/im11.jpeg" alt="portfolio" ></Image>
        </div> 
    </div>
</div>
    )
}

export default Hero;