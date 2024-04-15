import { CodeBracketSquareIcon, RocketLaunchIcon, Square3Stack3DIcon, WindowIcon } from "@heroicons/react/16/solid";
import { ChevronDoubleRightIcon, CommandLineIcon } from "@heroicons/react/24/outline";
import React from "react";

function Services(){
    return(
        <div className="pt-5 bg-[#141c27]  bg-cover bg-center justify-center">
           
          
           
            <h1 className=" text-[35px] md:text-[50px] text-white font-bold text-center pt-4">
                My <span className="text-green-500">Services</span></h1>
                <div className="mt-10 pb-10 p-10 gap-4 justify-between flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <div className="p-5 bg-red-600 justify-center">
                    <CodeBracketSquareIcon className="align-center w-[4rem] h-[4rem] text-white place-self-center"/>
                    <h1 className="text-[25px] md:text-[30px] text-white font-bold text-center">FRONT-END</h1>
                    <p className="px-5 py-5 text-center content-stretch text-white">Combining Next.js and Tailwind CSS yields rapid development, SEO-friendly SSR, and highly customizable UIs, enhancing performance and user experience seamlessly. </p>
                </div>
                <div className=" p-5 bg-orange-600">
                <RocketLaunchIcon className="align-center w-[4rem] h-[4rem] text-white place-self-center"/>
                    <h1 className="text-[25px] md:text-[30px] text-white font-bold text-center">BACK-END</h1>
                    <p className="px-5 py-5 text-center content-stretch text-white">In this tech stack, backend developers focus on creating robust APIs, managing data, and ensuring smooth server operations, ensuring seamless communication between frontend and database. </p>
                </div>
                <div className=" p-5 bg-blue-600">
                   <Square3Stack3DIcon className="align-center w-[4rem] h-[4rem] text-white place-self-center"/>
                    <h1 className="text-[25px] md:text-[30px] text-white font-bold text-center">FULLSATCK</h1>
                    <p className="px-5 py-5 text-center content-stretch text-white">
A full stack developer proficient in Next.js and Tailwind CSS crafts dynamic web applications end-to-end. They adeptly handle frontend UI design, backend logic, and seamless integration, delivering comprehensive digital solutions. </p>
                </div>
                <div className="p-5 bg-purple-600">
                    <WindowIcon className="align-center w-[4rem] h-[4rem] text-white place-self-center"/>
                    <h1 className="text-[25px] md:text-[30px] text-white font-bold text-center">WORDPRESS</h1>
                    <p className="px-5 py-5 text-center content-stretch text-white">
A WordPress developer specializes in creating and customizing websites using the WordPress platform, implementing themes, plugins, and functionality to meet client needs.</p>
                </div>
                
                
                </div>
                
        </div>
    )
}

export default Services;