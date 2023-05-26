import { IMG_URL } from "../constants";

const RestaurantCard=({cloudinaryImageId,name,cuisines,avgRating})=>{
return(
    <>
    <div className="flex shadow-lg flex-col justify-between w-[250px] m-2 p-3 h-[19rem] hover:border">
        <img className="rounded-lg" src={IMG_URL+cloudinaryImageId}/>
        <h2 className="font-bold text-center p-[0.1rem]">{name}</h2>
        <h3 className="text-center text-sm italic">{cuisines.join(", ")}</h3>
        <h3 className="text-center">Rating: {avgRating} ⭐</h3>
    </div>
    </>
)
}
export default RestaurantCard;