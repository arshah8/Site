import Link from "next/link";

export default function Footer () {
    return(
        
        <footer className=" flex items-center bg-gray-900 w-full h-24">
         <div className="justify-start items-center h-6 w-8"></div>

         <div className="flex justify-start items-center h-10 w-3/12">
    <div className="text-white">
      <p>&copy; {new Date().getFullYear()} AR SHAH. All rights reserved.</p>
    </div>
    </div>

    <div className="flex justify-end items-center h-10 w-3/12">
    <div className="text-white"><p>Contact: dragema44@gmail.com</p></div>
    </div>
  
    <div className="flex justify-end items-center h-5 w-5/12">
      <Link href="/about" legacyBehavior>
        <a className="text-white hover:text-gray-300 justify-end h-5 w-2/12">ABOUT</a>
      </Link>
      <Link href="/blog" legacyBehavior>
        <a className="text-white hover:text-gray-300 h-5 w-2/12 justify-center">BLOG</a>
      </Link>
    </div>

</footer>

    )
}