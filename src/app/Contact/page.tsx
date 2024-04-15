import React from "react";

function Contact(){
    return(
        <section className="mt-24 mb-24">
        <h1 className="text-center font-semibold text-yellow-400 text-4xl mb-4">Register</h1>
        <form className="block max-w-sm mx-auto">
            <input className="block w-full my-4 rounded-sm border p-2 border-gray-300 bg-gray-100"   type="email" placeholder="email" />
                <input className="block w-full my-4 rounded-sm border p-2 border-gray-300 bg-gray-100"  type="password" placeholder="password" />
                <button className="block w-full text-white font-semibold border rounded-sm px-6 py-2  border-0 bg-yellow-500 " type="submit">Register</button>
            <div className="my-4 text-center text-gray-500">
                or login with provider
            </div>
            <button className="block w-full  font-semibold border rounded-sm px-6 py-2  border-gray-500 " type="submit">
                
                Login with Google</button>
        </form>
        </section>
    )
}

export default Contact;