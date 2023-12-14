import styles from "./MobileNav.module.css";
import { Link } from "react-router-dom";
import { NewUserContext, MobileNavContext, StyleMobileNavContext } from "../../App";
import { useContext, useState } from "react";

const MobileNav = () => {
    const [newUser, setNewUser] = useContext(NewUserContext);
    const [isMobileClicked, setIsMobileClicked] = useContext(MobileNavContext);
    let style2 = StyleMobileNavContext;

    if (!isMobileClicked){
        style2 = {display: 'none'};
    } else {
        style2 = {display: 'block'};
    }

    return(
        <div className={styles.MobileNav} style={style2}>
        {newUser ?
        <div className={styles.navItemsMobile}>
          <div className={styles.navItemMobile}>
          <Link className={styles.navLink} to={"/finalProject"} onClick={() => setIsMobileClicked(false)}>Home</Link>
          </div>
          <div className={styles.navItemMobile}>
          <Link className={styles.navLink} to="/about" onClick={() => setIsMobileClicked(false)}>About</Link>
          </div>
          <div className={styles.navItemMobile}>
          <Link className={styles.navLink} to="/forums" onClick={() => setIsMobileClicked(false)}>Forums</Link>
          </div>
          <div className={styles.navItemMobile}>
          <Link className={styles.navLink} to="/editAccount" onClick={() => setIsMobileClicked(false)}>Edit Account</Link>
          </div>
          <div className={styles.navItemMobile}>
          <Link className={styles.navLink} onClick={() => {
            setNewUser(false) 
            setIsMobileClicked(false)}}
            >Sign Out</Link>
          </div>
        </div>:
        <div className={styles.navItemsMobile}>
            <div className={styles.navItemMobile}>
          <Link className={styles.navLink} to="/finalProject" onClick={() => setIsMobileClicked(false)}>Home</Link>
          </div>
          <div className={styles.navItemMobile}>
          <Link className={styles.navLink} to={"/about"} onClick={() => setIsMobileClicked(false)}>About</Link>
          </div>
          {/* Will implement tomorrow. */}
          <div className={styles.navItemMobile}>
          <Link className={styles.navLink} to={null} onClick={() => setIsMobileClicked(false)}>Sign in</Link>
          </div>
        </div>
        }
    </div>
    )
}

export default MobileNav