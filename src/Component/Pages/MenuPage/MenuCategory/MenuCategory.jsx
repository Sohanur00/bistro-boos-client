/* eslint-disable react/prop-types */
import Cover from "../../shared/Cover";
import MenuItem from "../../shared/MenuItem";


const MenuCategory = ({items,title,Img}) => {
    return (
        <div className="pt-8">
            {
              title &&  <Cover img={Img} title={"OUR MENU"} ></Cover>
            }
              
             <div className="grid md:grid-cols-2 gap-10 mb-8">
                    {
                        items.map(item =><MenuItem key={item._id} item={item}></MenuItem> )
                    } 
                     
                    
                </div>
        </div>
    );
};

export default MenuCategory;