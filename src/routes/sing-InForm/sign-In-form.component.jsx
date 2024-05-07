import { useState } from "react"
import { createUserWithEmailAndPassword} from "firebase/auth"
import FormInput from "../../componenets/form-input/form-input"
import './sign-In.styles.scss'
import Button from "../../componenets/button/button.component"
import { createAuthUserWithEmailAndPassword ,createUserDocumentFromAuth ,signInWithGooglePopup,signInAuthWithEmailAndPassword} from "../../utils/firebase/firebase.utils"
const defaultFormFields ={
    email: '',
    password: '',

}
const SignInform=()=>{
    const [formFields, setFormFields]= useState(defaultFormFields)
    const { email, password}= formFields;
    const resetForm =()=>{
        setFormFields(defaultFormFields)
    }
    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
      };
        
    const handleSubmit=async (event) =>{
        event.preventDefault();
        try{
            const response =await signInAuthWithEmailAndPassword(email,password)
            resetForm();
        }
        catch(error){
            switch(error.code){
                case'auth/invalid-credential':
                    alert('incorrect password for email')
                break
                case 'auth/user-not-found':
                    alert('no user associated with this account')
                    break
            default:console.log(error)

            }
            // if (error.code === 'auth/wrong-passsword' ){
            //     alert('incorrect password for email')
            // }else if (e)

        }
    }
    const handleChange =(event)=>{
        const{name,value}=event.target;
        setFormFields({...formFields,[name]:value})
    }
    return(
        <div className='sign-up-container'>
            <h1>Already Have an Account?</h1>
            <form onSubmit={handleSubmit}>
                <FormInput  label='Email' type='email'required onChange={handleChange} name='email' value={email}/>
                <FormInput  label='Password' type='password' required onChange={handleChange} name='password' value={password}/>
                <div className="buttons-container">
                <Button type='submit'>Sign In</Button>
                <Button buttonType='google' type='button' onClick={signInWithGoogle}>Google Sign In</Button>

                </div>
                
            </form>

        </div>

    )

}
export default SignInform 