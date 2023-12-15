import { Link } from 'react-router-dom';
import { NewUserContext } from "../../components/FinalProject/FinalProject"
import { useContext } from 'react';

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
                <p>Sign Out</p>
                </div>
              </div>
            </div>
            : null
    )
}

export default DropDownMenu;