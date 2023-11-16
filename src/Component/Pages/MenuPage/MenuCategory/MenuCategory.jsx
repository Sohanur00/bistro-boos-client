/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cover from "../../shared/Cover";
import MenuItem from "../../shared/MenuItem";


const MenuCategory = ({items,title,Img}) => {
    return (
        <div className="pt-8 p-5">
            {
              title &&  <Cover img={Img} title={title} ></Cover>
            }
              
             <div className="grid md:grid-cols-2 gap-10 mt-16 mb-8">
                    {
                        items.map(item =><MenuItem key={item._id} item={item}></MenuItem> )
                    } 
                     
                  
                </div>

                <Link to={`/order/${title}`}>
                <div className="text-center justify-center mt-20">
                        <button className="btn btn-outline font-bold btn-success text-green-700">ORDER YOUR FAVOURITE FOOD</button>
                    </div>
                </Link>
               
        </div>
    );
};

export default MenuCategory;