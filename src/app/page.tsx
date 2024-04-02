import Image from "next/image";



export default function Home() {
  return (
    <div>
    <section className="grid grid-cols-2 mt-5">
      <div className="p-20">
<h1 className="text-7xl font-bold">My Name is Muzammil Mazhar</h1>

<div className="flex gap-4 mt-5">

  <button className="bg-blue-600 hover:bg-blue-500 rounded-full text-white px-8 py-2 ">Order Now</button>
  <button className=" hover:bg-blue-600 hover:rounded-full hover:text-white px-8 py-2 ">Learn More</button>
</div>
</div>

<div className="relative">
  <Image src="/w112.png" alt="pizza" layout="fill" objectFit="contain"/>
  </div>
  
    </section>
    <div>
    <h1 className="md:text-4xl text-2xl font-bold text-center mb-2">This is Our <span className="text-blue-600">Deal</span></h1>
  </div>
  <div className="grid grid-cols-3 item-center justify-around">

    <div className=" p-4 rounded-lg text-center">
      <img className="w-2xl rounded-full -mb-24 p-8"src="/w11.jpeg" alt="Shoes"></img>
     <div className="bg-gray-200 rounded-lg ">
       <h4 className="font-semibold my-2 pt-20">Nike Shoes</h4>
      <p className="text-gray-500 text-sm justify-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Repellat beatae molestiae tempora. </p>
         <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500 mt-2 mb-6">Order Now $12</button>
         </div>
    </div>
    <div className=" p-4 rounded-lg text-center">
      <img className="rounded-full -mb-24 p-8"src="/w11.jpeg" alt="Shoes"></img>
     <div className="bg-gray-200 rounded-lg ">
       <h4 className="font-semibold my-2 pt-20">Nike Shoes</h4>
      <p className="text-gray-500 text-sm justify-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Repellat beatae molestiae tempora.</p>
         <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500 mt-2 mb-6">Order Now $12</button>
         </div>
    </div>
    <div className=" p-4 rounded-lg text-center">
      <img className="rounded-full -mb-24 p-8"src="/w11.jpeg" alt="Shoes"></img>
     <div className="bg-gray-200 rounded-lg ">
       <h4 className="font-semibold my-2 pt-20">Nike Shoes</h4>
      <p className="text-gray-500 text-sm justify-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Repellat beatae molestiae tempora.</p>
         <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500 mt-2 mb-6">Order Now $12</button>
         </div>
    </div>
   
    

  </div>
    </div>
  );
}
