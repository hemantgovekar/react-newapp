import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>I am the Sign Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Pop up</button>
    </div>
  );
};

export default SignIn;
