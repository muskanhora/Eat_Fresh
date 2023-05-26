import { useDispatch , useSelector } from "react-redux";
import cartSlice, { addItem } from "./cartSlice";
import FoodCart from "./FoodCart";
import { clearCart } from "./cartSlice";

const Cart=()=>{
   const dispatch=useDispatch();
   const cartItems=useSelector(store=>store.cart.items);
 // console.log(cartItems)
  
   const removeFoodItems=()=>{
       dispatch(clearCart())
   }

    const data= cartItems.map((item)=>item.price/100);
    let Total=data.reduce((acc,curr)=>(acc=acc+curr),0);
    console.log(Total);
    
    // let sum=0;
    // function calc(sum,price){
    //     sum=sum+price;
    //     return sum;
    // }
    // const calc2= data.reduce(calc,0);
   // console.log(data) 
   // console.log(calc2)

    return(
        <div className="flex flex-col min-h-screen">
        <button className="p-2 m-2 bg-yellow-200 w-24" onClick={()=>removeFoodItems()}> Clear Cart </button>

       <div className="p-2 m-2">
        {
            cartItems.map((item)=>(
                <FoodCart key={item.id} {...item}/>
            ))
        }
       </div>
       <div className="bg-orange-200 font-semibold text-right px-8">
        Total Amount - Rs.{Total}
       </div>
       <div>
       </div>
       {/* <div className="m-2 p-2">your cart contains {cartItems.length} items </div> */}
             </div>
    )
}
export default Cart;
