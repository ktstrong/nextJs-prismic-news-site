import {GiAstronautHelmet} from "react-icons/gi";
import {FiSearch} from "react-icons/fi";
import Link from "next/link";

export default function Layout( {children} ) {
    return (
       <div>
            <div className="px-2 md:px-24 bg-black text-white flex justify-between h-16">
               <Link href="/">
                    <a className="uppercase text-2xl flex align-baseline px-10 my-auto" >
                         <GiAstronautHelmet className="inline text-4xl mr-4" />
                        Channel 21 
                    </a>    
                </Link>

                <div className="flex items-center w-1/3 text-lg">
                    {/* border-b means borer at the bottom, w-fll means width full (container) */}
                    <input type="text" className="bg-transparent border-b w-full border-white outline-none"/>
                    <FiSearch  className="-ml-8 text-2xl hover:text-red-600 cursor-pointer" />

                </div>
               

            </div>
            { children }
            <div>Watch your feet an ye trotters, careful now</div>

        </div>
    );
}