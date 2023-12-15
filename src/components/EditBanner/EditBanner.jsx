import styles from "./EditBanner.module.css";
import profile from '../../assets/images/logos/user.png';
import { Fragment } from "react";

const EditBanner = () => {
    return (
        <Fragment>
        <div className={styles.banner}></div>
				<div className={styles.profile}>
					<img className={styles.profilePicture} src={profile} alt='profile.' />
					<h4 className={styles.profileName}>USERNAME</h4>
		</div>
        </Fragment>
    )
}

export default EditBanner;
