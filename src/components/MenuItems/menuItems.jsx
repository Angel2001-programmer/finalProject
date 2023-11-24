import styles from "./menuItem.module.css";
import { Link } from "react-router-dom";

const MenuItems = () => {
    return(
        <ul>
            <li className={styles.item}><Link to="/finalProject">Home</Link></li>
            <li className={styles.item}><Link to="/about">About</Link></li>
            <li className={styles.item}><Link to="/contact">Contact</Link></li>
        </ul>
    )
}

export default MenuItems;