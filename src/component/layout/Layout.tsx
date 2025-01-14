import { Outlet } from "react-router-dom";
import Footer from "../footer/footer.component";

const Layout = () => {
    return (
        <>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout