import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSocialLogin = (media) => {
    media()
      .then(() => {
        toast.success("sign in successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="divider">continue with</div>
      <div className=" flex justify-around">
        <button
          className="btn bg-gray-600 text-white"
          onClick={() => handleSocialLogin(googleLogin)}
        >
          Google
        </button>
        <button
          className="btn bg-gray-600 text-white"
          onClick={() => handleSocialLogin(githubLogin)}
        >
          Github
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
