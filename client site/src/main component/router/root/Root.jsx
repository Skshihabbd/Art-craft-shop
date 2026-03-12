import { Outlet, useNavigation } from "react-router-dom";
import GlobalLoader from "../../GlobalLoader";
import { useContext } from "react";
import { LoadingContext } from "../../Auth provider/LoadingProvider";
import { useEffect } from "react";


const Root = () => {

    const { loading } = useContext(LoadingContext);
const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  
 useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (!loading && preloader) {
      preloader.style.display = "none"; // loading শেষ হলে hide
    }
  }, [loading]);
  if (isLoading) {
    return <GlobalLoader />;
  }

  return (
    <div>
      
       <Outlet />
    </div>
  );
};

export default Root;
