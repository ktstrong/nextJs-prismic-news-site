
import NandosFooter from "./NandosFooter"
import FooterNav from "./FooterNav"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Layout( {children} ) {
    return (
       <div>
        <Navbar/>
            { children }
        <FooterNav/> 
        <NandosFooter/>
        </div>
    );
}