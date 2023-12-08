import styles from "./signup.module.css";
import Button from "../Button/button"
import UserInput from "../UserInput/userInput"
import Card from "../Card/card";
import { useState } from "react";
import { redirect } from "react-router-dom";

const SignUp = props => {
    let SignedUp = null;
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [count, setCount] = useState(1);
 
    if (isSignedUp !== false){
        setTimeout(() => {
            if(count < 5){
                setCount(count + 1)
            } else {
                window.location.reload();
            }
        }, 1000);

        SignedUp = <Card>
            <div className={styles.container}>
            <h2 className={styles.accountCreation}>Account creation successful! Welcome to our community</h2>
            <h2 className={styles.bottomText}>This will disappear in {count}</h2>
            </div>
        </Card>
    } else {
        SignedUp = <Card>
        <UserInput 
        isCloseIcon="←"
        isClose={() => props.pressed(false)}
        className="userInput"
        title="Sign up" 
        for="username" 
        type="text" 
        value="" 
        placeholder="Username"
        labelName="Username"
        />

        <div className={styles.nameContainer}>
        <UserInput
        title=""  
        for="name" 
        type="text" 
        value="" 
        placeholder="First Name"
        labelName="First Name"
        />

        <UserInput 
        title="" 
        for="lastname" 
        type="text" 
        value="" 
        placeholder="Last name"
        labelName="Last name"
        />
        </div>

        <UserInput 
        title="" 
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

        <UserInput 
        title="" 
        for="confirmpassword" 
        type="password" 
        value="" 
        placeholder="Confirm Password"
        labelName="Confirm Password"
        />
        
        <div className={styles.bottomContainer}>
        <p>Password must be between 8 and 20 characters long and contain at least one special character * Required fields</p>
        <Button type="submit" 
        text="Create an account" 
        UIcolor="linear-gradient(#D000AF, #9000A8)"
        borderColor="purple"
        dropShadow="#AD0B9A70 5px 5px 5px"
        click={() => setIsSignedUp(true)}
        />
        </div>
        </Card>
    }

    return (<div>{SignedUp}</div>)
}

export default SignUp;