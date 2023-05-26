import { useEffect, useState } from "react";

const useRestaurantMenu=(id)=>{
    const [restaurant,setRestaurant]=useState();

    async function fetchResMenu(){
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7335152&lng=76.7826359&restaurantId="+id);
        const json=await data.json();
        console.log(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
        
        setRestaurant(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
       // setResMenu2(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories);
    }
    
    useEffect(()=>{
        fetchResMenu();
    },[])
    return restaurant;

}

export default useRestaurantMenu;