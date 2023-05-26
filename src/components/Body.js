import RestaurantCard from "./RestaurantCard";
import useRestaurantList from "../utils/useRestaurantList";
import ShimmerUI from "./ShimmerUI";
import { useState } from "react";
import useOnline from "../utils/useOnline";
import { Link } from "react-router-dom";

const Body=()=>{
  const [restaurant,filterRestaurant,setFilterRestaurant]=useRestaurantList();
  const [searchTxt,setSearchTxt]=useState("");

  const offline=useOnline();
  if(!offline){
    console.log("online");
   return <h1>You are not online, please check your internet connection</h1>
  }

  const filterres=(res)=>{
    const data=res.filter((item)=>item.data.avgRating>4);
    console.log(data)
    setFilterRestaurant(data);
  }

  const searchRest=(res,text)=>{
    const data=res.filter((item)=>item.data?.name.toLowerCase().includes(text.toLowerCase()));
    console.log(data)
    setFilterRestaurant(data);
  }

return (filterRestaurant.length===0)?<ShimmerUI/>:(
    <div>
    <div className="border shadow-lg flex flex-col min-h-screen">
      <div className="flex justify-center">
        <div className="border rounded-lg bg-orange-200">
        <input type="text" onChange={(e)=>setSearchTxt(e.target.value)} className="shadow-lg border rounded-lg p-1 text-sm m-1" placeholder="search restaurant"/>
        <button className="px-2 py-1 m-1 rounded-lg bg-white" onClick={()=>{
          searchRest(restaurant,searchTxt);
        }}>Search</button></div>
        <div className="ml-2">
        <button className="px-2 py-2 m-1 rounded-lg bg-green-200" onClick={()=>{
          filterres(filterRestaurant);
        }}>Filter Top Rated Restaurant</button></div>
      </div>
      <div className="rescard-container flex flex-wrap">
        {
          filterRestaurant.map((item)=>{
            return(
              <Link to={"/restaurant/"+item.data.id} key={item.data.id}>
              <RestaurantCard {...item.data} />
              </Link>
            )
          })
        }
      </div>
    </div>
    </div>
 )
}
export default Body;


//<img class="_2tuBw _12_oN" alt="Jalandhar Sweets" width="254" height="160" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/gnfaeaeddfxdzrxzoikp"></img>