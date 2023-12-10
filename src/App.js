import './App.css';
import { Fragment, createContext, useState } from 'react';
import NavGraph from './navigation/NavGraph';
import Login from './UI/Login/login';
import SignUp from './UI/signup/signup';

export const UserContext = createContext();
export const SignUpContext = createContext();

function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  let modal = null;
  let component = null;
  console.log(isSignUp);

  if(!isSignUp){
    component = <SignUpContext.Provider value={[isSignUp, setIsSignUp]}>
    <UserContext.Provider value={[isOpened, setIsOpened]}>
    <div id='modalBG'>
    <Login/>
    </div>
    </UserContext.Provider>
    </SignUpContext.Provider>
  } else {
    component = 
    <SignUpContext.Provider value={[isSignUp, setIsSignUp]}>
    <UserContext.Provider value={[isOpened, setIsOpened]}>
    <div id='modalBG'>
    <SignUp/>
    </div>
    </UserContext.Provider>
    </SignUpContext.Provider>
  }

  if(!isOpened){
    modal = null;
  } else {
      modal = component;
  }

  return (   
      <Fragment>
            {modal}
            <UserContext.Provider value={[isOpened, setIsOpened]}>
            <NavGraph/>
            </UserContext.Provider>
      </Fragment>
  );
}

export default App;
