
import NandosFooter from "./NandosFooter"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Layout( {children} ) {
    return (
       <div>
        <Navbar/>
            { children }
            <div>Watch your feet an ye trotters, careful now</div>
        <NandosFooter/>
        </div>
    );
}