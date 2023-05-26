const ShimmerUI=()=>{
    return(
        <>
        <div className="bg-yellow-200 p-2 w-108 h-10 text-black text-center font-bold">Looking for best Restauarant near you</div>
        <div className="flex flex-wrap">
        {
            Array(15).fill("").map((index)=><div className="bg-orange-200 rounded-lg m-2 w-60 h-36"></div>)
        }
        </div>
        </>
    )
}
export default ShimmerUI;