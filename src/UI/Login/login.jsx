import styles from "./login.module.css";
import Button from "../Button/button"
import UserInput from "../UserInput/userInput"
import Card from "../Card/card";
import { useContext, useState } from 'react'
import { UserContext, SignUpContext, NewUserContext } from "../../App";
import httpClient from "../../httpClient";

const initialValues = {
  username: "",
  password: ""
};

const Login = props => {
  const [isOpened, setIsOpened]  = useContext(UserContext);
  const [isSignModal, setIsSignModal] = useContext(SignUpContext);
  const [newUser, setNewUser] = useContext(NewUserContext);

  // This is just a test to see if login works with data.
  const [userData, setUserData] = useState(initialValues);
  const [errorMessage, setErrorMessage] = useState(null);
  let createAccount = null;
  
  //API here use either fetch or install Axios library.
  // Need new variables that are compatible with the JSON keys, trying this out
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  // Code needed to connect to the backend, just weave this in with your checks, change variables to however you have them called
  // const loginUser = (data) => {
  //   try {
  //     const requestOptions = {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json"
  //       },
  //       body: JSON.stringify(data)
  //     } 
      
  //     fetch("//localhost:5000/login", requestOptions)
  //     .then(res=>res.json())
  //     .then(data=>{
  //       console.log(data)
  //     })

  //     console.log(username, " has logged in")

  //   } catch (error) {
  //     if (error.response.status === 401) {
  //         alert("Invalid credentials");
  //     }
  //     else {
  //         alert("Error")
  //       }
  //     }
  // };

  // If this way works can swap back the old variables
  const loginUser = async () => {
    httpClient({
      method: "POST",
      url: "http://localhost:5000/login",
      data: {
        username: username,
        password: password
      }
    })
    .then((response) => {
      console.log(response)
      console.log(username, " has logged in")
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        if (error.response.status === 401) {
          alert("Invalid credentials");
        }
      }
    })

  };

  // const loginUser = async () => {
  //   try {
  //     const resp = await httpClient.post("//localhost:5000/login", {
  //       username,
  //       password,
  //     });

  //     console.log(username, " has logged in")

  //   } catch (error) {
  //     if (error.response.status === 401) {
  //         alert("Invalid credentials");
  //     }
  //     else {
  //         alert("Error")
  //       }
  //     }
  // };



  //Set new keystroke to UserData values.
  const handleValues = (e) => {
      setUserData({ ...userData, [e.target.name]: e.target.value});
  };

  const handleLogin = (e) => {
      //Prevents form from refreshing when Sign button is clicked.
      e.preventDefault();
      if(username.trim().length === 0 || password.trim().length === 0){
          setErrorMessage(<p className={styles.errorMessage}>Inputs cannot be empty</p>)
      } else {
          setErrorMessage("")
          // setIsOpened(false)
          // setNewUser(true)
          // setIsSignModal(false)
          loginUser()
          console.log('Login successful');
      }
  }

  //Check if Modal is opened.
  if(isOpened){
    createAccount = <div className={styles.login}>
        <form onSubmit={handleLogin}>
        <UserInput 
        isCloseIcon="X"
        isClose={() => setIsOpened(false)}
        title="Login" 
        for="userName" 
        type="text" 
        name="userName"
        value={username} 
        onValue={(e) => setUsername(e.target.value)}
        placeholder="UserName"
        labelName="UserName"
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
        {errorMessage}
        <div className={styles.bottomContainer}>

        <Button 
        type="submit" 
        text="Sign in" 
        UIcolor="linear-gradient(#D000AF, #9000A8)"
        borderColor="purple"
        dropShadow="#AD0B9A70 5px 5px 5px"
        paddingToRight="70px"
        paddingToLeft="70px"
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
        </form>
    </div>
  }
  return(
      <Card className={styles.modal}>
          {createAccount}
      </Card>        
  )
}

export default Login;