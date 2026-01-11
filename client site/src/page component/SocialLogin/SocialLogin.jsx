import { useLocation, useNavigate } from "react-router-dom";
import Custom from "../../sharedcomponent/custom/Custom";

const SocialLogin = () => {
    const { googleSignIn, githubSignIn } =Custom();
  const location = useLocation();
  const navigation = useNavigate();
  console.log(location);
  console.log(navigation);
  const handleSocialLogin = (sociallogin) => {
    sociallogin().then((result) => {
      console.log(result.user);
      if (result.user) {
        navigation(location?.state ? location.state : "/");
      }
    });
  };
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="w-full relative">
        <button
        onClick={() => handleSocialLogin(googleSignIn)}
        className="btn btn-outline btn-primary w-full  !text-white"
      >
        Google
      </button>
      <img className="w-7 absolute bottom-2 left-32" src="asset/image/google-logo.png" alt="" />
      </div>
      <div className="w-full relative">
        <button
        onClick={() => handleSocialLogin(githubSignIn)}
        className="btn btn-outline btn-primary w-full !text-white"
      >
        Github
      </button>
       <img className="w-7 absolute bottom-3 left-32 " src="asset/image/github.png" alt="" />
      </div>
    </div>
  );
};

export default SocialLogin;