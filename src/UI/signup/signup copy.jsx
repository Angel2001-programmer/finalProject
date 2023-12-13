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

    // const initialValues = {
    //     userName: "",
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     password: "",
    //     confirmPSW: ""
    // };


    let SignedUp = null;
    const [isSignUp, setIsSignUp] = useContext(SignUpContext);

    const [isSignModal, setIsSignModal] = useContext(SignUpContext);

    const [isOpened, setIsOpened] = useContext(UserContext);
    const [newUser, setNewUser] = useContext(NewUserContext);
    const [count, setCount] = useState(5);
    const [newUserData, setNewUserData] = useState(initialValues);
    const [errorMessage, setErrorMessage] = useState("");

    // Code needed to connect to the backend, just weave this in with your checks, change variables to however you have them called
    const registerUser = async () => {
        try {
        const resp = await httpClient.post("//localhost:5000/register", {
            auth: {
                username,
                first_name,
                last_name,
                email,
                password,
            }
        });

        // window.location.href = "/";

        } catch (error) {
        if (error.response.status === 401) {
            alert("Invalid credentials");
        }
        }
    };

    // const registerUser = async () => {
    //     try {
    //     const resp = await httpClient.post("//localhost:5000/register", {
    //         auth: {
    //             username: newUserData.userName,
    //             first_name: newUserData.firstName,
    //             last_name: newUserData.lastName,
    //             email: newUserData.email,
    //             password: newUserData.password
    //         }
    //     });

    //     // window.location.href = "/";

    //     } catch (error) {
    //     if (error.response.status === 401) {
    //         alert("Invalid credentials");
    //     }
    //     }
    // };

    const handleValues = (e) => {
        setNewUserData({ ...newUserData, [e.target.name]: e.target.value});
    };

    const handleForm = (e) => {
        e.preventDefault();
        
        if (newUserData.userName === "" || newUserData.userName.length === 0 &&
            newUserData.firstName === "" || newUserData.firstName.length === 0 &&
            newUserData.lastName === "" || newUserData.lastName.length === 0 &&
            newUserData.email === "" || newUserData.email.length === 0 &&
            newUserData.password === "" || newUserData.password.length === 0 &&
            newUserData.confirmPSW === "" || newUserData.confirmPSW.length === 0){
            setNewUser(false);
            return setErrorMessage("Inputs cannot be empty.");
        } else if (newUserData.password !== newUserData.confirmPSW){
            setErrorMessage("Password does not match.");
            setNewUser(false);
        } else if (newUserData.userName.length >= 72){
            setErrorMessage("Username must not be more than 72 characters.");
            setNewUser(false);
        } else {
            setErrorMessage("");
            setNewUser(true);
        }
    }
    console.log(newUserData.userName.length);

    if (newUser === true){
        setTimeout(() => {
            if(count > 0){
                setCount(count - 1)
            } else {
                setIsSignModal(false);
                setIsOpened(false);
                console.log('Login successful')
                registerUser();
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

    // Comments for below
    // - we don't need to specify max password length anymore (best not say what our max is in case they guess the hashing mechanism) just don't let user enter more than 72 chars

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