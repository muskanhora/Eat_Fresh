import { createContext } from "react";

const userContext=createContext({
    user:{
        name:"Muskan",
        email:"muskan29hora@gmail.com"
    }
})

export default userContext;