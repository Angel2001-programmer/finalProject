import styles from "./nav.module.css";
import Button from "../../UI/Button/button";
import { useState } from "react";
import profile from "../../assets/images/user.png";
import profileDropArrow from "../../assets/images/profileArrow.svg";

const NavBar = props => {
    let isSignedin = false;
    const [isPressed, setIsPressed] = useState(false);
    
    return(
        <nav className={styles.navbar}>
            <h1 className={styles.navHeadingTitles}>IntroVerse</h1>
            {isSignedin ?
               <div className={styles.navItems}>
               <h3 className={styles.navItem}>Home</h3>
               <h3 className={styles.navItem}>About</h3>
               <h3 className={styles.navItem}>Home</h3>
               <h3 className={styles.navItem}>About</h3>
               </div>       
            :
            <div className={styles.navItems}>
            <h3 className={styles.navItem}>Home</h3>
            <h3 className={styles.navItem}>About</h3>
            </div>
            
            }
            {isSignedin ?
            <div className={styles.profileRow}>
            <div className={styles.profile}>
                <img className={styles.profilePicture} src={profile} alt="profile."/>
            </div>
            <img 
            className={styles.profilePicture} 
            src={profileDropArrow} 
            alt="drop arrow." 
            onClick={() => props.onEditProfile(!props.isEditProfile)}/>
            </div>
            :
            <Button 
            text="Log in or Sign up" 
            click={() => setIsPressed(true)}>Log in or sign up?
            </Button>
            }
        </nav>
    )
}

export default NavBar;