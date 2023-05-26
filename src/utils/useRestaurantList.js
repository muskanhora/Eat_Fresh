import { useEffect, useState } from "react";

const useRestaurantList=()=>{
   const [restaurant,setRestaurant] =useState([]);
   const [filterRestaurant,setFilterRestaurant] =useState([]);

   async function fetchRestaurantList(){
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7335152&lng=76.7826359&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
   // console.log(json.data.cards[2].data.data.cards);
    setRestaurant(json.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurant(json.data?.cards[2]?.data?.data?.cards);
   }

   useEffect(()=>{
     fetchRestaurantList();
   },[])
   return [restaurant,filterRestaurant,setFilterRestaurant];
}
export default useRestaurantList;