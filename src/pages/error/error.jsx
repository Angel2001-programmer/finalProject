import styles from "./error.module.css"
import { Link } from "react-router-dom";

const Error = () => {
    return(
        <div className={styles.errorContainer}>
            <div className={styles.messsage}>
                <h1>:(</h1>
                <p>Something Went Wrong</p>
                <button><Link to="/finalProject">Return to HomePage</Link></button>
            </div>
        </div>
    )
}

export default Error;