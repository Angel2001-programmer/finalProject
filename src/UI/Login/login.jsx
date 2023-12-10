import styles from "./login.module.css";
import Button from "../Button/button"
import UserInput from "../UserInput/userInput"
import Card from "../Card/card";
import Signup from "../signup/signup"
import { useContext, useState, createContext } from 'react'
import { UserContext, SignUpContext } from "../../App";

// export const SignUpContext = createContext();

const Login = props => {
    const [isOpened, setIsOpened]  = useContext(UserContext);
    const [isSignUp, setIsSignUp] = useContext(SignUpContext);
    const [isClosed, setIsClosed] = useState(false);
    let createAccount = null;

    if(isOpened){
        createAccount = <div className={styles.login}>
            <UserInput 
            isCloseIcon="X"
            isClose={() => setIsOpened(false)}
            title="Login" 
            for="email" 
            type="text" 
            // value="" 
            placeholder="Email"
            labelName="Email"
            />

            <UserInput 
            title="" 
            for="password" 
            type="password" 
            // value="" 
            placeholder="Password"
            labelName="Password"
            />

            <div className={styles.bottomContainer}>
            <Button type="submit" 
            text="Sign in" 
            UIcolor="linear-gradient(#D000AF, #9000A8)"
            borderColor="purple"
            dropShadow="#AD0B9A70 5px 5px 5px"
            paddingToRight="70px"
            paddingToLeft="70px"
            click={() => setIsOpened(false)}
            />
            <div className={styles.noAccount}>
            <h2 className={styles.signUp}>Don't have an account</h2>
            <h2 className={styles.signUpLink} 
            onClick={() => setIsSignUp(true)}
            >Sign up</h2>
            </div>
            </div>
        </div>
    }
    return(
            <Card className={styles.modal}>
            {createAccount}
        </Card>        
    )
}

export default Login