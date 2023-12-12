import styles from "./login.module.css";
import Button from "../Button/button"
import UserInput from "../UserInput/userInput"
import Card from "../Card/card";
import { useContext, useState } from 'react'
import { UserContext, SignUpContext, NewUserContext } from "../../App";
import axios from "axios";

const Login = props => {
    const [isOpened, setIsOpened]  = useContext(UserContext);
    const [isSignModal, setIsSignModal] = useContext(SignUpContext);
    const [newUser, setNewUser] = useContext(NewUserContext);
    const initialValues = {
        userName: "",
        password: ""
    };

    // Code needed to connect to the backend, just weave this in with your checks, change variables to however you have them called
    const loginUser = async () => {
        console.log(username, password);  // remove from final code
    
        try {
          const resp = await axios.post("//localhost:5000/login", {
            username,
            password,
          });
    
        //   window.location.href = "/";
    
    
        } catch (error) {
          if (error.response.status === 401) {
            alert("Invalid credentials");
          }
        }
      };

    // This is just a test to see if login works with data.
    const [userData, setUserData] = useState(initialValues);
    const [errorMessage, setErrorMessage] = useState(null);
    let createAccount = null;
    //API here use either fetch or install Axios library.
    
    const handleValues = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value});
    };

    if(isOpened){
        createAccount = <div className={styles.login}>
            <UserInput 
            isCloseIcon="X"
            isClose={() => setIsOpened(false)}
            title="Login" 
            for="userName" 
            type="text" 
            name="userName"
            value={userData.userName} 
            onValue={handleValues}
            placeholder="UserName"
            labelName="UserName"
            />

            <UserInput 
            title="" 
            for="password" 
            type="password" 
            name="password"
            value={userData.password} 
            onValue={handleValues}
            placeholder="Password"
            labelName="Password"
            />
            {errorMessage}
            <div className={styles.bottomContainer}>
            <Button type="submit" 
            text="Sign in" 
            UIcolor="linear-gradient(#D000AF, #9000A8)"
            borderColor="purple"
            dropShadow="#AD0B9A70 5px 5px 5px"
            paddingToRight="70px"
            paddingToLeft="70px"
            click={() => {
                if(userData.userName.trim().length === 0 || userData.password.trim().length === 0){
                    setErrorMessage(<p className={styles.errorMessage}>Inputs cannot be empty</p>)
                } else {
                    setIsOpened(false)
                    setNewUser(true)
                    setIsSignModal(false)
                    console.log('Login successful')
                }
            }}
            />
            <div className={styles.noAccount}>
            <h2 className={styles.signUp}>Don't have an account</h2>
            <h2 className={styles.signUpLink} 
            onClick={() => {
                setIsSignModal(true)
            }
            }
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