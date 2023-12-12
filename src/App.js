import './App.css';
import { Fragment, createContext, useState } from 'react';
import NavGraph from './navigation/NavGraph';
import Login from './UI/Login/login';
import SignUp from './UI/signup/signup';
import AccountCreation from './components/accountCreation/accountCreation';

export const UserContext = createContext();
export const SignUpContext = createContext();
export const NewUserContext = createContext();

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [newUser, setNewUser] = useState(false);

  return (   
      <Fragment>
      <NewUserContext.Provider value={[newUser, setNewUser]}>
      <SignUpContext.Provider value={[isSignUp, setIsSignUp]}>
      <UserContext.Provider value={[isOpened, setIsOpened]}>
        <AccountCreation/>
        <NavGraph/>
      </UserContext.Provider>
      </SignUpContext.Provider>
      </NewUserContext.Provider>
      </Fragment>
  );
}

export default App;
