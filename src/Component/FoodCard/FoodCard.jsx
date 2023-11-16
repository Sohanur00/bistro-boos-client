/* eslint-disable react/prop-types */


const FoodCard = ({item}) => {
    const {name,image , price , recipe } = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center text-2xl">{name}</h2>
                    <p className="font-bold">{recipe}</p>
                    <p className="text-orange-600 font-extrabold text-2xl">$$ { price}</p>
                    <div className="card-actions justify-center  mt-3">
                        <button className="btn bg-gray-200 uppercase  btn-outline">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;