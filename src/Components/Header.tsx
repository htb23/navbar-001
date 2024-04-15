import Link from "next/link";

function Header(){
    return(
   <div>
   <header className="flex item-center justify-between">

  <nav className="flex items-center gap-10">
  <Link  className="font-semibold text-2xl" href="/"><span className="text-blue-600">Digi</span>Markistan</Link>
   <Link  className="hover:border-b-4 border-blue-600 transition-all" href="/">Home</Link>
   <Link className="hover:border-b-4 border-blue-600 transition-all" href="/Services">Services</Link>
   <Link className="hover:border-b-4 border-blue-600 transition-all"  href="./Branches">Branches</Link>
   <Link className="hover:border-b-4 border-blue-600 transition-all" href="./Contact">Contact</Link>
   
   </nav>
   <nav className="flex items-center gap-4">
   <Link href="./Login" className="hover:bg-blue-500 hover:text-white hover:rounded-full px-8 py-2">Login</Link>
   <Link href="./Register" className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8 py-2">Register</Link>
   </nav>
   </header>
   </div>
)
}
export default Header;