import './App.css';
import { Fragment, createContext, useState } from 'react';
import NavGraph from './navigation/NavGraph';
import AccountCreation from './components/accountCreation/accountCreation';

export const UserContext = createContext();
export const SignUpContext = createContext();
export const NewUserContext = createContext();
export const MobileNavContext = createContext();
export const StyleMobileNavContext = createContext();


function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isSignModal, setIsSignModal] = useState(false);
  const [newUser, setNewUser] = useState(true);
  const [isMobileClicked, setIsMobileClicked] = useState(false);
  let style2 = null
  console.log(isMobileClicked)

  return (   
      <Fragment>
      <StyleMobileNavContext.Provider value={style2}>
      <MobileNavContext.Provider value={[isMobileClicked, setIsMobileClicked]}>
      <NewUserContext.Provider value={[newUser, setNewUser]}>
      <SignUpContext.Provider value={[isSignModal, setIsSignModal]}>
      <UserContext.Provider value={[isOpened, setIsOpened]}>
        <AccountCreation/>
        <NavGraph/>
      </UserContext.Provider>
      </SignUpContext.Provider>
      </NewUserContext.Provider>
      </MobileNavContext.Provider>
      </StyleMobileNavContext.Provider>
      </Fragment>
  );
}

export default App;
