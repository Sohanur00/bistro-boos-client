import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/shared/Footer";
import Navber from "../Pages/shared/Navber";


const MainLayOut = () => {

    const location = useLocation();
    console.log(location)

    const noHeaderFooter = location.pathname.includes('login')

    return (
        <div>
            {  noHeaderFooter || <Navber></Navber>  }
            
            <Outlet></Outlet>
            
            { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayOut;