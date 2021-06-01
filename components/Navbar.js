import Link from "next/link";
import {GiAstronautHelmet} from "react-icons/gi";
import {AiOutlineUser, AiOutlineBell} from "react-icons/ai";
import {FiSearch} from "react-icons/fi";

export default function Navbar(props) {
    return (
        <div>
            <div className="px-2 md:px-24 bg-black text-white flex justify-between h-16">
               <Link href="/">
                    <a className="uppercase text-3xl flex align-baseline px-10 my-auto" >
                        <GiAstronautHelmet className="inline text-4xl mr-4" />
                        Channel 21 
                    </a>    
                </Link>
{/* search bar */}
                <div className="flex items-center w-1/3 text-lg">
                    {/* border-b means borer at the bottom, w-fll means width full (container) */}
                    <input type="text" className="bg-transparent border-b w-full border-white outline-none"/>
                    <FiSearch  className="-ml-8 text-2xl hover:text-red-600 cursor-pointer" />
                </div>
{/* user and notification icons    */}
                <div className="flex items-center text-2xl">
                    <AiOutlineBell className="mr-2 cursor-pointer hover:text-red-600" />
                    <AiOutlineUser className="mr-2 cursor-pointer hover:text-red-600" />
                </div>
 
            </div>

            <div className="px-2 md: px-24 bg-white flex border-b border-black " > 
                <Link href="/" >
                    <a className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent hover:border-black"> Home
                    </a>
                </Link>
                <Link href="/politics" >
                    <a className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent hover:border-black"> Politics
                    </a>
                </Link>
                <Link href="/sports" >
                    <a className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent hover:border-black"> Sports
                    </a>
                </Link>
                <Link href="/business" >
                    <a className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent hover:border-black"> Business 
                    </a>
                </Link>
            </div>
        </div>
    );
}

