import { useRouteError } from "react-router-dom";

const ErrorElement=()=>{
    const msg=useRouteError();
    return(
        <>
        <h2 className="p-2 m-2">OOPs There was an error finding this element</h2>
        <h3 className="p-2 m-2">{msg.status}-{msg.statusText}</h3>
        </>
    )
}
export default ErrorElement;