import {GiAstronautHelmet} from "react-icons/gi";
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

                <div>

                </div>
               

            </div>
            { children }
            <div>Watch your feet an ye trotters, careful now</div>

        </div>
    );
}