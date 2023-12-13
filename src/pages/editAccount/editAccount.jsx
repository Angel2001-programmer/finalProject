import { Fragment, useState, React } from 'react'
import styles from "./editAccount.module.css";
import NavBar from "../../components/NavBar/navbar";
import profile from "../../assets/images/logos/user.png";
import editProfile from "../../assets/images/editProfile.svg";
import DropDownMenu from '../../components/DropDownMenu/dropDownMenu';
const EditAccount = props => {  
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Fragment>
    <NavBar isPressed={isPressed} onChangePressed={setIsPressed}/>
    <DropDownMenu isPressed={isPressed} setIsPressed={setIsPressed}/>
  <main className={styles.main}>
    <div className={styles.cover}>
        <div className={styles.profile}>
        <img className={styles.profilePicture} src={profile} alt="profile."/>
        <h4 className={styles.profileName}>USERNAME</h4>
        </div>
        {/* <div className={styles.postsContainer}> */}
        {/* <h2>Posts</h2>
          <div className={styles.smallerProfile}>
          <div className={styles.profileRow}>
          </div>
          </div>
          <p>Any got a Spare Iphone charger I can have until the weekend?</p>
          <p>5</p>
        </div> */}
        <div className={styles.titleContainer}>
        <h2>About Your Account</h2>
        </div>
        <form className={styles.EditAccountform}>
          <div className={styles.accountSettings}>
          <div className={styles.row}>
          <label>FirstName:</label>
          <input className={styles.editInput} type='text' name='text' placeholder='Angel' readOnly="readonly"/>
          <img className={styles.imageButton} src={editProfile} alt='edit Password.'></img>
          </div>
          <div className={styles.row}>
           <label>LastName:</label>
           <input className={styles.editInput} type='text' name='text' placeholder='sdgsgjkshjfkshjfkash' readOnly="readonly"/> 
           <img className={styles.imageButton} src={editProfile} alt='edit Password.'></img>
          </div>

          <div className={styles.row}>
           <label>UserName:</label>
           <input className={styles.editInput} type='text' name='text'  placeholder='BlaxeXD' readOnly="readonly"/> 
           <img className={styles.imageButton} src={editProfile} alt='edit Password.'></img>
          </div>
          <div className={styles.row}>
           <label>Email:</label>
           <input className={styles.editInput} type='email' name='text' placeholder='angelhhhhh3000@yahoo.com' readOnly="readonly"/>
           <img className={styles.imageButton} src={editProfile} alt='edit Password.'></img>
           </div>

           <div className={styles.row}>
           <label>Password:</label>
           <input className={styles.editInput} type='password' name='password' placeholder='currentPassword' readOnly="readonly"/>
           <img className={styles.imageButton} src={editProfile} alt='edit Password.'></img>
           </div>
           </div>
          </form>
        </div>        
  </main>

    </Fragment>
  )
}

export default EditAccount;