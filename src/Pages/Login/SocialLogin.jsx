import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);

  const handleSocialLogin = (media) => {
    media()
      .then((result) => {
        console.log("logged in");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="divider">continue with</div>
      <div className="">
        <button
          className="btn bg-gray-600 text-white"
          onClick={() => handleSocialLogin(googleLogin)}
        >
          Google
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
