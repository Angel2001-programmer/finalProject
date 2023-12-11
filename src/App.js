import './App.css';
import { Fragment, createContext, useState } from 'react';
import NavGraph from './navigation/NavGraph';
import Login from './UI/Login/login';
import SignUp from './UI/signup/signup';

export const UserContext = createContext();
export const SignUpContext = createContext();
export const NewUserContext = createContext();

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [newUser, setNewUser] = useState(false);

  let modal = null;
  let component = null;
  console.log(isSignUp);

  if(!isSignUp){
    component = 
    <NewUserContext.Provider value={[newUser, setNewUser]}>
    <SignUpContext.Provider value={[isSignUp, setIsSignUp]}>
    <UserContext.Provider value={[isOpened, setIsOpened]}>
    <div id='modalBG'>
    <Login/>
    </div>
    </UserContext.Provider>
    </SignUpContext.Provider>
    </NewUserContext.Provider>                            
  } else {
    component = 
    <NewUserContext.Provider value={[newUser, setNewUser]}>
    <SignUpContext.Provider value={[isSignUp, setIsSignUp]}>
    <UserContext.Provider value={[isOpened, setIsOpened]}>
    <div id='modalBG'>
    <SignUp/>
    </div>
    </UserContext.Provider>
    </SignUpContext.Provider>
    </NewUserContext.Provider>
  }

  if(!isOpened){
    modal = null;
  } else {
      modal = component;
  }

  return (   
      <Fragment>
            {modal}
            <NewUserContext.Provider value={[newUser, setNewUser]}>
            <UserContext.Provider value={[isOpened, setIsOpened]}>
            <NavGraph/>
            </UserContext.Provider>
            </NewUserContext.Provider>
      </Fragment>
  );
}

export default App;
