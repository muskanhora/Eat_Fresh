import userContext from "../utils/context";
import { useContext } from "react";

const Contact=()=>{
    const {user}=useContext(userContext);
    return(
        <div className="flex flex-col min-h-screen">
        <h2>{user.name} - {user.email}</h2>
        <h2>This is my Contact Page</h2>
        </div>
    )
}
export default Contact;