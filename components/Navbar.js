import {GiAstronautHelmet} from "react-icons/gi";

import Link from "next/link";

export default function Navbar(props) {
    return (
        // px mean padding x axis i.e padding horizontal

        <div className="px-2 md:px-24 bg-black text-white flex justify-between h-16">
            
            <ul >
                {/* my mean margin y, i.e margin vertivle */}
            
           
                <a>
                    <Link href="/business">Business </Link>
                </a>
            
                <a>
                    <Link href="/sports">Sports</Link>
                </a>
           
                <a>
                    <Link href="/politics">Politics</Link>
                </a>
            </ul>
        </div>
    );
}

