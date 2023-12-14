import styles from "./nav.module.css";
import Button from "../../UI/Button/button";
import profile from "../../assets/images/logos/user.png";
import profileDropArrow from "../../assets/images/profileArrow.svg";
import { Link } from "react-router-dom";
import { UserContext, NewUserContext, SignUpContext, MobileNavContext } from "../../App";
import { useContext, useState, useEffect } from "react";
import Menu from "../../assets/images/logos/menu.svg";
import { useAuth, logout } from "../../auth";




const LoggedInLinks = () => {
  return (
      <>
        <div className={styles.navItems}>
          <Link className={styles.link} to="/finalProject"><h3 className={styles.navItem}>Home</h3></Link>
          <Link className={styles.link} to="/recommendations"><h3 className={styles.navItem}>Recommendations</h3></Link>
          <Link className={styles.link} to="/forums"><h3 className={styles.navItem}>Forums</h3></Link>
          <Link className={styles.link} to="/editAccount"><h3 className={styles.navItem}>Profile</h3></Link>
          <Link className={styles.link} to="/about"><h3 className={styles.navItem}>About</h3></Link>
          {/* <Link className={styles.link} to="/finalProject"><h3 className={styles.navItem} onClick={logout()}>Sign Out</h3></Link> */}
          <a className={styles.link} href="/finalProject"><Button text="Sign out" onClick={logMeOut()}>Sign out</Button></a>
          <div className={styles.profileRow}>
            <div className={styles.profile}>
              <img className={styles.profilePicture} src={profile} alt="profile."/>
            </div>
          </div>
        </div>
        </>

  )
}

const LoggedOutLinks = () => {
  // can't redeclare the same useContext not sure what to do but I don't think mobile matters so much for our demo!
  // const [isMobileClicked, setIsMobileClicked] = useContext(MobileNavContext);
  const [isOpened, setIsOpened]  = useContext(UserContext);
  return (
    <>
          <div className={styles.navItems}>
          <Link className={styles.link} to="/finalProject"><h3 className={styles.navItem}>Home</h3></Link>
          <Link className={styles.link} to="/about"><h3 className={styles.navItem}>About</h3></Link>
          <Button 
          text="Log in or Sign up" 
          click={() => setIsOpened(true)}>Log in or sign up?
          </Button>
          </div>
        </>
  )
}

const NavBar = () => {
  useEffect(() => {
    // skip initial render
    return () => {
      // do something with dependency
    }
  }, [])

    const [logged]=useAuth();
    // const [isOpened, setIsOpened]  = useContext(UserContext);
    // const [newUser, setNewUser] = useContext(NewUserContext);
    // const [isSignUp, setIsSignUp] = useContext(SignUpContext);
    // const [isMobileClicked, setIsMobileClicked] = useContext(MobileNavContext);

    return(
        <nav className={styles.navbar}>
            <div className={styles.menu}>
            <Link className={styles.link} to="/finalProject"><h1>IntroVerse</h1></Link>
            {/* <img className={styles.MobileMenu} src={Menu} alt="dropDownMenu" onClick={() => setIsMobileClicked(!isMobileClicked)}/> */}
            </div>
            {logged ? <LoggedInLinks /> : <LoggedOutLinks />}
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


// With drop down menu
// const LoggedInLinks = props => {
//   return (
//       <>
//         <div className={styles.navItems}>
//           <Link className={styles.link} to="/finalProject"><h3 className={styles.navItem}>Home</h3></Link>
//           <Link className={styles.link} to="/recommendations"><h3 className={styles.navItem}>Recommendations</h3></Link>
//           <Link className={styles.link} to="/forums"><h3 className={styles.navItem}>Forums</h3></Link>
//           <Link className={styles.link} to="/about"><h3 className={styles.navItem}>About</h3></Link>
//           <div className={styles.profileRow}>
//             <div className={styles.profile}>
//               <img className={styles.profilePicture} src={profile} alt="profile."/>
//             </div>
//             <img 
//             className={styles.profilePicture} 
//             src={profileDropArrow} 
//             alt="drop arrow." 
//             onClick={() => props.onChangePressed(!props.isPressed)}/>
//           </div>
//         </div>
//         </>

//   )
// }