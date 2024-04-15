"use client";

import { useState } from "react";


function Register(){
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
function handleFormSubmit(ev: { preventDefault: () => void; }){
ev.preventDefault();
fetch('/api/register', {
    method:'POST',
    body: JSON.stringify({email,password}),
    headers: {'Content-Type':'application/json'},
});
}


    return(
<section className="mt-8">
<h1 className="text-center font-semibold text-orange-600 text-4xl mb-4">Register</h1>
<form className="block max-w-sm mx-auto" onSubmit={handleFormSubmit}>
    <input className="block w-full my-4 rounded-sm border p-2 border-gray-300 bg-gray-100"   type="email" placeholder="email" value={email}
     onChange={ev => setEmail(ev.target.value)}/>
        <input className="block w-full my-4 rounded-sm border p-2 border-gray-300 bg-gray-100"  type="password" placeholder="password" value={password}
        onChange={ev => setPassword(ev.target.value)}/>
        <button className="block w-full text-white font-semibold border rounded-sm px-6 py-2  border-0 bg-orange-500 " type="submit">Register</button>
    <div className="my-4 text-center text-gray-500">
        or login with provider
    </div>
    <button className="block w-full  font-semibold border rounded-sm px-6 py-2  border-gray-500 " type="submit">
        
        Login with Google</button>
</form>
</section>
    )
}

export default Register;