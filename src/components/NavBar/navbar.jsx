import styles from "./nav.module.css";
import Button from "../../UI/Button/button";
import profile from "../../assets/images/logos/user.png";
import profileDropArrow from "../../assets/images/profileArrow.svg";
import { Link } from "react-router-dom";
import { UserContext, NewUserContext, SignUpContext, MobileNavContext } from "../../components/FinalProject/FinalProject";
import { useContext, useState } from "react";
import Menu from "../../assets/images/logos/menu.svg";

const NavBar = props => {
    const [isOpened, setIsOpened]  = useContext(UserContext);
    const [newUser, setNewUser] = useContext(NewUserContext);
    const [isSignUp, setIsSignUp] = useContext(SignUpContext);
    const [isMobileClicked, setIsMobileClicked] = useContext(MobileNavContext);

    return(
        <nav className={styles.navbar}>
            <div className={styles.menu}>
            <Link className={styles.link} to="/finalProject"><h1>IntroVerse</h1></Link>
            <img className={styles.MobileMenu} src={Menu} alt="dropDownMenu" onClick={() => setIsMobileClicked(!isMobileClicked)}/>
            </div>
            {newUser ?
            <div className={styles.navItems}>
                <Link className={styles.link} to="/finalProject"><h3 className={styles.navItem}>Home</h3></Link>
                <Link className={styles.link} to="/about"><h3 className={styles.navItem}>About</h3></Link>
                <Link className={styles.link} to="/forums"><h3 className={styles.navItem}>Forums</h3></Link>

            <div className={styles.profileRow}>
            <div className={styles.profile}>
                <img className={styles.profilePicture} src={profile} alt="profile."/>
            </div>
            <img 
            className={styles.profilePicture} 
            src={profileDropArrow} 
            alt="drop arrow." 
            onClick={() => props.onChangePressed(!props.isPressed)}/>
            </div>
            </div>
            :
            <div className={styles.navItems}>
                <Link className={styles.link} to="/finalProject"><h3 className={styles.navItem}>Home</h3></Link>
                <Link className={styles.link} to="/about"><h3 className={styles.navItem}>About</h3></Link>
            <Button 
            text="Log in or Sign up" 
            click={() => setIsOpened(true)}>Log in or sign up?
            </Button>
            </div>
        }
        </nav>
    )
}

export default NavBar;
/* 

     /* <Link className={styles.link} to="/finalProject"><h1 className={styles.navHeadingTitles}>IntroVerse</h1></Link> */
            /* {
                // isSignedin 
                ?
               <div className={styles.navItems}>
                <Link className={styles.link} to="/finalProject"><h3 className={styles.navItem}>Home</h3></Link>
                <Link className={styles.link} to="/about"><h3 className={styles.navItem}>About</h3></Link>
                <Link className={styles.link} to="/forums"><h3 className={styles.navItem}>Forums</h3></Link>
               </div>       
            :
            <div className={styles.navItems}>
                <Link className={styles.link} to="/finalProject"><h3 className={styles.navItem}>Home</h3></Link>
                <Link className={styles.link} to="/about"><h3 className={styles.navItem}>About</h3></Link>
            </div>
            
            } */