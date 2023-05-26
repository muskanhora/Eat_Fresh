import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";


const RestaurantMenu=()=>{
   const {id}=useParams();
   const restaurant=useRestaurantMenu(id);
   const dispatch=useDispatch();
    const addFoodItems=(items)=>{
    dispatch(addItem(items));
    }

    return(
        <>
        <div className="flex justify-between  min-h-screen">
    {/* console.log(restaurant.card.card.title) */}
    <ul className="p-2 m-2 min-w-full"><span className="font-bold my-3">{restaurant?.title}</span>
 {restaurant?.hasOwnProperty('categories')}  {
        restaurant?.itemCards?.map((item)=><li className="shadow-lg flex justify-between p-2" key={item?.card?.info?.id}><span className="w-96">{item?.card?.info?.name}</span> <span> <button className="p-2 m-2 bg-green-200" onClick={()=>addFoodItems(item?.card?.info)}> + </button></span><span>{item?.card?.info?.price/100}</span></li>)
    }
 {
               restaurant?.categories?.map((items)=>{
                    return(
                        items.itemCards.map((item)=><li className="shadow-lg flex justify-between p-2" key={item?.card?.info?.id}><span className="w-96">{item?.card?.info?.name}</span><span><button className="p-2 m-2 bg-green-200" onClick={()=>addFoodItems(item?.card?.info)}> + </button> </span> <span>{item?.card?.info?.price/100}</span></li>)
                    )
                })
    }
   
    </ul>
        </div>
        </>
    )
}
export default RestaurantMenu;