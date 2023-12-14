import styles from "./signup.module.css";
import Button from "../Button/button"
import UserInput from "../UserInput/userInput"
import Card from "../Card/card";
import { useState, useContext } from "react";
import { SignUpContext, UserContext, NewUserContext } from "../../App";
import httpClient from "../../httpClient";

const SignUp = () => {
    const initialValues = {
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirmPSW: ""
    };


    let SignedUp = null;
    const [isSignUp, setIsSignUp] = useContext(SignUpContext);

    const [isSignModal, setIsSignModal] = useContext(SignUpContext);

    const [isOpened, setIsOpened] = useContext(UserContext);
    const [newUser, setNewUser] = useContext(NewUserContext);
    const [count, setCount] = useState(5);
    const [newUserData, setNewUserData] = useState(initialValues);
    const [errorMessage, setErrorMessage] = useState("");

    // Need new variables that are compatible with the JSON keys, trying this out
    const [username, setUsername] = useState("")
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPSW, setConfirmPSW] = useState("")

    // Code needed to connect to the backend, just weave this in with your checks, change variables to however you have them called
    const registerUser = async () => {
        try {
        const resp = await httpClient.post("//localhost:5000/register", {
            username,
            first_name,
            last_name,
            email,
            password,
        });

        console.log(username, email)
        console.log("it worked")

        } catch (error) {
        if (error.response.status === 401) {
            alert("Invalid credentials");
        }
        else {
            alert("Error")
          }
        }
    };


    const handleValues = (e) => {
        setNewUserData({ ...newUserData, [e.target.name]: e.target.value});
    };



    // Added in the error checks that were missing (VARCHAR 50 for each name, 30 for username, 254 for email, 8 for password if it isn't there?)
    // Might want to convert it to a switch case or rewrite it in a nicer JS looking way
    // Add check for number in password
    const handleForm = (e) => {
        e.preventDefault();
        
        if (username === "" || username.length === 0 &&
            first_name === "" || first_name.length === 0 &&
            last_name === "" || last_name.length === 0 &&
            email === "" || email.length === 0 &&
            password === "" || password.length === 0 &&
            confirmPSW === "" || confirmPSW.length === 0){
            setNewUser(false);
            return setErrorMessage("Inputs cannot be empty.");
        } else if (password !== confirmPSW){
            setErrorMessage("Password does not match.");
            setNewUser(false);
        } else if (username.length >= 30){
            setErrorMessage("Username must not be more than 30 characters.");
            setNewUser(false);
        } else if (first_name.length >= 50){
            setErrorMessage("First name must be no more than 50 characters.");
            setNewUser(false);
        } else if (last_name.length >= 50){
            setErrorMessage("Last name must be no more than 50 characters.");
            setNewUser(false);
        } else if (email.length >= 254){
            setErrorMessage("Email address is too long.");
            setNewUser(false);
        } else if (password.length >= 72 || password.length < 8){
            setErrorMessage("Password is too short or long.");  // Don't give details on max length
            setNewUser(false);
        } else {
            setErrorMessage("");
            setNewUser(true);
            registerUser();
        }
    }
    console.log(username.length);

    if (newUser === true){
        setTimeout(() => {
            if(count > 0){
                setCount(count - 1)
            } else {
                setIsSignModal(false);
                setIsOpened(false);
                console.log('Login successful')
            }
        }, 1000);

        return (
        <Card>
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
        isClose={() => setIsSignModal(false)
        }
        className="userInput"
        title="Sign up" 
        for="userName" 
        type="text" 
        name="userName"
        value={username} 
        onValue={(e) => setUsername(e.target.value)}
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
        value={first_name} 
        onValue={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
        labelName="First Name"
        />

        <UserInput 
        title="" 
        for="lastName" 
        type="text" 
        name="lastName"
        value={last_name} 
        onValue={(e) => setLastName(e.target.value)}
        placeholder="Last name"
        labelName="Last name"
        />
        </div>

        <UserInput 
        title="" 
        for="email" 
        type="email" 
        name="email"
        value={email} 
        onValue={(e) => setEmail(e.target.value)}
        placeholder="Email"
        labelName="Email"
        />

        <UserInput 
        title="" 
        for="password" 
        type="password" 
        name="password"
        value={password} 
        onValue={(e) => setPassword(e.target.value)}
        placeholder="Password"
        labelName="Password"
        />

        <UserInput 
        title="" 
        for="confirmPSW" 
        type="password" 
        name="confirmPSW"
        value={confirmPSW} 
        onValue={(e) => setConfirmPSW(e.target.value)}
        placeholder="Confirm Password"
        labelName="Confirm Password"
        />
        
        <div className={styles.bottomContainer}>
        <p className="errorMessage">{errorMessage}</p>
        <p>Password must be 8 or more characters long and contain at least one number</p>
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