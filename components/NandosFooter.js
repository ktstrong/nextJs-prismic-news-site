import {GiAstronautHelmet} from "react-icons/gi";

import Link from "next/link";


export default function Footer(props) {
    return (
        <div className="bg-footGray text-white text-xl py-10 px-24 flex flex-col">
            <div>
              
            </div>
     

                   <div className="w-1/2 text-sm " >
                    {/* border-b means borer at the bottom, w-fll means width full (container) */}
                    <input type="text" placeholder="Pop your email address in here" className="bg-white text-center text-black w-full border-white outline-none h-8 justify-items-center" />
                </div>
                
            <div className="my-10 text-sm max-w-2xl" >
                Channel 21™ is a open-media initiative by Xmedia Gcorp, US ® and is registered as not for profit organisation. All rights reserved. &copy; 
                &nbsp; {
                    new Date().getFullYear()
                }



            </div>
        </div>
    );
}
