const About=()=>{

let arr=[1,2,[3,4],5]

function printval(arr){
    arr.forEach(element => {
        if(Array.isArray(element)){
            printval(element);
        }else{
            console.log(element)
        }
    });
}
printval(arr);

return(
    <>
    <div className="flex flex-col min-h-screen">
        This is our About section
        To register a complaint please mail us at support@yourplace.com
    </div>
    </>
)
}
export default About;