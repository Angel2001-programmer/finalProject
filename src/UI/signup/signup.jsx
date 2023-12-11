import styles from "./signup.module.css";
import Button from "../Button/button"
import UserInput from "../UserInput/userInput"
import Card from "../Card/card";
import { useState, useContext } from "react";
import { SignUpContext, UserContext, NewUserContext } from "../../App";

const SignUp = props => {
    const initialValues = {
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPSW: ""
    };

    let SignedUp = null;
    const [isSignUp, setIsSignUp] = useContext(SignUpContext);
    const [isOpened, setIsOpened] = useContext(UserContext);
    const [newUser, setNewUser] = useState(NewUserContext);
    const [count, setCount] = useState(5);
    const [newUserData, setNewUserData] = useState(initialValues);
    const [errorMessage, setErrorMessage] = useState("");

    const handleValues = (e) => {
        setNewUserData({ ...newUserData, [e.target.name]: e.target.value});
    };

    const handleForm = (e) => {
        e.preventDefault();
        
        if (newUserData.userName === ""  || 
            newUserData.firstName === "" || 
            newUserData.lastName === ""  || 
            newUserData.email === ""     || 
            newUserData.password === ""  || 
            newUserData.confirmPSW === "" 
            ){
            setErrorMessage("Inputs cannot be empty.");
        } else {
            setErrorMessage("");
        }

        if (newUserData.password !== newUserData.confirmPSW){
            setErrorMessage("Password does not match.");
        } else {
            setErrorMessage("");
            setIsSignUp(false);
            setNewUser(false);
            setIsOpened(false);
        }
    }

    if (!newUser){
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
        <form onSubmit={handleForm}>
        <UserInput 
        isCloseIcon="←"
        isClose={() => setIsSignUp(false)
        }
        className="userInput"
        title="Sign up" 
        for="userName" 
        type="text" 
        name="userName"
        value={newUserData.userName} 
        onValue={handleValues}
        placeholder="Username"
        labelName="Username"
        />

        <div className={styles.nameContainer}>
        <UserInput
        className={styles.UIName}
        title=""  
        for="firstName" 
        type="text" 
        name="firstName"
        value={newUserData.firstName} 
        onValue={handleValues}
        placeholder="First Name"
        labelName="First Name"
        />

        <UserInput 
        title="" 
        for="lastName" 
        type="text" 
        name="lastName"
        value={newUserData.lastName} 
        onValue={handleValues}
        placeholder="Last name"
        labelName="Last name"
        />
        </div>

        <UserInput 
        title="" 
        for="email" 
        type="email" 
        name="email"
        value={newUserData.email} 
        onValue={handleValues}
        placeholder="Email"
        labelName="Email"
        />

        <UserInput 
        title="" 
        for="password" 
        type="password" 
        name="password"
        value={newUserData.password} 
        onValue={handleValues}
        length="8"
        placeholder="Password"
        labelName="Password"
        />

        <UserInput 
        title="" 
        for="confirmPSW" 
        type="password" 
        name="confirmPSW"
        length="8"
        value={newUserData.confirmPSW} 
        onValue={handleValues}
        placeholder="Confirm Password"
        labelName="Confirm Password"
        />
        
        <div className={styles.bottomContainer}>
        <p className="errorMessage">{errorMessage}</p>
        <p>Password must be between 8 and 20 characters long and contain at least one special character * Required fields</p>
        <Button 
        type="submit" 
        text="Create an account" 
        UIcolor="linear-gradient(#D000AF, #9000A8)"
        borderColor="purple"
        dropShadow="#AD0B9A70 5px 5px 5px"
        />
        </div>
        </form>
        </Card>
    );
}

export default SignUp;