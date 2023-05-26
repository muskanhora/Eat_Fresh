const FoodCart=({name,price})=>{
return(
    <div className="flex justify-between m-2 p-2 bg-green-100">
    <h2> {name}</h2>
    <h3> Rs.{price/100}</h3>
    </div>
)
} 

export default FoodCart;