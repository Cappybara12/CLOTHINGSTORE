import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth, signInWithGoogleRedirect
} from '../../utils/firebase/firebase.utils';
import SignUpform from '../sing-upForm/sign-up-form.component';
//here we did a async operation to ask the remounts that occur to get the Reidrect result so that in our console we don't lose that data 
// and that data to determine whether redirect happended is done by auth
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpform></SignUpform>
    </div>
  );
};

export default SignIn;