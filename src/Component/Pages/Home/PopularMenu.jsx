/* eslint-disable no-unused-vars */

import SectionTitle from "../../SectionTitle/SectionTitle";
import MenuItem from "../shared/MenuItem";
import useMenu from "../../Hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')

    // const [menu, setMenu] = useState([])

    // useEffect(() => {
    //     fetch("/Menu.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular');

    //             setMenu(popularItems)
                
    //         })


    // }, [])

    return (
        <div className="">
            <section className="mb-12">
                <SectionTitle

                    heading={"---Check it out---"}
                    subHeading={"FROM OUR MENU"}

                >

                </SectionTitle>
                <div className="grid md:grid-cols-2 gap-10 mb-8">
                    {
                        popular.map(item =><MenuItem key={item._id} item={item}></MenuItem> )
                    } 
                     
                    
                </div>
            </section>
        </div>
    );
};

export default PopularMenu;