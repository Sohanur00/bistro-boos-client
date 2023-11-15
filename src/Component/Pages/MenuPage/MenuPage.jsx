import { Helmet } from 'react-helmet-async';
import Cover from '../shared/Cover';
import menuImage from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../Home/PopularMenu';

const MenuPage = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu </title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Cover img={menuImage} title={"OUR MENU"} ></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImage} title={"OUR MENU"} ></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImage} title={"OUR MENU"} ></Cover>
            <PopularMenu></PopularMenu>
        </div>
    )
};

export default MenuPage;