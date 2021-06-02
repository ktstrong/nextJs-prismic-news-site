import {GiAstronautHelmet} from "react-icons/gi";

import Link from "next/link";


export default function Footer(props) {
    return (
        <div className="bg-footGray text-white text-xl py-10 px-24 flex flex-col">
            <div>
                <Link href="/">
                    <a className="uppercase text-2xl flex align-baseline px-10 my-auto" >
                    <GiAstronautHelmet className="inline text-4xl mr-4" />
                        Channel 21 
                    </a>    
                </Link>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-10 max-w-3xl">
                <h1>Careers</h1>
                <h1>Privacy Policy</h1>
                <h1>Cookies Policy</h1>
                <h1>Terms and Conditions</h1>
                <h1>Media</h1>
                <h1>Contact</h1>
                <h1>Locations</h1>
                <h1>Membership</h1>
                <h1>FAQ</h1>
               
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
