function Register(){
    return(
<section className="mt-8">
<h1 className="text-center text-blue-600 text-4xl mb-4">Register</h1>
<form className="block max-w-xs mx-auto">
    <input type="email" placeholder="email"/>
    <button type="submit">Register</button>
    <input type="password" placeholder="password"/>
    <div className="my-4 text-center text-gray-500">
        or login with provider
    </div>
    <button >
        Login with google
    </button>
</form>
</section>
    )
}

export default Register;