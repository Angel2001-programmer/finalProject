import { Link } from 'react-router-dom';
import { NewUserContext } from "../../App"
import { useContext } from 'react';


// set log out functionality here?
const DropDownMenu = props => {
  const [newUser, setNewUser] = useContext(NewUserContext);

    return(
        props.isPressed?
            <div className="dropDownMenuContainer">
              <div className="dropDownMenu">
              <Link className='link' to="/editAccount">
                <div className='dropMenuItem'>
                <p>EditAccount</p>
                </div></Link>
                <div className='dropMenuItem' onClick={() => {
                  setNewUser(false);
                  props.setIsPressed(false);
                  }}>
                <Link className='link' to="/finalProject"><p>Sign Out</p></Link>
                </div>
              </div>
            </div>
            : null
    )
}

export default DropDownMenu;