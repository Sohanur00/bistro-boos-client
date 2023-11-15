import { Outlet } from "react-router-dom";
import Footer from "../Pages/shared/Footer";
import Navber from "../Pages/shared/Navber";


const MainLayOut = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;