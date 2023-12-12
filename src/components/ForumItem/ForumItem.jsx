import styles from "./ForumItem.module.css";

const ForumItem = props => {
    return(
        <div className={styles.row} onClick={props.click}>
            <img className={styles.icon} src={props.icon} alt="Icon"/>
            <div className={styles.Textcolumn}>
            <p className={styles.title}>{props.title}</p>
            <p className={styles.subtitle}>{props.userName}</p>
            </div>
        </div>
    )
}

export default ForumItem;