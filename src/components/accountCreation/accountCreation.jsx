import { Fragment, useContext } from 'react';
import Login from '../../UI/Login/login';
import SignUp from '../../UI/signup/signup';
import { SignUpContext, UserContext, NewUserContext } from '../../App';

const AccountCreation = () => {
    const [isOpened, setIsOpened] = useContext(UserContext);
    const [isSignUp, setIsSignUp] = useContext(SignUpContext);
    let component = null;
    let modal = null;

    if(!isSignUp){
        component = 
        <div id='modalBG'>
        <Login/>
        </div>                          
      } else {
        component = 
        <div id='modalBG'>
        <SignUp/>
        </div>
    }

    if(!isOpened){
        component = null;
    }

    return(
        <Fragment>
        {component}
        </Fragment>
    )
        
}

export default AccountCreation;