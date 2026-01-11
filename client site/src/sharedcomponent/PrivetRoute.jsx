import { Navigate, useLocation } from "react-router-dom";
import Custom from "./custom/Custom";


const PrivetRoute = ({children}) => {

    const { users, loader } = Custom()
    const location =useLocation()
    console.log(location)
  
    if (loader) {
      return (
        <div className="h-svh flex bg-black items-center w-full">
          <div className="w-16 h-16  border-4 mx-auto  border-dashed rounded-full animate-spin dark:border-violet-600"></div>
        </div>
        
      );
    }
    if (users?.email) {
      return children;
    }
    return <Navigate state={location.pathname}  to={"/signin"} replace></Navigate>;
};

export default PrivetRoute;