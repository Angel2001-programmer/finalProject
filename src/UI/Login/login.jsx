import styles from "./login.module.css";
import Button from "../Button/button"
import UserInput from "../UserInput/userInput"
import Card from "../Card/card";
import Signup from "../signup/signup"
import { useState } from 'react'
const Login = props => {
    const [isPressed, setIsPressed] = useState(false);
    let createAccount = null;

    if(isPressed !== true){
        createAccount = <div className={styles.login}>
            <UserInput 
            isCloseIcon="X"
            isClose={() => setIsPressed(props.setPressed(false))}
            title="Login" 
            for="email" 
            type="text" 
            value="" 
            placeholder="Email"
            labelName="Email"
            />

            <UserInput 
            title="" 
            for="password" 
            type="password" 
            value="" 
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
            click={() => setIsPressed(props.setPressed(false))}
            />
            <div className={styles.noAccount}>
            <h2 className={styles.signUp}>Don't have an account</h2>
            <h2 className={styles.signUpLink} onClick={() => setIsPressed(true)}>Sign up</h2>
            </div>
            </div>
        
        </div>
    } else {
        createAccount = <Signup pressed={setIsPressed}/>
    }
    return(
            <Card className={styles.modal}>
            {createAccount}
        </Card>        
    )
}

export default Login