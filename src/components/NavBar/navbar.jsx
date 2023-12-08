import styles from "./nav.module.css";
import Button from "../../UI/Button/button";
import { useState } from "react";
import profile from "../../assets/images/user.png";
import profileDropArrow from "../../assets/images/profileArrow.svg";
import { Link } from "react-router-dom";

const NavBar = props => {
    let isSignedin = false;
    const [isPressed, setIsPressed] = useState(false);
    
    return(
        <nav className={styles.navbar}>
            <Link className={styles.link} to="/finalProject"><h1 className={styles.navHeadingTitles}>IntroVerse</h1></Link>
            {isSignedin ?
               <div className={styles.navItems}>
                <Link className={styles.link} to="/finalProject"><h3 className={styles.navItem}>Home</h3></Link>
                <Link className={styles.link} to="/about"><h3 className={styles.navItem}>About</h3></Link>
                <Link className={styles.link} to="/finalProject"><h3 className={styles.navItem}>Home</h3></Link>
                <Link className={styles.link} to="/about"><h3 className={styles.navItem}>About</h3></Link>
               </div>       
            :
            <div className={styles.navItems}>
                <Link className={styles.link} to="/finalProject"><h3 className={styles.navItem}>Home</h3></Link>
                <Link className={styles.link} to="/about"><h3 className={styles.navItem}>About</h3></Link>
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