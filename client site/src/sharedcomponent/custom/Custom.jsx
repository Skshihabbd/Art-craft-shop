import { useContext } from "react";
import { authContext } from "../../main component/Auth provider/AuthProvider";

const Custom = () => {
    const context=useContext(authContext)
    return context ;
       
    
};

export default Custom;