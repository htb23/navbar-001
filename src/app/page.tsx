"use client"

import Education from "@/Components/Education";
import FAQ from "@/Components/Faq";
import Hero from "@/Components/Hero";

import Services from "@/Components/Services";




export default function Home() {

  return (
   <div className="overflow-x-hidden">
    <div>

    <Hero/>
    <Services/>
    <Education/>
    <FAQ/>
      </div>
   </div>
  );
}
