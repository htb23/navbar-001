import React from "react";

function FAQ(){
    return(
        <div className="py-5 bg-[#141c27] bg-cover bg-center justify-center">
           
          
           
        <h1 className=" text-[35px] md:text-[50px] text-white font-bold text-center">
            F.A.Q <span className="text-green-500"></span></h1>
            <div className="mt-10 pb-10 p-10 gap-4 justify-between flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            
            <div className=" max-w-lg mx-auto ">
  <details className="bg-white open:bg-white dark:open:bg-white open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg" open>
    <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
    What expertise do you bring to our web development project1?
    </summary>
    <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-white">
      <p>I bring a blend of academic qualifications and practical experience, equipping me with expertise in various facets of web development, ensuring high-quality deliverables.</p>
    </div>
  </details>
</div>
<div className=" max-w-lg mx-auto ">
  <details className="bg-white open:bg-white dark:open:bg-white open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg" open>
    <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
    How do you ensure timely delivery of projects?
    </summary>
    <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-white">
      <p>Timely delivery is a priority for me. I meticulously plan projects, set realistic timelines, and maintain open communication throughout the process, ensuring projects are completed on schedule.</p>
    </div>
  </details>
</div>
<div className=" max-w-lg mx-auto ">
  <details className="bg-white open:bg-white dark:open:bg-white open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg" open>
    <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
    How do you approach incorporating our feedback process?
    </summary>
    <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-white">
      <p>I value client feedback immensely. I maintain open channels of communication, actively seek feedback at key milestones, and iteratively incorporate suggestions to ensure the final product aligns perfectly with your vision.</p>
    </div>
  </details>
</div>
<div className=" max-w-lg mx-auto ">
  <details className="bg-white open:bg-white dark:open:bg-white open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg" open>
    <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
    What sets you apart from other web developers we may consider?
    </summary>
    <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-white">
      <p> My commitment to innovation, collaborative approach, adherence to deadlines, and focus on customer satisfaction set me apart. I strive to deliver not just a website but an exceptional digital experience tailored to your needs.</p>
    </div>
  </details>
</div>
            
            
            </div>

            
    </div>
    )
}

export default FAQ;