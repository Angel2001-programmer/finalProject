import styles from "./signup.module.css";
import Button from "../Button/button"
import UserInput from "../UserInput/userInput"
import Card from "../Card/card";
import { useState, useContext } from "react";
import { SignUpContext, UserContext } from "../../App";

const SignUp = props => {
    let SignedUp = null;
    const [isSignUp, setIsSignUp] = useContext(SignUpContext);
    const [isOpened, setIsOpened] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    const [count, setCount] = useState(5);
 
    if (newUser !== false){
        setTimeout(() => {
            if(count > 0){
                setCount(count - 1)
            } else {
                setIsSignUp(false);
                setIsOpened(false);
            }
        }, 1000);

        return (SignedUp = <Card>
            <div className={styles.container}>
            <h2 className={styles.accountCreation}>Account creation successful! Welcome to our community</h2>
            <h2 className={styles.bottomText}>This will disappear in {count}</h2>
            </div>
        </Card>
        )

    }

    return (
<Card>
        <UserInput 
        isCloseIcon="←"
        isClose={() => setIsSignUp(false)
        }
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
        className={styles.UIName}
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
        click={() => setNewUser(true)}
        />
        </div>
        </Card>
    );
}

export default SignUp;