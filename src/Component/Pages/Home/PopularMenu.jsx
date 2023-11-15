/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import MenuItem from "../shared/MenuItem";


const PopularMenu = () => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch("/Menu.json")
            .then(res => res.json())
            .then(data => {
                const popularItems =- data.filter(item => item.category === 'popular');

                setMenu(popularItems)
                
            })


    }, [])


    return (
        <div className="">
            <section className="">
                <SectionTitle

                    heading={"---Check it out---"}
                    subHeading={"FROM OUR MENU"}

                >

                </SectionTitle>
                <div>
                    {/* {
                        menu.map(item =><MenuItem key={item._id} item={item}></MenuItem> )
                    } */}
                    
                    Problem ase(64.6)
                </div>
            </section>
        </div>
    );
};

export default PopularMenu;