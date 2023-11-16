/* eslint-disable no-unused-vars */
import { Helmet } from 'react-helmet-async';
import Cover from '../shared/Cover';
import menuImage from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupdImg from '../../../assets/menu/soup-bg.jpg'

import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const MenuPage = () => {
const [menu] = useMenu();
const desserts = menu.filter(item => item.category === 'dessert')
const soup = menu.filter(item => item.category === 'soup')
const salad = menu.filter(item => item.category === 'salad')
const pizza = menu.filter(item => item.category === 'pizza')
const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro | Menu </title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Cover img={menuImage} title={"OUR MENU"} ></Cover>
            {/* main cover */}
           <SectionTitle
           
           subHeading={"---Don't miss---"}
           heading={"TODAY'S OFFER"}
           
           >
            {/* 
            
            offered menu item
            */}

           </SectionTitle>
           <MenuCategory items={offered}> </MenuCategory>
           {/* dessert menu items */}
           <MenuCategory items={desserts}
           title="Dessert"
           Img={dessertImg}
           ></MenuCategory>

           <MenuCategory
           
           items={pizza}
           title={"Pizza"}
           Img={pizzaImg}
           >


           </MenuCategory>

           <MenuCategory
           
           items={salad}
           title={"Salad"}
           Img={saladImg}
           >


           </MenuCategory>

           <MenuCategory
           
           items={soup}
           title={"Soup"}
           Img={soupdImg}
           >


           </MenuCategory>
          
        </div>
    )
};

export default MenuPage;