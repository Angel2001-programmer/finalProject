import { Link } from 'react-router-dom';

const DropDownMenu = props => {
    return(
        props.isPressed?
            <div className="dropDownMenuContainer">
              <div className="dropDownMenu">
              <Link className='link' to="/editAccount">
                <div className='dropMenuItem'>
                <p>EditAccount</p>
                </div>
                <div className='dropMenuItem'>
                <p>Sign Out</p>
                </div>
              </Link>
              </div>
            </div>
            : null
    )
}

export default DropDownMenu;